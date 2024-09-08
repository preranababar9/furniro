import { Firestore, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const AddProduct = async (data) => {
  try {
    const response = await db.collection("products").doc(data.id).set(data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};



export const getAllProducts = async () => {
  try {
    const response = await db.collection("products").get(); //
    const data = response.docs.map((doc) => doc.data());
    return data;
  } catch (error) {
    return error;
  }
};



export const getProductsById = async (id) => { // Fetching a specific product by its ID.
  try {
    const response = await db.collection("products").doc(id).get(); //for fetching product by id for product detail page 
    
    const data =  response.data(); //data() method returns the document's contents in the form of a JavaScript object.
    return data;
  } catch (error) {
    return error;
  }
};
