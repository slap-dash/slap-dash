import React, { Component } from 'react';
import { 
  preloadScript,
  OTSession,
  OTPublisher,
  OTStreams,
  OTSubscriber
} from 'opentok-react';

class TokBoxDemo extends Component {
  render() {
    return (
      <OTSession apiKey="your-api-key" sessionId="your-session-id" token="your-session-token">
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    );
  }
}

export default preloadScript(TokBoxDemo);
