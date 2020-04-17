import React from 'react';
import {withStyles, Typography, Avatar, Tooltip} from '@material-ui/core';
import chatBoxStyle from '../styles/chatBox';
const firebase = require("firebase");

class ChatBox extends React.Component{
    constructor(props){
        super();
        this.state = {
            name: null,
            inital: null
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
                    this.setState({name: doc.data().name, inital: doc.data().name.split('')[0]});
                }).catch(function(error) {
                    console.log("Error getting document:", error);
                });
    }
    render(){
        const {classes} = this.props;
        if (this.props.chat === undefined){
        return (<main id = 'chat-container' className = {classes.contentNoChat}><Typography component = 'h1' variant ='h5'>
            Welcome {this.props.name}</Typography></main>);
        } else {
            return(
                <div>
                    <div className = {classes.chatHeader}><Avatar className = {classes.icon}>{this.state.inital}</Avatar>
                    <Tooltip title = {this.props.chat.users.filter(user => user !== this.props.user)[0]} placement = "right">
                        <Typography component = 'h1' variant ='h5'>{this.state.name}</Typography></Tooltip></div>
                    <main id = 'chat-container' className = {classes.content}>
                        {this.props.chat.messages.map((msg, index) => {
                            return(
                                <Tooltip title = {msg.time} placement={msg.sender === this.props.user ? "left" : "right"}>
                                    <div key = {index} className = {msg.sender === this.props.user ? classes.userSent : classes.friendSent}>
                                    {msg.message}
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