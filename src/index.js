import React from 'react';
import ReactDOM from 'react-dom';
//import  CLASSNAME from FILENAME.JS
import Achievements from './pages/achievements/achievements.js';
import User from './pages/user/user.js';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//firebase config
var firebaseConfig = {
	apiKey: "AIzaSyCsgwep2QReXPoNpKA5Kkc1pCpRoRFLh6Y",
	authDomain: "agc-achievers.firebaseapp.com",
	databaseURL: "https://agc-achievers-default-rtdb.firebaseio.com",
	projectId: "agc-achievers",
	storageBucket: "agc-achievers.appspot.com",
	messagingSenderId: "678763995773",
	appId: "1:678763995773:web:fc75e9343633ce55b40714"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const app = document.getElementById('app');

ReactDOM.render(
  //<Achievements />,  //CLASSNAME
  <Router>
  <div>
    <Route exact path="/" component={Achievements}/>
    <Route path="/user/:userID" component={User}/>
    </div>
  </Router>,
  app// to be rendered in this segment
);
