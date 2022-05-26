// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQiQ3EQvtOtC5nHuPoe8VVPMEMmVC9vvc",
    authDomain: "doctors-portal-ec58d.firebaseapp.com",
    projectId: "doctors-portal-ec58d",
    storageBucket: "doctors-portal-ec58d.appspot.com",
    messagingSenderId: "117586895254",
    appId: "1:117586895254:web:100f0ef4eaacbe3a083db7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;