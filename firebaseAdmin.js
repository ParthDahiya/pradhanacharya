const admin = require("firebase-admin");

const serviceAccount = require("./pradhanacharya-59eae-firebase-adminsdk-z6avc-03d43dcc11.json"); 

export const verifyIdToken = (token) => {
    if(!admin.apps.length){
        admin.initializeApp({
            credentials: admin.credential.cert(serviceAccount),
            databaseURL: "https://pradhanacharya-59eae.firebaseio.com"
        });
    }

}