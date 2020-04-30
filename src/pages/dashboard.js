import React from 'react';
import ChatList from '../components/ChatList';
import ChatBox from '../components/ChatBox';
import TextBar from '../components/TextBar';
import NewChat from '../components/NewChat';
import Settings from '../components/Settings';
import moment from 'moment';
const firebase = require("firebase");

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedChat: null,
            addChat: false,
            settings: false,
            email: null,
            name: null,
            initial: null,
            chats:[],
            isLoading: true
        };
    }
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async user => {
            if (!user){
                this.props.history.push('/login');
            } else {
                await firebase.firestore()
                              .collection('chats')
                              .where('users','array-contains', user.email)
                              .onSnapshot(async res => {
                                  const chats = res.docs.map(chat => chat.data());
                                  await this.setState({
                                      email: user.email,
                                      name: user.displayName,
                                      initial: user.displayName.split('')[0],
                                      chats: chats
                                  }, () => this.setState({isLoading: false}));
                              })
            }
        })
    }
    newChatButton = () => {
        this.setState({addChat: true, selectedChat: null, settings: false});
    }
    settingsButton = () => {
        this.setState({addChat: false, selectedChat: null, settings: true});
    }
    selectChat = async (chatIndex) => {
        await this.setState({selectedChat: chatIndex, addChat: false, settings: false});
        this.receiverReadMsg();
    }
    buildDocKey = (friend) => [this.state.email, friend].sort().join(':');
    
    send = (msg) => {
        const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(usr => usr !== this.state.email)[0]);
        firebase.firestore()
                .collection('chats')
                .doc(docKey)
                .update({
                    messages: firebase.firestore.FieldValue.arrayUnion({
                        sender: this.state.email,
                        message: msg,
                        time: moment().format("MMM DD YYYY [at] LT")
                    }),
                    hasRead: false,
                });
    }

    receiverClickMsg = (index) => this.state.chats[index].messages[this.state.chats[index].messages.length - 1].sender !== this.state.email;
    receiverReadMsg = () => {
        const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat].users.filter(user => user !== this.state.email)[0]);
        if (this.receiverClickMsg(this.state.selectedChat)){
            firebase.firestore()
                    .collection('chats')
                    .doc(docKey)
                    .update({
                        hasRead: true,
                    })
        }
    }
    goToChat = async (key, msg) => {
        const chatUsers = key.split(':');
        const chat = this.state.chats.find(chat => chatUsers.every(user => chat.users.includes(user)));
        this.setState({addChat:true});
        await this.selectChat(this.state.chats.indexOf(chat));
        this.send(msg);
    }
    createChat = async(chat) => {
        const key = this.buildDocKey(chat.sendTo);
        await firebase.firestore()
                    .collection('chats')
                    .doc(key)
                    .set({
                        hasRead: false,
                        users:[this.state.email, chat.sendTo],
                        messages:[{
                            message: chat.message,
                            sender: this.state.email,
                            time: moment().format("MMM DD YYYY [at] LT")
                        }]
                    })
        this.setState({addChat:false});
        const chatUsers = key.split(':');
        const index = this.state.chats.find(chat => chatUsers.every(user => chat.users.includes(user)));
        this.selectChat(this.state.chats.indexOf(index));
    }

    userInput = (e) =>{
        this.setState({name: e.target.value});
    }
    updateProfile = (e) => {
        e.preventDefault();
        alert(this.state.name)
    }
    render(){
        return(
            <div>
                <ChatList history = {this.props.history} newChatClick = {this.newChatButton} selectChat = {this.selectChat} loading = {this.state.isLoading}
                chats = {this.state.chats} userEmail = {this.state.email} chatIndex = {this.state.selectedChat} settings = {this.settingsButton}/>
                {this.state.addChat ? <NewChat goTo = {this.goToChat} addChat = {this.createChat}/> : this.state.settings ?
                <Settings name = {this.state.name} initial = {this.state.initial} nameChange = {this.userInput} update = {this.updateProfile}/> :
                <ChatBox user = {this.state.email} name = {this.state.name} initial = {this.state.initial} nameChange = {this.userInput} 
                chat = {this.state.chats[this.state.selectedChat]} update = {this.updateProfile}/>}
                {this.state.selectedChat !== null && !this.state.addChat ? <TextBar new = {this.state.addChat} send = {this.send} read = {this.receiverReadMsg}/> : null}
            </div>
        );
    }
}

export default Dashboard;