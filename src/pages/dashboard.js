import React from 'react';
import ChatList from '../components/chatList'
import ChatBox from '../components/chatBox'
const firebase = require("firebase")

class Dashboard extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedChat: null,
            addChat: false,
            email: null,
            name: null,
            chats:[]
        }
    }
    componentDidMount = () =>{
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
                                      chats: chats
                                  });
                                  console.log(this.state)
                              })
            }
        })

    }
    newChatButton = () => {
        this.setState({addChat: true, selectChat: null});
    }
    selectChat = (chatIndex) => {
        console.log('index',chatIndex)
        this.setState({selectedChat: chatIndex})
    }
    render(){
        return(
            <div>
                <ChatList history = {this.props.history} 
                newChatClick = {this.newChatButton} 
                selectChat = {this.selectChat} 
                chats = {this.state.chats} 
                userEmail = {this.state.email} 
                userName = {this.state.name}
                chatIndex = {this.selectedChat}>
                </ChatList>
                {this.state.addChat ? null : 
                <ChatBox user = {this.state.email} chat = {this.state.chats[this.state.selectedChat]}></ChatBox>}
            </div>
        );
    }
}

export default Dashboard;