const admin = require("firebase-admin")
const serviceAccount = require("../kimhakli-8f416-firebase-adminsdk-fbsvc-bd0983cb77.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


module.exports = db;