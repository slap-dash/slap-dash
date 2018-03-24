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
      <OTSession apiKey="46086782" sessionId="1_MX40NjA4Njc4Mn5-MTUyMTkyNjI5NTA4N35RWHEwNVA5NEJDY0VwL2lEWGdSMTNGZm5-UH4" token="T1==cGFydG5lcl9pZD00NjA4Njc4MiZzaWc9OWFlZTkyYjdhNDIxODIwOTY3ZWJjY2RiNmM2MmEyNjUzYjlkZmE0NTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROamM0TW41LU1UVXlNVGt5TmpJNU5UQTROMzVSV0hFd05WQTVORUpEWTBWd0wybEVXR2RTTVROR1ptNS1VSDQmY3JlYXRlX3RpbWU9MTUyMTkyNjM0MyZub25jZT0wLjg4OTQ4NjY2NDQ2NjEyNTImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMjUzMTE0MyZjb25uZWN0aW9uX2RhdGE9cHVibGlzaGVyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9">
        <OTPublisher />
        <OTStreams>
          <OTSubscriber />
        </OTStreams>
      </OTSession>
    );
  }
}

export default preloadScript(TokBoxDemo);
