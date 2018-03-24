export function handler(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: API_KEY})
  })
}
