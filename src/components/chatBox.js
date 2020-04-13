import React from 'react';
import {withStyles} from '@material-ui/core';
import chatBoxStyle from '../styles/chatBox';

class ChatBox extends React.Component{
    render(){
        const {classes} = this.props;
        return(<div className={classes.content}></div>);
    }
}

export default withStyles(chatBoxStyle)(ChatBox);