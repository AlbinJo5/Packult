import Image from 'next/image'
import { useState } from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import styles from '../../../styles/admin/components/layouts.module.scss'
import { db, storage } from "../../../utils/firebase.js"
import { collection, doc, setDoc } from "firebase/firestore"
import { uploadBytes, ref, getDownloadURL, deleteObject } from "firebase/storage"
import { ADMIN_ROUTES } from '../../../common/routes'
import { useRouter } from 'next/router'
function Index() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [image1Url, setImage1Url] = useState("/assets/admin/dummyImage.jpg")

    const [image1, setImage1] = useState("")

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [para1, setPara1] = useState("")
    const [para2, setPara2] = useState("")

    const handleImage1 = (e) => {
        if (e.target.files[0]) {
            setImage1(e.target.files[0])
            setImage1Url(URL.createObjectURL(e.target.files[0]))
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        try {


            // check for empty fields with images
            if (image1 === "" || title === "" || date === "" || para1 === "" || para2 === "") {
                alert("Please fill all the fields")
                setLoading(false)
                return
            }

            // create a ref to firestore
            const blogRef = doc(collection(db, "blogs"))

            // upload images to firebase storage and get the urls
            const image1Ref = ref(storage, `blogs/${blogRef.id}/image1`)
            await uploadBytes(image1Ref, image1)
            const image1Url = await getDownloadURL(image1Ref)

            // create a blog Details object
            const blogDetails = {
                image1: image1Url,
                title: title,
                date: date,
                para1: para1,
                para2: para2,
                layout: "layout3"
            }

            // split the words by 30 for para 1
            const para1Words = para1.split(" ")
            const para1Words30 = para1Words.slice(0, 30)
            const para1Words30String = para1Words30.join(" ")
            const para1Words30StringWithDots = para1Words30String + "..."

            // create a blog with only title, date, mainImage, desc  and layout, and rest should be inside a details collection
            const blog = {
                title: title,
                date: date,
                mainImage: image1Url,
                description: para1Words30StringWithDots,
                layout: "layout3"
            }

            // set the blog and blogDetails to firestore
            setDoc(blogRef, blog)
                .then(() => {
                    const blogDetailsRef = doc(collection(db, "blogs", blogRef.id, "details"))
                    setDoc(blogDetailsRef, blogDetails, { merge: true })
                        .then(() => {
                            alert("Blog added successfully")
                            setLoading(false)
                            // reset the form
                            setImage1Url("/assets/admin/dummyImage.jpg")
                            setImage1("")
                            setTitle("")
                            setDate("")
                            setPara1("")
                            setPara2("")

                            // redirect to blogs page
                            router.push(ADMIN_ROUTES.BLOGS)

                        })
                        .catch((error) => {
                            alert(error.message)
                            // delete the images from storage
                            deleteObject(ref(storage, `blogs/${blogRef.id}/image1`))

                            setLoading(false)
                        })
                })
        } catch (error) {
            alert(error.message)
            setLoading(false)
            console.log(error);
        }


    }

    return (
        <AdminLayout>
            <div className={styles.layout3} >
                {
                    loading ? <h3>Posting the blog ...</h3> :
                        <form onSubmit={handleSubmit}>
                            <div className={styles.head}>
                                <label htmlFor="layout2_image1">
                                    <Image src={image1Url} name="image1" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input onChange={handleImage1} type="file" id="layout2_image1" />
                                <div className={styles.title} >
                                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' />
                                    <input onChange={(e) => setDate(e.target.value)} type="date" />
                                </div>
                            </div>
                            <div className={styles.content}>
                                <textarea onChange={(e) => setPara1(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea>
                                <textarea onChange={(e) => setPara2(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea>
                            </div>
                            <button type='submit'>Post</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}

export default Index