const admin = require('firebase-admin');
const serviceAccount = require('../skillswap-9bfec-firebase.json'); // Path to downloaded JSON

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/u/0/project/skillswap-9bfec/database/skillswap-9bfec-default-rtdb/data/~2F" // for Realtime DB
});

const db = admin.database(); // Realtime DB
// const db = admin.firestore(); // Firestore (alternative)

module.exports = { admin, db };
