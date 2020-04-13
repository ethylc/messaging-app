import React from 'react';
import { IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar, 
    withStyles, Typography, Divider, ListItemIcon,Tooltip} from '@material-ui/core';
import {NotificationsActive, CreateTwoTone,ExitToAppTwoTone} from '@material-ui/icons';
import chatListStyle from '../styles/chatList';
const firebase = require("firebase");

class ChatList extends React.Component{
    newChat = () => {
        console.log('create chat')
    }
    selectChat = (index) =>{
        this.props.selectChat(index);
    }
    logOut = () => firebase.auth().signOut();

    render(){
        const {classes} = this.props;
        return(
            <main className = {classes.root}>
                <Typography component = 'h1' variant = 'h4' display ='inline'>Chats</Typography>
                <Tooltip title="Create new chat"><IconButton aria-label = 'create new chat' color = 'secondary' onClick = {this.newChat}><CreateTwoTone/></IconButton></Tooltip>
                <Tooltip title="Logout"><IconButton aria-label = 'logout' color = 'secondary' onClick = {this.logOut}><ExitToAppTwoTone/></IconButton></Tooltip>
                {this.props.chats.length > 0 ? 
                <List>
                    {
                        this.props.chats.map((chat, index) => {
                            return(
                                <div key = {index}>
                                <ListItem onClick = {() => this.selectChat(index)} 
                                className = {classes.listItem} selected = {this.props.chatIndex === index}
                                alignItems = 'flex-start'>
                                    <ListItemAvatar>
                                        <Avatar>{chat.users.filter(user => user !== this.props.userEmail)[0].split('')[0]}</Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary = {chat.users.filter(user => user !== this.props.userEmail)[0]}
                                    secondary = {<React.Fragment><Typography component = 'span' color = 'textSecondary'>
                                        {chat.messages[chat.messages.length - 1].message.substring(0, 30)}
                                        </Typography></React.Fragment>}>

                                    </ListItemText>
                                </ListItem>
                                <Divider></Divider>
                                </div>
                            )
                        })
                    }
                </List>
                :<Typography component = 'h1' variant = 'h5'>No chats avaliable</Typography>}

            </main>
            );
    }
}

export default withStyles(chatListStyle)(ChatList);