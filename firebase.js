const admin = require('firebase-admin');
const serviceAccount = require('./skillswap-9bfec-firebase.json'); // Path to downloaded JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://<your-database-name>.firebaseio.com" // for Realtime DB
});

const db = admin.database(); // Realtime DB
// const db = admin.firestore(); // Firestore (alternative)

module.exports = { admin, db };
