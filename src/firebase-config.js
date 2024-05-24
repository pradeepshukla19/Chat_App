// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVTvVSbejuVX4B9ktsFgh1B39kRwY8uHg",
  authDomain: "chatapp-1725d.firebaseapp.com",
  projectId: "chatapp-1725d",
  storageBucket: "chatapp-1725d.appspot.com",
  messagingSenderId: "336189965992",
  appId: "1:336189965992:web:22cb3388c6525463a8e49d",
  measurementId: "G-GHG0JT3280",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
