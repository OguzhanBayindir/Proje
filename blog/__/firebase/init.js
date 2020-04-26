if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAIs6gr3kgwzrxFvyo-TfEYirfT9f6ocKk",
  "authDomain": "uzmez-co.firebaseapp.com",
  "databaseURL": "https://uzmez-co.firebaseio.com",
  "messagingSenderId": "1093070146263",
  "projectId": "uzmez-co",
  "storageBucket": "uzmez-co.appspot.com"
});