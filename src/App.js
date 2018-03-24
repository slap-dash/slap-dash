import React, { Component } from 'react';

import TokBoxDemo from './TokBoxDemo.js';

import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    const App = styled.div`
      text-align: center;
      background-color: #222;
      height: 100vh;
      width: 100vw;
      color: white;
    `;

    return (
      <App>
        <TokBoxDemo />
      </App>
    );
  }
}

export default App;
