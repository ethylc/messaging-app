import React from 'react';
import {TextField, withStyles, Card, InputAdornment} from '@material-ui/core';
import {Search} from '@material-ui/icons';
import stickerStyle from '../styles/sticker';

class Sticker extends React.Component{
    render(){
        const {classes} = this.props
        return(
            <div className = {classes.main}>
                <Card className = {classes.card}>
                    <TextField InputProps = {{className: classes.searchBar, startAdornment: (
                    <InputAdornment position="start"><Search/></InputAdornment>),}} 
                    fullWidth placeholder = "Search stickers" color = 'secondary'/>
                </Card>
            </div>
        )
    }
}

export default withStyles(stickerStyle)(Sticker);

