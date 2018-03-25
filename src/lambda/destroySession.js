require('dotenv').config();

export function destroySession(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;

  // Talk to tokbox API
  // Destroy session
  // Remove from DB

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: API_KEY }),
  });
}
