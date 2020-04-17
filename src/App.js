import React from 'react';

import {Route, BrowserRouter as Router} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
        <Route path='/login' component = {Login}></Route>
        <Route path='/signup' component = {Signup}></Route>
        <Route path={'/dashboard'} component = {Dashboard}></Route>
    </Router>
  );
}

export default App;
