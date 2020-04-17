import React from 'react'
import {withStyles, TextField} from '@material-ui/core';
import newChatStyle from '../styles/newChat';
import TextBar from '../components/TextBar';
const firebase = require("firebase");

class NewChat extends React.Component{
    constructor(){
        super();
        this.state = {
            username:null,
            message: null,
            addChat: true,
            error:''
        }
    }
    userInput = (type, e) => {
        this.setState({[type]: e.target.value});
    }
    userMessage = (msg) =>{
        this.setState({message: msg});
        this.send();
    }
    send = async() => {
        const userExists = await this.userExist();
        if (userExists){
            const chatExists = await this.chatExist();
            chatExists ? this.goToChat() : this.createChat();
        } else {
            this.setState({error: 'User does not exist'});
        }
    }
    userExist = async()=> {
        const userCheck = await firebase.firestore()
                                        .collection('users')
                                        .get()
        const exists = userCheck.docs.map(doc => doc.data().email).includes(this.state.username);
        return exists;
    }
    chatExist = async() =>{
        const key = this.buildKey();
        const chat = await firebase.firestore()
                                    .collection('chats')
                                    .doc(key)
                                    .get()
        return chat.exists
    }
    buildKey = () => {
        return [firebase.auth().currentUser.email, this.state.username].sort().join(':');
    }
    createChat = () => {
        this.props.addChat({
            sendTo: this.state.username,
            message: this.state.message
        })
    }
    goToChat = () => {
        this.props.goTo(this.buildKey(), this.state.message);
    }
    render(){
        const {classes} = this.props;
        return(
            <main className = {classes.main}>
                <div className = {classes.chatHeader}>
                <TextField className = {classes.textBar} id = 'chat-username'
                rowsMax={1} placeholder="Type the username of friend" color = 'secondary'
                onChange={(e) => this.userInput('username', e)} InputProps={{ disableUnderline: true }}></TextField>
                    </div>
                <TextBar send = {this.userMessage} new = {this.state.addChat}></TextBar>
            </main>
        );
    }
}

export default withStyles(newChatStyle)(NewChat);