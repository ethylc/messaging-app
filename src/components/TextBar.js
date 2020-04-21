import React from 'react';
import {TextField, withStyles} from '@material-ui/core'
import {SendRounded, PhotoLibraryTwoTone, Gif} from '@material-ui/icons';
import textBarStyle from '../styles/textBar';
const firebase = require("firebase");

class TextBar extends React.Component{
    constructor(){
        super();
        this.state = {
            inputText: '',
        };
        this.imageFile = null
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
    onChoosePhoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            this.currentPhotoFile = e.target.files[0]
            // Check this file is an image?
            const prefixFiletype = e.target.files[0].type.toString()
            this.imageFile = e.target.files[0];
            if (prefixFiletype === '') {
                console.log('This file is not an image')
            } else {
                const uploadTask = firebase.storage().ref(`/images/${this.imageFile.name}`).put(this.imageFile)
                uploadTask.on('state_changed', 
                (snapShot) => {
                  console.log(snapShot)
                }, (err) => {
                  console.log(err)
                }, () => {
                  firebase.storage().ref('images').child(this.imageFile.name).getDownloadURL()
                   .then(fireBaseUrl => {
                     this.setState({inputText: fireBaseUrl});
                     this.sendMsg();
                   })
                })
            }
        }
    }
    render() {
        const {classes} = this.props;
        return(
            <div className = {classes.textBarContainer}>
                <PhotoLibraryTwoTone className = {classes.imageBtn} onClick={() => this.refInput.click()}/>
                <Gif className = {classes.imageBtn} onClick = {this.sendMsg}/>
                <input ref={el => {this.refInput = el}} accept="image/*" className={classes.hide} type="file" onChange={this.onChoosePhoto}/>
                <TextField className = {classes.textBar} multiline id = 'textbox'
                rowsMax={4} placeholder="Type a message" color = 'secondary' InputProps={{ classes: {input: this.props.classes['input']}, disableUnderline: true }}
                onKeyUp = {(e) => this.userInput(e)} onKeyDown ={(e) => this.noNewLine(e)} onFocus = {this.userRead}></TextField>
                <SendRounded className = {classes.sendBtn} onClick = {this.sendMsg}/>
            </div>
        )
    }
}

export default withStyles(textBarStyle)(TextBar);