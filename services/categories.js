import { db } from "../config/firebase";


// for storing data in db use set(data) with unique doc(data.id)
export const addCategory = async (data) => {//added into db
  try {
    const categoryOutput = await db.collection("category").doc(data.id).set(data);
    return categoryOutput;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllCategoryData = async () => { // fetching from db
  try {

        // Fetch all documents from the 'category' collection in the Firestore database
    const response = await db.collection("category").get();

      // Map over the fetched documents and extract the data from each document
    const categoryData = response.docs.map((doc) =>  doc.data());
    return categoryData;
  } catch (error) {
    console.log(error);
    return error;
  }
};
