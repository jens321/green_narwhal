const functions = require('firebase-functions');
const paypal = require('paypal-rest-sdk');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

paypal.configure({
  	mode: 'sandbox', // Sandbox or live
  	client_id: 'ARa8y6DOF0fvXUGbOt58hcdzPvg8S1Q9sXr92lz35IZsoM0REUgs2nSQeX49eLHCou09rpWpsJXpXqc8',
  	client_secret: 'EFarzg32Ij11rfKx_0IsevryYYgZ4x3G0ofJnINsoHDFZnsGCAs-dzEBzgebAKZ91ZanwoNPF1FuKuU-'});

exports.authorize_payment = functions.https.onRequest((request, response) => {
  
})
