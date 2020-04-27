import React from 'react';
import {withStyles, Typography, Avatar, Tooltip, TextField} from '@material-ui/core';
import chatBoxStyle from '../styles/chatBox';
import Settings from '../components/Settings'
const firebase = require("firebase");

class ChatBox extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: null,
            initial: null,
        }
    }
    componentDidMount = () =>{
        const container = document.getElementById('chat-container');
        if (container){
            container.scrollTo(0, container.scrollHeight);
        }
        if (this.props.chat){
            this.getName();
        }
    }
    componentDidUpdate = (prevProps, prevState) => {
        const container = document.getElementById('chat-container');
        if (container){
            container.scrollTo(0, container.scrollHeight);
        }
        if (prevProps.chat !== this.props.chat){
            this.getName();
        }
    }
    getName = () => {
        const user = this.props.chat.users.filter(user => user !== this.props.user)[0];
        firebase.firestore()
                .collection('users')
                .doc(user)
                .get()
                .then((doc) => {
                    this.setState({name: doc.data().name, initial: doc.data().name.split('')[0]});
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
    }
    contentType = (string) => {
        try {
            if (new URL(string)){
                if ((string.match(/\.(jpg|png|gif)/g))){
                    return 'image';
                } else {
                    return 'url';
                }
            }
        } catch {
            return 'string';
        }
    }
    
    messageDisplay = (message) => {
        const type = this.contentType(message)
        switch (type){
            case 'image':
                return <img src={message} alt = {message}/>
            case 'url':
                return <a href = {message} target = "_blank" rel = "noopener noreferrer">{message}</a>
            default:
            case 'string':
                return message
        }
    }

    render(){
        const {classes} = this.props;
        if (this.props.chat === undefined){
            return (
                <Settings name = {this.props.name} initial = {this.props.initial} nameChange = {this.props.nameChange} update = {this.props.update}/>
            );
        } else {
            return(
                <div>
                    <div className = {classes.chatHeader}><Avatar className = {classes.icon}>{this.state.initial}</Avatar>
                    <Tooltip title = {this.props.chat.users.filter(user => user !== this.props.user)[0]} placement = "right">
                        <Typography component = 'h1' variant ='h5'>{this.state.name}</Typography></Tooltip></div>
                    <main id = 'chat-container' className = {classes.content}>
                        {this.props.chat.messages.map((msg, index) => {
                            return(
                                <Tooltip key = {index} title = {msg.time} placement = {msg.sender === this.props.user ? "left" : "right"}>
                                    <div key = {index} className = {msg.sender === this.props.user ? classes.userSent : classes.friendSent}>
                                        
                                    {this.contentType(msg.message) === 'string' ? msg.message : this.contentType(msg.message) === 'image' ? 
                                    <img src={msg.message} alt = {msg.message}/> : <a href = {msg.message} target = "_blank" rel = "noopener noreferrer">{msg.message}</a>}
                                </div></Tooltip>
                            )
                        }
                        )}    
                    </main>
                </div>
            );
        }
        
    }
}

export default withStyles(chatBoxStyle)(ChatBox);