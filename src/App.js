import React, { Component } from 'react';

<<<<<<< HEAD
import TokBoxDemo from './TokBoxDemo.js'
import Grid from './Grid.js'
=======
import TokBoxDemo from './TokBoxDemo.js';
import Landing from './LandingPage.jsx';
>>>>>>> ec65b97eed42e035370a0bd0a46472eacbf68a86

import logo from './logo.svg';
import './App.css';


class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const appCSS = {
      backgroundColor: '#222',
      height: '100vh',
      width: '100vw',
    };

class App extends Component {
  render() {
    return (
      <div className="app" style={appCSS}>
        <TokBoxDemo />
      </div>
    );
  }
}

export default App;
