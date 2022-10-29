const firebase = require('firebase/app')
const auth = require('firebase/auth')



// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyAg1ks8i4Fz0KsBs0L24TB49e7lVoOfPSA",
  
    authDomain: "jerseyworld-96734.firebaseapp.com",
  
    projectId: "jerseyworld-96734",
  
    storageBucket: "jerseyworld-96734.appspot.com",
  
    messagingSenderId: "267529138253",
  
    appId: "1:267529138253:web:124574e909f37e34422c04",
  
    measurementId: "G-YHRGTQLR08"
  
  };

  // Initialize Firebase

firebase.initializeApp(firebaseConfig);


module.exports.auth = auth
module.exports.firebase = firebase

