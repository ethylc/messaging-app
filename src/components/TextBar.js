import React from 'react';
import {TextField, withStyles, IconButton} from '@material-ui/core'
import {SendRounded} from '@material-ui/icons';
import textBarStyle from '../styles/textBar';

class TextBar extends React.Component{
    constructor(){
        super();
        this.state = {
            inputText: '',
        };
    }
    userInput = (e) => {
        if (e.keyCode === 13) {
            this.sendMsg();
        } else {
            this.setState({inputText: e.target.value});
        }
    }
    noNewLine = (e)=>{
        if (e.keyCode === 13) {
            e.preventDefault();
        }
    }
    notEmpty = (msg) => msg && msg.replace(/\s/g, '').length;
    userRead = () => {
        if (!this.props.new){
            this.props.read();
        }
    }
        
    sendMsg = () => {
        if (this.notEmpty(this.state.inputText)){
            this.props.send(this.state.inputText);
        }
        if (!this.props.new){
            document.getElementById('textbox').value = '';
        }
    }
    render() {
        const {classes} = this.props;
        return(
            <div className = {classes.textBarContainer}>
                <TextField className = {classes.textBar} multiline id = 'textbox'
                rowsMax={4} placeholder="Type a message..." color = 'secondary' InputProps={{ disableUnderline: true }}
                onKeyUp = {(e) => this.userInput(e)} onKeyDown ={(e) => this.noNewLine(e)} onFocus = {this.userRead}></TextField>
                <SendRounded className = {classes.sendBtn} onClick = {this.sendMsg}/>
            </div>
        )
    }
}

export default withStyles(textBarStyle)(TextBar);