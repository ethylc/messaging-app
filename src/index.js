import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB1gH9DXt-LXugYX50ZLXWqzIGDWxi52Qw",
  authDomain: "chat-app-f2e6d.firebaseapp.com",
  databaseURL: "https://chat-app-f2e6d.firebaseio.com",
  projectId: "chat-app-f2e6d",
  storageBucket: "chat-app-f2e6d.appspot.com",
  messagingSenderId: "96303789043",
  appId: "1:96303789043:web:b88c530cccc2f375fd5886",
  measurementId: "G-WYJ5T8TSZ0"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
