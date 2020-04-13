import React from 'react';
import {Link} from 'react-router-dom';
import { Button, FormControl, InputLabel, Input, Paper, 
    withStyles, CssBaseline, Typography} from '@material-ui/core';
import signupStyle from '../styles/signup';
import {ErrorOutlineOutlined} from '@material-ui/icons';
const firebase = require("firebase");

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            name: null,
            email: null,
            password: null,
            passwordConfirm: null,
            error: ''
        };
    }

    submitSignup = (e) => {
        e.preventDefault();
        if (this.state.password !== this.state.passwordConfirm){
            this.setState({error: 'Passwords do not match'});
            return;
        }

        firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(authRes => {
                    const user = {
                        email: authRes.user.email,
                        name: this.state.name
                    };
                    firebase.firestore()
                            .collection('users')
                            .doc(this.state.email)
                            .set(user)
                            .then(() => {
                                this.props.history.push('/dashboard')
                            }, dbErr => {
                                this.setState({error: dbErr.message})
                            })
                    },authErr => {
                        this.setState({error: authErr.message})
                    })

    }
    userInput = (type, e) => {
        this.setState({[type]: e.target.value})
    }


    render(){
        const {classes} = this.props;
        return(
            <main className = {classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className = {classes.paper}>
                    <Typography component ='h1' variant='h5'>Sign Up to Start Chatting</Typography>
                    <form className = {classes.form} onSubmit={(e) => this.submitSignup(e)}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor = 'signup-name' color = 'secondary'>Enter Username</InputLabel>
                            <Input color = 'secondary' onChange={(e) => this.userInput('name', e)} autoFocus id = 'signup-name'/>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor = 'signup-email' color = 'secondary'>Enter Email</InputLabel>
                            <Input color = 'secondary' autoComplete='email' onChange={(e) => this.userInput('email', e)} id = 'signup-email'/>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor = 'signup-password' color = 'secondary'>Password</InputLabel>
                            <Input type = 'password' color = 'secondary' onChange={(e) => this.userInput('password', e)} id = 'signup-password'/>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor = 'signup-password-confirm' color = 'secondary'>Confirm Password</InputLabel>
                            <Input type = 'password' color = 'secondary' onChange={(e) => this.userInput('passwordConfirm', e)} id = 'signup-password-confirm'/>
                        </FormControl>
                        <Button type = 'submit' fullWidth variant='contained' className = {classes.submit}>Sign Up</Button>
                    </form>
                    {this.state.error ? <Typography className = {classes.errorText} component = 'h5' variant = 'subtitle1'><ErrorOutlineOutlined/>&nbsp;{this.state.error}</Typography>: null}
                    <Typography component = 'h5' variant = 'subtitle1' className = {classes.loginHeader}>
                        Already have an account? <Link className = {classes.loginLink} to = '/login'>Log In</Link></Typography>
                </Paper>
            </main>
        );
    }
}

export default withStyles(signupStyle)(Signup);