import React from 'react';
import {withStyles, Typography, Avatar, TextField, InputAdornment, Button, Badge, IconButton} from '@material-ui/core';
import {Edit, AddAPhoto} from '@material-ui/icons';
import settingsStyle from '../styles/settings';
const firebase = require("firebase");

class Settings extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    click = (e) => {
        alert('clicked!')
    }

    render(){
        const {classes} = this.props
        return(
            <main id = 'chat-container' className = {classes.contentNoChat}>
            <div className = {classes.profile}><Typography component = 'h1' variant = 'h5'>
            Welcome {this.props.name}</Typography>
            <form onSubmit = {this.props.update}>
            <Badge overlap = "circle" anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
            badgeContent={<IconButton aria-label = 'update picture' color = 'secondary' onClick={() => this.refInput.click()}>
                <AddAPhoto fontSize = 'large' color='action'/></IconButton>}>
                <Avatar className = {classes.userIcon}>{this.props.initial}</Avatar></Badge><br/><br/>
            <input ref={el => {this.refInput = el}} accept="image/*" className={classes.hide} type="file" onChange={this.onChoosePhoto}/>
            <TextField required label = 'Name' color = 'secondary' onChange = {this.props.nameChange} value = {this.props.name || ''} 
            InputProps = {{endAdornment: (<InputAdornment position="end"><Edit/></InputAdornment>)}}/><br/>
            <Button type = 'submit' variant = 'contained' className = {classes.update} >Save Changes</Button>
            </form>
            </div></main>
        )
    }
}
export default withStyles(settingsStyle)(Settings);