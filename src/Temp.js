import React, { Component } from 'react';
import {
  preloadScript,
  OTSession,
  OTPublisher,
  OTStreams,
  OTSubscriber,
  createSession,
} from 'opentok-react';
import Band from './TokBoxDemo.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({ clicked: true });
  }

  render() {
    const stream = {
      height: '25%',
      width: '25%',
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    };
    const container = {
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      objectFit: 'cover',
      display: 'flex',
      flexWrap: 'wrap',
      cursor: 'pointer',
    };

    return (
      <div onClick={this.update} style={container}>
        {this.state.clicked === false &&
        <div style={container}>
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=11s0W6lfdPn-tqEAMMIbCrgruTTMX9JwM" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1y4qOxyOJ9kDMPkPFr31-S7qBuG0uyf3Y" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=11s0W6lfdPn-tqEAMMIbCrgruTTMX9JwM" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1y4qOxyOJ9kDMPkPFr31-S7qBuG0uyf3Y" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=11s0W6lfdPn-tqEAMMIbCrgruTTMX9JwM" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1y4qOxyOJ9kDMPkPFr31-S7qBuG0uyf3Y" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=11s0W6lfdPn-tqEAMMIbCrgruTTMX9JwM" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=11s0W6lfdPn-tqEAMMIbCrgruTTMX9JwM" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1C0Vh0RCK4kR6T4sbuHBY7HIVIl4IRAEo" alt="stream" />
          <img style={stream} className="stream" src="https://drive.google.com/uc?id=1y4qOxyOJ9kDMPkPFr31-S7qBuG0uyf3Y" alt="stream" />
        </div>
        }
        {this.state.clicked && <Band room={this.props.room} people={this.props.people} live={this.props.live} />}
      </div>
    );
  }
}

export default App;
