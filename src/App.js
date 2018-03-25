import React, { Component } from 'react';

import TokBoxDemo from './TokBoxDemo.js';
import Landing from './LandingPage.jsx';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const appCSS = {
      backgroundColor: '#222',
      height: '100vh',
      width: '100vw',
    };

    return (
      <div className="app" style={appCSS}>
        <TokBoxDemo />
      </div>
    );
  }
}

export default App;
