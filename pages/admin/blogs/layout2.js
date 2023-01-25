import Image from 'next/image'
import { useState } from 'react'
import AdminLayout from '../../../components/admin/adminLayout'
import styles from '../../../styles/admin/components/layouts.module.scss'
import { db, storage } from "../../../utils/firebase.js"
import { collection, doc, setDoc } from "firebase/firestore"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { ADMIN_ROUTES } from '../../../common/routes'

function Index() {
    const [loading, setLoading] = useState(false)
    const [image1Url, setImage1Url] = useState("/assets/admin/dummyImage.jpg")
    const [image2Url, setImage2Url] = useState("/assets/admin/dummyImage.jpg")

    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [para1, setPara1] = useState("")
    const [para2, setPara2] = useState("")
    const [para3, setPara3] = useState("")
    const [para4, setPara4] = useState("")
    const [para5, setPara5] = useState("")
    const [para6, setPara6] = useState("")

    const handleImage1 = (e) => {
        if (e.target.files[0]) {
            setImage1(e.target.files[0])
            setImage1Url(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleImage2 = (e) => {
        if (e.target.files[0]) {
            setImage2(e.target.files[0])
            setImage2Url(URL.createObjectURL(e.target.files[0]))
        }
    }



    async function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        // check for empty fields with images
        if (image1 === "" || image2 === "" || title === "" || date === "" || para1 === "" || para2 === "" || para3 === "" || para4 === "" || para5 === "" || para6 === "") {
            alert("Please fill all the fields")
            setLoading(false)
            return
        }

        // create a ref to firestore
        const blogRef = doc(collection(db, "blogs"))

        // upload images to firebase storage and get the urls
        const image1Ref = ref(storage, `blogs/${blogRef.id}/image1`)
        const image2Ref = ref(storage, `blogs/${blogRef.id}/image2`)
        const image1Url = await getDownloadURL(await uploadBytes(image1Ref, image1))
        const image2Url = await getDownloadURL(await uploadBytes(image2Ref, image2))

        // create a blog Details object
        const blogDetails = {
            title: title,
            date: date,
            image1: image1Url,
            image2: image2Url,
            para1: para1,
            para2: para2,
            para3: para3,
            para4: para4,
            para5: para5,
            para6: para6,
            layout: "layout2"
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
            layout: "layout2"
        }

        // set the blog and blogDetails to firestore
        setDoc(blogRef, blog)
            .then(() => {

                const blogDetailsRef = doc(collection(db, "blogs", blogRef.id, "details"))
                setDoc(blogDetailsRef, blogDetails, { merge: true })
                    .then(() => {
                        alert("Blog Added Successfully")
                        setLoading(false)
                        // reset the form
                        setImage1("")
                        setImage2("")
                        setTitle("")
                        setDate("")
                        setPara1("")
                        setPara2("")
                        setPara3("")
                        setPara4("")
                        setPara5("")
                        setPara6("")
                        setImage1Url("/assets/admin/dummyImage.jpg")
                        setImage2Url("/assets/admin/dummyImage.jpg")

                        // redirect to blogs page
                        router.push(ADMIN_ROUTES.BLOGS)
                    })
            })
            .catch((error) => {
                alert(error.message)
                // delete the images from storage
                deleteObject(ref(storage, `blogs/${blogRef.id}/image1`))
                deleteObject(ref(storage, `blogs/${blogRef.id}/image2`))


                setLoading(false)
            })
    }


    return (
        <AdminLayout>
            <div className={styles.layout2} >
                {
                    loading ? <h3>Posting the blog ...</h3> :
                        <form onSubmit={handleSubmit} >
                            <div className={styles.head}>
                                <div className={styles.image}>
                                    <label htmlFor="layout2_image1">
                                        <Image src={image1Url} name="image1" height={1000} width={1000} alt="dummyImage" />
                                    </label>
                                    <input onChange={handleImage1} type="file" id="layout2_image1" />
                                </div>
                                <div>
                                    <input type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                                    <input type="date" onChange={(e) => setDate(e.target.value)} />
                                    <br />

                                    <textarea onChange={(e) => setPara1(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue felis. Mauris ac porta massa. In hac habitasse platea dictumst. Nam nisi ex, varius nec magna at, varius malesuada tortor. In vitae mi a magna pretium tempus et quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla in malesuada lacus, fringilla volutpat augue. Phasellus aliquet facilisis ex ut euismod. In pellentesque et elit at finibus. Duis malesuada gravida orci, ac posuere turpis tincidunt interdum. Vestibulum molestie vehicula neque et posuere. Mauris vel enim eu nibh scelerisque porttitor. Aliquam vehicula pellentesque magna, molestie ultrices eros maximus vel. Nullam in ligula sagittis, auctor erat sit amet, luctus ligula. Ut nec urna nulla. Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci. Praesent euismod fringilla semper. Vivamus a felis euismod, facilisis mi id, euismod diam. Nulla vestibulum nisl neque, vitae rutrum mauris efficitur sed. Aliquam in quam sit amet nunc pulvinar porttitor vel vitae mi. Morbi ac neque a leo sollicitudin lobortis. Quisque elit ligula, commodo suscipit aliquet eget, molestie nec nisi. Vivamus pulvinar elementum gravida. Duis bibendum urna vitae urna elementum dictum.' cols="30" rows="10"></textarea>
                                    <br />
                                    <textarea onChange={(e) => setPara2(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue felis. Mauris ac porta massa. In hac habitasse platea dictumst. Nam nisi ex, varius nec magna at, varius malesuada tortor. In vitae mi a magna pretium tempus et quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla in malesuada lacus, fringilla volutpat augue. Phasellus aliquet facilisis ex ut euismod. In pellentesque et elit at finibus. Duis malesuada gravida orci, ac posuere turpis tincidunt interdum. Vestibulum molestie vehicula neque et posuere. Mauris vel enim eu nibh scelerisque porttitor. Aliquam vehicula pellentesque magna, molestie ultrices eros maximus vel. Nullam in ligula sagittis, auctor erat sit amet, luctus ligula. Ut nec urna nulla. Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci. Praesent euismod fringilla semper. Vivamus a felis euismod, facilisis mi id, euismod diam. Nulla vestibulum nisl neque, vitae rutrum mauris efficitur sed. Aliquam in quam sit amet nunc pulvinar porttitor vel vitae mi. Morbi ac neque a leo sollicitudin lobortis. Quisque elit ligula, commodo suscipit aliquet eget, molestie nec nisi. Vivamus pulvinar elementum gravida. Duis bibendum urna vitae urna elementum dictum.' cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <label htmlFor="layout2_image2">

                                    <Image src={image2Url} name="image2" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input onChange={handleImage2} type="file" id="layout2_image2" />
                                <textarea onChange={(e) => setPara3(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                <textarea onChange={(e) => setPara4(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                <textarea onChange={(e) => setPara5(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                <textarea onChange={(e) => setPara6(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                            </div>
                            <button type='submit'>Post</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}

export default Index