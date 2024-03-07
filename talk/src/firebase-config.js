// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAjWWb5CYswD5xWqbLaIWpOqQABZfnk1Bk",
    authDomain: "talk-53cc6.firebaseapp.com",
    projectId: "talk-53cc6",
    storageBucket: "talk-53cc6.appspot.com",
    messagingSenderId: "408340685663",
    appId: "1:408340685663:web:67922d535f793e9fa4ccea",
    measurementId: "G-XZYSTG3R2G"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();