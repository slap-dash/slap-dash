require('dotenv').config();
const OpenTok = require('opentok');

// google location API
// var geocoder = new google.maps.Geocoder;



// eslint-disable-next-line
export function createSession(event, context, callback) {
  const API_KEY = process.env.TOKBOX_API_KEY;
  const SECRET = process.env.TOKBOX_SECRET;
  const opentok = new OpenTok(API_KEY, SECRET);

  const inputPayload = JSON.parse(event.body);

  // eslint-disable-next-line // add us to media server and avoid relayed lag
  opentok.createSession({mediaMode:"routed"}, (err, session) => {
    if (err) return callback(err);

    const publisherToken = opentok.generateToken(session.sessionId, { role: 'publisher' });
    const subscriberToken = opentok.generateToken(session.sessionId, { role: 'subscriber' });

    const response = {
      room_name: inputPayload.room_name,
      session_id: session.sessionId,
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

// here is an example on how to handle location in a server. not sure how to handle it in lambda
// exports.handler = function(event, context, callback) {
//   if (navigator.geolocation) {

//     // call this function to get the location

//     navigator.geolocation.getCurrentPosition(function (position) {

//       // the results return as a lat lng, 
//       //which we will put them into a variable to use in Google's Geocoder 

//       var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//       };

//       // Now we can get the location info(city, state, zip) with Google's Geocoder

//       geocoder.geocode({ 'location': pos }, function (results, status) {
//         if (status === 'OK') {
//           console.log(results);
//         }
//       });
//     });
//   }
// }