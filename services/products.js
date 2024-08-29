import { db } from "../config/firebase";

export const getAllProducts = async () => {
        try{
                const response = await db.collection("products").get();//
                const data = response.docs.map((doc) => doc.data());
                return data
        }
        catch(error){
                return error;
        }
};

export const AddProduct = async (data) => {
        try{
                const response = await db.collection("products").doc(data.id).set(data);
                return response;
        }
        catch(error){
                console.log(error);
                return error;

        }
};