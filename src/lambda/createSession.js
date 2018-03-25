require('dotenv').config();
const OpenTok = require('opentok');

// eslint-disable-next-line
export function createSession(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;
  const opentok = new OpenTok(API_KEY, SECRET);

<<<<<<< HEAD
  const inputPayload = JSON.parse(event.body);

  // eslint-disable-next-line
  opentok.createSession((err, session) => {
    if (err) return callback(err);

    const publisherToken = opentok.generateToken(session.sessionId, { role: 'publisher' });
    const subscriberToken = opentok.generateToken(session.sessionId, { role: 'subscriber' });

    const response = {
      room_name: inputPayload.room_name,
      session_id: session.sessionId,
=======
  // eslint-disable-next-line
  opentok.createSession((err, session) => {
    if (err) return callback(err);

    const publisherToken = opentok.generateToken(session.sessionId, { role: 'publisher' });
    const subscriberToken = opentok.generateToken(session.sessionId, { role: 'subscriber' });

    // save the sessionId
    // db.save('session', session.sessionId, done);
    const response = {
      roomName: 'hello_world',
      sessionId: session.sessionId,
>>>>>>> master
      token: {
        publisher: publisherToken,
        subscriber: subscriberToken,
      },
    };

    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response),
    });
  });
}
