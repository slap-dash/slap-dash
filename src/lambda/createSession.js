require('dotenv').config()

export function handler(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;

  // Hit tokbox API to create session
  // store session information in db

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: API_KEY})
  })
}
