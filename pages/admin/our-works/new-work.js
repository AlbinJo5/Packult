import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/components/new-work.module.scss"
import { useState } from 'react'
import { useRouter } from "next/router"
import { db, storage } from "../../../utils/firebase.js"
import { collection, doc, setDoc } from "firebase/firestore"
import { uploadBytes, ref, getDownloadURL, deleteObject } from "firebase/storage"
import { ADMIN_ROUTES } from "../../../common/routes"
function NewWork() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [image1Url, setImage1Url] = useState("/assets/admin/dummyImage.jpg")
    const [image2Url, setImage2Url] = useState("/assets/admin/dummyImage.jpg")
    const [image3Url, setImage3Url] = useState("/assets/admin/dummyImage.jpg")
    const [image4Url, setImage4Url] = useState("/assets/admin/dummyImage.jpg")

    const [image1, setImage1] = useState(null)
    const [image2, setImage2] = useState(null)
    const [image3, setImage3] = useState(null)
    const [image4, setImage4] = useState(null)

    const [title, setTitle] = useState("")
    const [para1, setPara1] = useState("")
    const [para2, setPara2] = useState("")
    const [para3, setPara3] = useState("")
    const [para4, setPara4] = useState("")

    const handleImage1 = (e) => {
        setImage1(e.target.files[0])
        setImage1Url(URL.createObjectURL(e.target.files[0]))
    }
    const handleImage2 = (e) => {
        setImage2(e.target.files[0])
        setImage2Url(URL.createObjectURL(e.target.files[0]))
    }
    const handleImage3 = (e) => {
        setImage3(e.target.files[0])
        setImage3Url(URL.createObjectURL(e.target.files[0]))
    }
    const handleImage4 = (e) => {
        setImage4(e.target.files[0])
        setImage4Url(URL.createObjectURL(e.target.files[0]))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {
            // check for empty fields with images
            if (title === "" || para1 === "" || para2 === "" || para3 === "" || para4 === "" || image1 === null || image2 === null || image3 === null || image4 === null) {
                alert("Please fill all fields")
                setLoading(false)
                return
            }

            // create a ref to firestore
            const workRef = doc(collection(db, "our-works"))

            // upload images to firebase storage and get the urls
            const image1Ref = ref(storage, `our-works/${workRef.id}/image1`)
            const image2Ref = ref(storage, `our-works/${workRef.id}/image2`)
            const image3Ref = ref(storage, `our-works/${workRef.id}/image3`)
            const image4Ref = ref(storage, `our-works/${workRef.id}/image4`)

            await uploadBytes(image1Ref, image1)
            await uploadBytes(image2Ref, image2)
            await uploadBytes(image3Ref, image3)
            await uploadBytes(image4Ref, image4)

            const image1Url = await getDownloadURL(image1Ref)
            const image2Url = await getDownloadURL(image2Ref)
            const image3Url = await getDownloadURL(image3Ref)
            const image4Url = await getDownloadURL(image4Ref)

            // create a new work object
            const newWork = {
                title: title,
                para1: para1,
                para2: para2,
                para3: para3,
                para4: para4,
                image1: image1Url,
                image2: image2Url,
                image3: image3Url,
                image4: image4Url,
            }

            // add the new work to firestore
            setDoc(workRef, newWork)
                .then(() => {
                    alert("New work added successfully")
                    setLoading(false)

                    // reset the form
                    setTitle("")
                    setPara1("")
                    setPara2("")
                    setPara3("")
                    setPara4("")
                    setImage1(null)
                    setImage2(null)
                    setImage3(null)
                    setImage4(null)
                    setImage1Url("/assets/admin/dummyImage.jpg")
                    setImage2Url("/assets/admin/dummyImage.jpg")
                    setImage3Url("/assets/admin/dummyImage.jpg")
                    setImage4Url("/assets/admin/dummyImage.jpg")

                    // redirect to the works page
                    router.push(ADMIN_ROUTES.OUR_WORKS)
                })
                .catch((error) => {
                    alert(error.message)
                    // delete the images from storage
                    deleteObject(image1Ref)
                    deleteObject(image2Ref)
                    setLoading(false)
                })

        } catch (error) {
            alert(error.message)
            setLoading(false)
            console.log(error);
        }
    }
    return (
        <AdminLayout>
            <div className={styles.newWork}>
                {
                    loading ? <h3>Posting the work ...</h3> :
                        <form onSubmit={handleSubmit} >
                            <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                            <label htmlFor="new_work_image1">
                                <Image src={image1Url} height={1000} width={1000} alt="our work" />
                            </label>
                            <input type="file" id="new_work_image1" onChange={handleImage1} />
                            <textarea onChange={(e) => setPara1(e.target.value)} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <textarea onChange={(e) => setPara2(e.target.value)} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <div className={styles.images2} >
                                <label htmlFor="new_work_image2">
                                    <Image src={image2Url} height={1000} width={1000} alt="our work" />
                                </label>
                                <input type="file" id="new_work_image2" onChange={handleImage2} />
                                <label htmlFor="new_work_image3">
                                    <Image src={image3Url} height={1000} width={1000} alt="our work" />
                                </label>
                                <input type="file" id="new_work_image3" onChange={handleImage3} />
                            </div>
                            <label htmlFor="new_work_image4">
                                <Image src={image4Url} height={1000} width={1000} alt="our work" />
                            </label>
                            <input type="file" id="new_work_image4" onChange={handleImage4} />
                            <textarea onChange={(e) => setPara3(e.target.value)} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <textarea onChange={(e) => setPara4(e.target.value)} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <button type="sumbit" >Submit</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}

export default NewWork