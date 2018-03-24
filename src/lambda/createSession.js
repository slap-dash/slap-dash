require('dotenv').config()
const axios = require('axios');
const jwt = require('json-web-token');
const uuidv4 = require('uuid/v4');

const nowInSeconds = () => Math.floor(Date.now() / 1000)

export function handler(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;
  const tokbox_url = 'https://api.opentok.com/session/create';

  // Hit tokbox API to create session
  // store session information in db

  const tokbox_auth_payload = jwt.encode(SECRET, {
    'iss': API_KEY,
    'ist': 'project',
    'iat': nowInSeconds(),
    'exp': nowInSeconds() + 180,
    'jti': uuidv4(),
  });

  axios.post(tokbox_url, '', {
    headers: {
      'X-OPENTOK-AUTH': tokbox_auth_payload.value,
      'accept': 'application/json',
    },
  })
  .then(json => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: json.data })
    })
  })
  .catch(exception => callback(exception));
}
