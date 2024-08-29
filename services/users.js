import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "../config/firebase";
import { auth } from "../config/firebase";


export const signUpWithFirebase = async(email,password) => {
        try {
                await  createUserWithEmailAndPassword(auth, email, password) ;
                return true;
        } catch (error) {
                console.log(error);
                return error;
        }
} 

export const signInWithFirebase = async(email,password) => {
        try {
                await  signInWithEmailAndPassword(auth, email, password) ;
                return true;
        } catch (error) {
                console.log(error);
                return error;
        }
} 

export const AddUser = async (data) => {
        try{
                const response = await db.collection("users").doc(data.id).set(data);
                return response;
        }
        catch(error){
                console.log(error);
                return error;

        }
};