import { storage } from "../config/firebase";



export const addFile = async (file, folderPath, fileName) => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`${folderPath}/${fileName} `);
        try {
          const snapshot = await fileRef.put(file);
          const downloadURL = await snapshot.ref.getDownloadURL();
          return downloadURL;
        } catch (error) {
          return error;
        }
      };