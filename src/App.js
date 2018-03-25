import React, { Component } from 'react';

import TokBoxDemo from './TokBoxDemo.js';
import Landing from './LandingPage.jsx';
import Entry from './Entry.js';
import Jams from './JamList.js';
import Temp from './Temp.js';

import logo from './logo.svg';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: null,
      rooms: [
        {
          sessionId: '1_MX40NjA4Njc4Mn5-MTUyMTkyNjI5NTA4N35RWHEwNVA5NEJDY0VwL2lEWGdSMTNGZm5-UH4',
          token: 'T1==cGFydG5lcl9pZD00NjA4Njc4MiZzaWc9OWFlZTkyYjdhNDIxODIwOTY3ZWJjY2RiNmM2MmEyNjUzYjlkZmE0NTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamM0TW41LU1UVXlNVGt5TmpJNU5UQTROMzVSV0hFd05WQTVORUpEWTBWd0wybEVXR2RTTVROR1ptNS1VSDQmY3JlYXRlX3RpbWU9MTUyMTkyNjM0MyZub25jZT0wLjg4OTQ4NjY2NDQ2NjEyNTImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMjUzMTE0MyZjb25uZWN0aW9uX2RhdGE9cHVibGlzaGVyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
          people: 0,
          live: false,
          id: 0,
        },
        {
          sessionId: '1_MX40NjA4Njc4Mn5-MTUyMTkyNjI5NTA4N35RWHEwNVA5NEJDY0VwL2lEWGdSMTNGZm5-UH4',
          token: 'T1==cGFydG5lcl9pZD00NjA4Njc4MiZzaWc9OWFlZTkyYjdhNDIxODIwOTY3ZWJjY2RiNmM2MmEyNjUzYjlkZmE0NTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamM0TW41LU1UVXlNVGt5TmpJNU5UQTROMzVSV0hFd05WQTVORUpEWTBWd0wybEVXR2RTTVROR1ptNS1VSDQmY3JlYXRlX3RpbWU9MTUyMTkyNjM0MyZub25jZT0wLjg4OTQ4NjY2NDQ2NjEyNTImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMjUzMTE0MyZjb25uZWN0aW9uX2RhdGE9cHVibGlzaGVyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
          people: 0,
          live: false,
          id: 1,
        },
        {
          sessionId: '1_MX40NjA4Njc4Mn5-MTUyMTkyNjI5NTA4N35RWHEwNVA5NEJDY0VwL2lEWGdSMTNGZm5-UH4',
          token: 'T1==cGFydG5lcl9pZD00NjA4Njc4MiZzaWc9OWFlZTkyYjdhNDIxODIwOTY3ZWJjY2RiNmM2MmEyNjUzYjlkZmE0NTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamM0TW41LU1UVXlNVGt5TmpJNU5UQTROMzVSV0hFd05WQTVORUpEWTBWd0wybEVXR2RTTVROR1ptNS1VSDQmY3JlYXRlX3RpbWU9MTUyMTkyNjM0MyZub25jZT0wLjg4OTQ4NjY2NDQ2NjEyNTImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMjUzMTE0MyZjb25uZWN0aW9uX2RhdGE9cHVibGlzaGVyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
          people: 0,
          live: false,
          id: 2,
        },
      ],
    };
    this.updateChoice = this.updateChoice.bind(this);
    this.setPeople = this.setPeople.bind(this);
    this.setLive = this.setLive.bind(this);
  }

  setPeople(index, newNumber) {
    const temp = this.state.rooms.slice();
    temp[index].people = newNumber;
    this.setState({ rooms: temp });
  }

  setLive(index, bool) {
    const temp = this.state.rooms.slice();
    temp[index].live = bool;
    this.setState({ rooms: bool });
  }

  updateChoice(chosen) {
    this.setState({
      choice: chosen,
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
        {console.log(this.state.rooms)}
        {this.state.choice === null && <Entry update={this.updateChoice} />}
        {this.state.choice === 'Watch' && <Temp room={this.state.rooms[0]} people={this.setPeople} live={this.setLive} />}
        {this.state.choice === 'Jam' && <TokBoxDemo room={this.state.rooms[0]} people={this.setPeople} live={this.setLive} />}
      </div>
    );
  }
}

export default App;
