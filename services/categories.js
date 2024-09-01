import { db } from "../config/firebase";

export const addCategory = async (data) => {
  try {
    const categoryOutput = await db
      .collection("category")
      .doc(data.id)
      .set(data);
    return categoryOutput;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllCategoryData = async () => {
        try {
                const response = await db.collection("category").get();
                const categoryData = response.docs().map((doc) => doc.data());
                return categoryData;
               
        } catch (error) {
                console.log(error);
                return error;
                
        }
}