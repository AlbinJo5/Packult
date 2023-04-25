import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './firebase'

export async function uploadImage(image, path) {

    try {
        // create a storage reference
        const storageRef = ref(storage, path);

        // upload the file
        const uploadTask = await uploadBytesResumable(storageRef, image);

        // get the download url
        const downloadURL = await getDownloadURL(uploadTask.ref);

        // detele using url
        // const imageRef = ref(storage, downloadURL);
        // await deleteObject(imageRef);
        return { message: "success", data: downloadURL }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}

export async function deleteImage(path) {
    try {
        // detele using url
        const imageRef = ref(storage, path);
        await deleteObject(imageRef);
        return { message: "success" }
    }
    catch (error) {
        console.log("Error: ", error);
        return { message: "error" }
    }
}