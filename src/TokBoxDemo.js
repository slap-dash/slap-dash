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
      sessionId: this.props.room.sessionId,
      token: this.props.room.token,
      onStreamsUpdated: (streams) => { this.setState({ streams }); },
    });
    this.props.live(this.props.room.id, true);
    this.props.people(this.props.room.id, this.props.room.people+1)
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
        {this.props.publisher && 
          <OTPublisher
            session={this.sessionHelper.session}
            properties={{
              width: `${Math.round(100 / GRID_COLUMNS)}vw`,
              height: `100vh`,
            }}
          />
          }
        </div>
        {this.state.streams.map(stream => (
          <div className="grid" style={gridCSS}>
            <OTSubscriber
              key={stream.id}
              session={this.sessionHelper.session}
              stream={stream}
              properties={{
                width: `${Math.round(100 / GRID_COLUMNS)}vw`,
                height: `100vh`
              }}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default preloadScript(TokBoxDemo);
