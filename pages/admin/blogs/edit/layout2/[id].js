import Image from "next/image"
import AdminLayout from "../../../../../components/admin/adminLayout"
import styles from "../../../../../styles/admin/components/layouts.module.scss"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { storage, db } from "../../../../../utils/firebase"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { setDoc, doc } from "firebase/firestore"
import { ADMIN_ROUTES } from "../../../../../common/routes"
function Layout2Edit() {
    const router = useRouter()
    const params = router.query

    const [data, setdata] = useState({})
    const [loading, setloading] = useState(true)
    const [updating, setUpdating] = useState(false)

    const [image1Url, setImage1Url] = useState('/assets/admin/dummyImage.jpg')
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
        try {
            setUpdating(true)
            var newData = {}

            // check if each data is changed or not
            if (title !== data.title) newData.title = title
            if (date !== data.date) newData.date = date
            if (para1 !== data.para1) newData.para1 = para1
            if (para2 !== data.para2) newData.para2 = para2
            if (para3 !== data.para3) newData.para3 = para3
            if (para4 !== data.para4) newData.para4 = para4
            if (para5 !== data.para5) newData.para5 = para5
            if (para6 !== data.para6) newData.para6 = para6

            // check if each image is changed or not
            if (image1 !== image1Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image1`), image1)
                newData.image1 = await getDownloadURL(ref(storage, `blogs/${params.id}/image1`))
            }
            if (image2 !== image2Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image2`), image2)
                newData.image2 = await getDownloadURL(ref(storage, `blogs/${params.id}/image2`))
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

        useEffect(() => {
            if (params.id === undefined) return
            fetch('/api/blog/getById?id=' + params.id)
                .then(res => res.json())
                .then(data => {
                    setdata(data)
                    setloading(false)
                    setTitle(data.title)
                    setDate(data.date)
                    setImage1Url(data.image1)
                    setImage2Url(data.image2)
                    setPara1(data.para1)
                    setPara2(data.para2)
                    setPara3(data.para3)
                    setPara4(data.para4)
                    setPara5(data.para5)
                    setPara6(data.para6)
                })
        }, [params])
        return (
            <AdminLayout>
                <div className={styles.layout2} >
                    {
                        loading ? <h3>Loading...</h3> : updating ? <h3>Updating...</h3> :
                            <form onSubmit={handleSubmit} >
                                <div className={styles.head}>
                                    <div className={styles.image}>
                                        <label htmlFor="layout2_image1">
                                            <Image src={image1Url} name="image1" height={1000} width={1000} alt="dummyImage" />
                                        </label>
                                        <input onChange={handleImage1} type="file" id="layout2_image1" />
                                    </div>
                                    <div>
                                        <input type="text" defaultValue={data.title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
                                        <input type="date" defaultValue={data.date} onChange={(e) => setDate(e.target.value)} />
                                        <br />

                                        <textarea defaultValue={data.para1} onChange={(e) => setPara1(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue felis. Mauris ac porta massa. In hac habitasse platea dictumst. Nam nisi ex, varius nec magna at, varius malesuada tortor. In vitae mi a magna pretium tempus et quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla in malesuada lacus, fringilla volutpat augue. Phasellus aliquet facilisis ex ut euismod. In pellentesque et elit at finibus. Duis malesuada gravida orci, ac posuere turpis tincidunt interdum. Vestibulum molestie vehicula neque et posuere. Mauris vel enim eu nibh scelerisque porttitor. Aliquam vehicula pellentesque magna, molestie ultrices eros maximus vel. Nullam in ligula sagittis, auctor erat sit amet, luctus ligula. Ut nec urna nulla. Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci. Praesent euismod fringilla semper. Vivamus a felis euismod, facilisis mi id, euismod diam. Nulla vestibulum nisl neque, vitae rutrum mauris efficitur sed. Aliquam in quam sit amet nunc pulvinar porttitor vel vitae mi. Morbi ac neque a leo sollicitudin lobortis. Quisque elit ligula, commodo suscipit aliquet eget, molestie nec nisi. Vivamus pulvinar elementum gravida. Duis bibendum urna vitae urna elementum dictum.' cols="30" rows="10"></textarea>
                                        <br />
                                        <textarea defaultValue={data.para2} onChange={(e) => setPara2(e.target.value)} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet congue felis. Mauris ac porta massa. In hac habitasse platea dictumst. Nam nisi ex, varius nec magna at, varius malesuada tortor. In vitae mi a magna pretium tempus et quis est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Nulla in malesuada lacus, fringilla volutpat augue. Phasellus aliquet facilisis ex ut euismod. In pellentesque et elit at finibus. Duis malesuada gravida orci, ac posuere turpis tincidunt interdum. Vestibulum molestie vehicula neque et posuere. Mauris vel enim eu nibh scelerisque porttitor. Aliquam vehicula pellentesque magna, molestie ultrices eros maximus vel. Nullam in ligula sagittis, auctor erat sit amet, luctus ligula. Ut nec urna nulla. Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci. Praesent euismod fringilla semper. Vivamus a felis euismod, facilisis mi id, euismod diam. Nulla vestibulum nisl neque, vitae rutrum mauris efficitur sed. Aliquam in quam sit amet nunc pulvinar porttitor vel vitae mi. Morbi ac neque a leo sollicitudin lobortis. Quisque elit ligula, commodo suscipit aliquet eget, molestie nec nisi. Vivamus pulvinar elementum gravida. Duis bibendum urna vitae urna elementum dictum.' cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <label htmlFor="layout2_image2">

                                        <Image src={image2Url} name="image2" height={1000} width={1000} alt="dummyImage" />
                                    </label>
                                    <input onChange={handleImage2} type="file" id="layout2_image2" />
                                    <textarea defaultValue={data.para3} onChange={(e) => setPara3(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                    <textarea defaultValue={data.para4} onChange={(e) => setPara4(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                    <textarea defaultValue={data.para5} onChange={(e) => setPara5(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                    <textarea defaultValue={data.para6} onChange={(e) => setPara6(e.target.value)} placeholder='Quisque ut tortor orci. Donec ullamcorper consequat nisi vel pharetra. Donec lobortis mauris id nunc posuere iaculis. Praesent ut finibus mi. Nam id mi nec magna imperdiet suscipit. Aliquam odio ligula, gravida in diam quis, accumsan fringilla enim. Sed volutpat pulvinar nunc sit amet lacinia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nunc quis sapien finibus luctus. Nunc vel malesuada erat. Duis ac egestas dui. Ut dapibus, lacus in rutrum fringilla, dolor nulla porttitor odio, vitae pellentesque sem ante eu sapien. Sed eu ex a justo ullamcorper venenatis eget sed ex. Sed consectetur ex vitae dui tincidunt, sed tincidunt est pharetra. Proin id ligula justo. Morbi dictum nulla orci.' cols="30" rows="10"></textarea> <br />
                                </div>
                                <button type='submit'>Update</button>
                            </form>
                    }

                </div>
            </AdminLayout>
        )
    }
    export default Layout2Edit