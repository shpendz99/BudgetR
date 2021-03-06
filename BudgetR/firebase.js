// // Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh3is_dyjGzzudmKpqydn4CFx0tU46fM4",
  authDomain: "fir-auth-budgetr.firebaseapp.com",
  projectId: "fir-auth-budgetr",
  storageBucket: "fir-auth-budgetr.appspot.com",
  messagingSenderId: "138509704915",
  appId: "1:138509704915:web:bfad0d41116d00aa02fe26",
  measurementId: "G-MXBB8GWN2R"
};

// // Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };