import React, { Component } from 'react';

import TokBoxDemo from './TokBoxDemo.js';
import Landing from './LandingPage.jsx';
import Entry from './Entry.js';
import Jams from './JamList.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: null,
    };
    this.updateChoice = this.updateChoice.bind(this);
  }

  updateChoice(chosen) {
    console.log(this);
    this.setState({
      choice: chosen,
      bandRooms: [1, 2, 3, 4, 5],
      liveRooms: [1, 2, 3, 4, 5],
    });
  }

  render() {
    const appCSS = {
      backgroundColor: '#222',
      height: '100vh',
      width: '100vw',
    };

    return (
      <div className="app" style={appCSS}>
        {this.state.choice === null && <Entry update={this.updateChoice} />}
        {this.state.choice === 'Watch' && <Jams rooms={this.state.liveRooms} />}
        {this.state.choice === 'Jam' && <Jams rooms={this.state.bandRooms} />}
      </div>
    );
  }
}

export default App;
