import React, { Component } from 'react';
import {
  preloadScript,
  OTSession,
  OTPublisher,
  OTStreams,
  OTSubscriber,
  createSession,
} from 'opentok-react';
import styled from 'styled-components';

class TokBoxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { streams: [] };
  }

  componentWillMount() {
    this.sessionHelper = createSession({
      apiKey: '46086782',
      sessionId: '1_MX40NjA4Njc4Mn5-MTUyMTkyNjI5NTA4N35RWHEwNVA5NEJDY0VwL2lEWGdSMTNGZm5-UH4',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njc4MiZzaWc9OWFlZTkyYjdhNDIxODIwOTY3ZWJjY2RiNmM2MmEyNjUzYjlkZmE0NTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamM0TW41LU1UVXlNVGt5TmpJNU5UQTROMzVSV0hFd05WQTVORUpEWTBWd0wybEVXR2RTTVROR1ptNS1VSDQmY3JlYXRlX3RpbWU9MTUyMTkyNjM0MyZub25jZT0wLjg4OTQ4NjY2NDQ2NjEyNTImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMjUzMTE0MyZjb25uZWN0aW9uX2RhdGE9cHVibGlzaGVyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
      onStreamsUpdated: (streams) => { this.setState({ streams }); },
    });
  }

  componentWillUnmount() {
    this.sessionHelper.disconnect();
  }

  render() {
    const WIDTH = 800;
    const HEIGHT = 600;

    const GRID_COLUMNS = 3;
    const GRID_ROWS = 3;

    const GridWrapper = styled.div`
      display: grid;
      grid-template-columns: repeat(${props => props.columns}, 1fr);
    `;

    const Grid = styled.div`
      width: ${props => Math.round(100 / props.columns)}vw;
      height: ${props => Math.round(100 / props.rows)}vh;
      background-color: #ccc;
      color: #000;
    `;

    return (
      <div>
        <div>
          <OTPublisher
            session={this.sessionHelper.session}
            properties={{
              width: `${Math.round(100 / GRID_COLUMNS)}vw`,
              height: `${Math.round(100 / GRID_ROWS)}vh`,
            }}
          />
        </div>
        {this.state.streams.map(stream => (
          <div>
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
              properties={{
                width: `${Math.round(100 / GRID_COLUMNS)}vw`,
                height: `${Math.round(100 / GRID_ROWS)}vh`,
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default preloadScript(TokBoxDemo);
