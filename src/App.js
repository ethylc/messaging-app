import React from 'react';

import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <Router>
        <Route path='/login' component = {Login}></Route>
        <Route path='/signup' component = {Signup}></Route>
        <Route path='/dashboard' component = {Dashboard}></Route>
    </Router>
  );
}

export default App;
