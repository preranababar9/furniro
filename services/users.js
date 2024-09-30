import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";

// Function to sign up a new user using Firebase Authentication
export const signUpWithFirebase = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Function to sign in an existing user using Firebase Authentication
export const signInWithFirebase = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// Function to add user data to the Firestore database
export const AddUser = async (data) => {
  try {
    const response = await db.collection("users").doc(data.id).set(data); //users collection and document (doc) in that using the unique id from the data object and set saves the data in db

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};
