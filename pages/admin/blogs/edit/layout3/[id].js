import Image from "next/image"
import AdminLayout from "../../../../../components/admin/adminLayout"
import styles from "../../../../../styles/admin/components/layouts.module.scss"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { storage, db } from "../../../../../utils/firebase"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { setDoc, doc } from "firebase/firestore"
import { ADMIN_ROUTES } from "../../../../../common/routes"

function Layout3Edit() {
    const router = useRouter()
    const params = router.query

    const [data, setdata] = useState({})
    const [loading, setloading] = useState(true)
    const [updating, setUpdating] = useState(false)

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

    useEffect(() => {
        if (params.id === undefined) return
        fetch('/api/blog/getById?id=' + params.id)
            .then(res => res.json())
            .then(data => {
                setdata(data)
                setTitle(data.title)
                setDate(data.date)
                setPara1(data.para1)
                setPara2(data.para2)
                setImage1Url(data.image1)
                setloading(false)
            })
    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setUpdating(true)
            var newData = {}

            // check if each data is changed or not
            if (data.title !== title) newData.title = title
            if (data.date !== date) newData.date = date
            if (data.para1 !== para1) newData.para1 = para1
            if (data.para2 !== para2) newData.para2 = para2

            // check if image is changed or not
            if (data.image1 !== image1Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image1`), image1)
                newData.image1 = await getDownloadURL(ref(storage, `blogs/${params.id}/image1`))
            }
            var blog = {}

            // if data is changed then update the title in the blog
            if (data.title !== title) blog.title = title
            if (data.date !== date) blog.date = date
            if (data.para1 !== para1) {
                // split the words by 30
                const para1Words = para1.split(" ")
                const para1Words30 = para1Words.slice(0, 30)
                const para1Words30String = para1Words30.join(" ")
                const para1Words30StringWithDots = para1Words30String + "..."

                blog.description = para1Words30StringWithDots
            }

            // if image is changed then update the mainImage in the blog
            if (data.image1 !== image1Url) blog.mainImage = newData.image1

            // update the data in the firestore database
            const blogRef = doc(db, "blogs", params.id);
            setDoc(blogRef, blog, { merge: true });

            // blog details = blogs/params.id/details/randomId

            const blogDetailsRef = doc(db, "blogs", params.id, "details", data.id);
            setDoc(blogDetailsRef, newData, { merge: true });

            alert("Blog Updated")
            router.push(ADMIN_ROUTES.BLOGS)
            setUpdating(false)

        } catch (error) {

            alert("Something went wrong")
            console.log(error);
            setUpdating(false)
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
export default Layout3Edit
