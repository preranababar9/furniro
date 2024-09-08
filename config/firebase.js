// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";   //  the Firestore database service
import "firebase/compat/storage";     //  Firebase's storage service for file uploads
import { getAuth } from "firebase/auth";     //  Firebase's authentication service 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADPkFfzi28dI6MUc87rWeJy846xXO3S9M",
  authDomain: "furniro-572d9.firebaseapp.com",
  projectId: "furniro-572d9",
  storageBucket: "furniro-572d9.appspot.com",
  messagingSenderId: "529004485593",
  appId: "1:529004485593:web:2442540c694d618b6617c8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();       // exporting storing data
export const storage = firebase.storage()   // exporting Storage
export const auth = getAuth()   // exporting authentication