const firebase = require("firebase");
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAetJSARIBlDY__HKDYDIHa1xohGHC2UM0",
    authDomain: "pradhanacharya-59eae.firebaseapp.com",
    projectId: "pradhanacharya-59eae",
    storageBucket: "pradhanacharya-59eae.appspot.com",
    messagingSenderId: "1044584554849",
    appId: "1:1044584554849:web:c0fe55044b53045f7ce520"
}

export default function firebaseClient() {
    if(!firebase.apps.length) {
        firebase.initializeApp(FIREBASE_CONFIG);
    }
}