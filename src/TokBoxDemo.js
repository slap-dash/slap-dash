import React, { Component } from 'react';
import {
  preloadScript,
  OTSession,
  OTPublisher,
  OTStreams,
  OTSubscriber,
  createSession,
} from 'opentok-react';

class TokBoxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { streams: [] };
  }

  componentWillMount() {
    this.sessionHelper = createSession({
      apiKey: '46086782',
      sessionId: '1_MX40NjA4Njc4Mn5-MTUyMTkyNjI5NTA4N35RWHEwNVA5NEJDY0VwL2lEWGdSMTNGZm5-UH4',
      token: 'T1==cGFydG5lcl9pZD00NjA4Njc4MiZzaWc9NjU1NDgxN2ZiMzAyM2FkN2MzMzY2MTVhNGVlMDU3NjJlNzUxZGFjYTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamM0TW41LU1UVXlNVGt5TmpJNU5UQTROMzVSV0hFd05WQTVORUpEWTBWd0wybEVXR2RTTVROR1ptNS1VSDQmY3JlYXRlX3RpbWU9MTUyMTkyNjQwOSZub25jZT0wLjg0Njc5MTkxNDAyMDMxMDImcm9sZT1zdWJzY3JpYmVyJmV4cGlyZV90aW1lPTE1MjI1MzEyMDcmY29ubmVjdGlvbl9kYXRhPXN1YnNjcmliZXIyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9',
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

    const gridWrapperCSS = {
      display: 'grid',
      gridTemplateColumns: `repeat(${GRID_COLUMNS}, 1fr)`,
    };

    const gridCSS = {
      width: `${Math.round(100 / GRID_COLUMNS)}vw`,
      height: `${Math.round(100 / GRID_ROWS)}vh`,
      color: '#000',
    };

    return (
      <div
        className="grid-wrapper"
        style={gridWrapperCSS}
      >
        <div className="grid" style={gridCSS}>
          <OTPublisher
            session={this.sessionHelper.session}
            properties={{
              width: `${Math.round(100 / GRID_COLUMNS)}vw`,
              height: `${Math.round(100 / GRID_ROWS)}vh`,
            }}
          />
        </div>
        {this.state.streams.map(stream => (
          <div className="grid" style={gridCSS}>
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
