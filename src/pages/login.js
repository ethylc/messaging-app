import React from 'react';
import {Link} from 'react-router-dom';
import { Button, FormControl, InputLabel, Input, Paper, 
    withStyles, CssBaseline, Typography} from '@material-ui/core';
import LoginStyle from '../styles/login';
import {ErrorOutlineOutlined} from '@material-ui/icons';
const firebase = require("firebase");

class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            email: null,
            password: null,
            error: ''
        }
    }
    submitLogin = (e) =>{
        e.preventDefault();
        firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.props.history.push('/dashboard');
                }, err => {
                    this.setState({error: err.message})
                })
    }

    userInput = (type, e) =>{
        this.setState({[type]: e.target.value});
    }
    render(){
        const {classes} = this.props
        return(
            <main className = {classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className = {classes.paper}>
                    <Typography component = 'h1' variant = 'h5'>Login</Typography>
                    <form className = {classes.form} onSubmit = {(e) => this.submitLogin(e)}>
                        <FormControl required fullWidth margin = 'normal'>
                            <InputLabel htmlFor = 'login-email' color = 'secondary' >Enter Email</InputLabel>
                            <Input color = 'secondary'  autoComplete = 'email' autoFocus id = 'login-email' onChange = {(e) => this.userInput('email', e)}/>
                        </FormControl>
                        <FormControl required fullWidth margin = 'normal'>
                            <InputLabel htmlFor = 'login-password' color = 'secondary' >Enter Password</InputLabel>
                            <Input color = 'secondary' type = 'password' id = 'login-password' onChange = {(e) => this.userInput('password', e)}/>
                        </FormControl>
                        <Button type = 'submit' fullWidth variant = 'contained' className = {classes.submit} >Login</Button>
                    </form>
                    {this.state.error ? <Typography className = {classes.errorText} component = 'h5' variant = 'subtitle1'><ErrorOutlineOutlined/>&nbsp; Incorrect login information</Typography>: null}
                    <Typography component = 'h5' variant = 'subtitle1' className = {classes.signupHeader}>
                        Don't have an account? <Link className = {classes.signupLink} to = '/signup'>Sign up</Link></Typography>
                </Paper>
            </main>
        );
    }
}

export default withStyles(LoginStyle)(Login);