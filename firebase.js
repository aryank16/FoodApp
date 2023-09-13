// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDU2hqJln7oHEDDIohE7nUV66r9yW9bPs",
  authDomain: "foodapp-1edb8.firebaseapp.com",
  projectId: "foodapp-1edb8",
  storageBucket: "foodapp-1edb8.appspot.com",
  messagingSenderId: "877769209069",
  appId: "1:877769209069:web:f1f3cf40f13dd608a088e4",
  measurementId: "G-3VBHS4KV1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);