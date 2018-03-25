import { listSessions } from './listSessions';
import { createSession } from './createSession';
import { destroySession } from './destroySession';

// eslint-disable-next-line
export function handler(event, context, callback) {
  if (event.httpMethod === 'GET') {
    listSessions(event, context, callback);
  } else if (event.httpMethod === 'POST') {
    createSession(event, context, callback);
  } else if (event.httpMethod === 'DELETE') {
    destroySession(event, context, callback);
  } else {
    callback(null, {
      statusCode: 500,
      body: JSON.stringify({ msg: 'Try with different http method' }),
    });
  }
}
