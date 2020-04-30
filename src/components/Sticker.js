import React from 'react';
import { TextField, withStyles, Card, InputAdornment, IconButton } from '@material-ui/core';
import { Search, Close } from '@material-ui/icons';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import stickerStyle from '../styles/sticker';

const gf = new GiphyFetch('U6LPyX5MxamQrWQUxIQ4xzKzwNOqdb3O');

class Sticker extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            isEmpty: true
        }
        this.timer = null
    }

    fetchGifs = (offset) => gf.trending({ offset, limit: 10 });
    searchGifs = (search) => (offset) => {
        console.log({ offset, search })
        return gf.search(search, { sort: 'relevant', lang: 'en', offset, limit: 10 });
    }

    userInput = (e) => {
        let s = e.target.value;
        if (s === ''){
            this.setState({isEmpty: true})
        } else {
            this.setState({isEmpty: false})
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.sendRequest(s)
        }, 1000);
    }
    sendRequest = (s) => {
        this.setState({ search: s.trim() })
    }
    clear = () => {
        const field = document.getElementById('searchInput');
        field.value = ''
        this.sendRequest('')
        this.setState({isEmpty: true})
    }
    render() {
        const { classes } = this.props
        return (
            <div className = {classes.main}>
                <Card className = {classes.card}>
                    <TextField id = 'searchInput' InputProps = {{
                        className: classes.searchBar, startAdornment: (<InputAdornment position = "start"><Search color = 'inherit'/></InputAdornment>), 
                            endAdornment:(this.state.isEmpty ? null : <IconButton onClick = {this.clear} classes = {{root: classes.close}}><Close fontSize='small'/></IconButton>)
                    }} placeholder = "Search GIFs" color = 'secondary' onChange = {(e) => this.userInput(e)} />
                    <div className = {classes.container}>
                        {this.state.search === '' ? 
                        <Grid key = 'trending' width = {230} columns = {1} hideAttribution = {true} fetchGifs = {this.fetchGifs} onGifClick = {this.props.sendGif} /> : 
                        <Grid key = 'search' width = {230} columns = {1} hideAttribution = {true} fetchGifs = {this.searchGifs(this.state.search)} onGifClick = {this.props.sendGif} />}
                        
                    </div>
                </Card>
            </div>
        )
    }
}

export default withStyles(stickerStyle)(Sticker);

