import { db } from '../../../utils/firebase';
import { collection, getDocs } from "firebase/firestore";

export default async function handler(req, res) {
    // get data from ourWork collection
    const querySnapshot = await getDocs(collection(db, "our-works"));
    const posts = [];
    querySnapshot.forEach((doc) => {
        var obj = {}
        obj.id = doc.id;
        obj = { ...obj, ...doc.data() };
        posts.push(obj);
    });
    res.status(200).json(posts);
}
