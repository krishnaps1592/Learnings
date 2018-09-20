import React, {Component}  from 'react';
// import './App.css';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import config from './firebase-config'

class App extends Component {

  constructor() {
    super();

    firebase.initializeApp(config);
  }

  componentWillMount() {

    let postsRef = firebase.database().ref('posts');
    let _this = this;
    postsRef.on('value', function (snapshot) {
      console.log(snapshot.val());
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    return ( 
      <div className = "App">
      Hello World </div>
    );
  }
}

export default App;