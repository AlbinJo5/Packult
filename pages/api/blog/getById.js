import { db } from '../../../utils/firebase';


export default async function handler(req, res) {
    const { id } = req.query;
    // get data from blogs document using id
    const docRef = await db.collection('blogs').doc(id).get();
    const post = docRef.data();
     
    res.status(200).json(post);
    }


