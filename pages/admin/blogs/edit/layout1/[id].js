import Image from "next/image"
import AdminLayout from "../../../../../components/admin/adminLayout"
import styles from "../../../../../styles/admin/components/layouts.module.scss"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { storage, db } from "../../../../../utils/firebase"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { setDoc, doc } from "firebase/firestore"
import { ADMIN_ROUTES } from "../../../../../common/routes"
function Layout1Edit() {

    const router = useRouter()
    const params = router.query

    const [data, setdata] = useState({})
    const [loading, setloading] = useState(true)
    const [updating, setUpdating] = useState(false)

    const [image1Url, setImage1Url] = useState("/assets/admin/dummyImage.jpg")
    const [image2Url, setImage2Url] = useState("/assets/admin/dummyImage.jpg")
    const [image3Url, setImage3Url] = useState("/assets/admin/dummyImage.jpg")
    const [image4Url, setImage4Url] = useState("/assets/admin/dummyImage.jpg")

    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")

    const [para1, setPara1] = useState("")
    const [para2, setPara2] = useState("")
    const [para3, setPara3] = useState("")
    const [para4, setPara4] = useState("")
    const [para5, setPara5] = useState("")
    const [para6, setPara6] = useState("")
    const [para7, setPara7] = useState("")
    const [para8, setPara8] = useState("")
    const [para9, setPara9] = useState("")
    const [para10, setPara10] = useState("")

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

    const handleImage3 = (e) => {
        if (e.target.files[0]) {
            setImage3(e.target.files[0])
            setImage3Url(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleImage4 = (e) => {
        if (e.target.files[0]) {
            setImage4(e.target.files[0])
            setImage4Url(URL.createObjectURL(e.target.files[0]))
        }
    }

    useEffect(() => {
        if (params.id === undefined) return
        fetch('/api/blog/getById?id=' + params.id)
            .then(res => res.json())
            .then(data => {

                setdata(data)
                setloading(false)
                setImage1Url(data.image1)
                setImage2Url(data.image2)
                setImage3Url(data.image3)
                setImage4Url(data.image4)
                setTitle(data.title)
                setDate(data.date)
                setPara1(data.para1)
                setPara2(data.para2)
                setPara3(data.para3)
                setPara4(data.para4)
                setPara5(data.para5)
                setPara6(data.para6)
                setPara7(data.para7)
                setPara8(data.para8)
                setPara9(data.para9)
                setPara10(data.para10)

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
            if (data.para3 !== para3) newData.para3 = para3
            if (data.para4 !== para4) newData.para4 = para4
            if (data.para5 !== para5) newData.para5 = para5
            if (data.para6 !== para6) newData.para6 = para6
            if (data.para7 !== para7) newData.para7 = para7
            if (data.para8 !== para8) newData.para8 = para8
            if (data.para9 !== para9) newData.para9 = para9
            if (data.para10 !== para10) newData.para10 = para10

            // check if each image is changed or not
            if (data.image1 !== image1Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image1`), image1)
                newData.image1 = await getDownloadURL(ref(storage, `blogs/${params.id}/image1`))
            }

            if (data.image2 !== image2Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image2`), image2)
                newData.image2 = await getDownloadURL(ref(storage, `blogs/${params.id}/image2`))
            }

            if (data.image3 !== image3Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image3`), image3)
                newData.image3 = await getDownloadURL(ref(storage, `blogs/${params.id}/image3`))
            }

            if (data.image4 !== image4Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `blogs/${params.id}/image4`), image4)
                newData.image4 = await getDownloadURL(ref(storage, `blogs/${params.id}/image4`))
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
            <div className={styles.layout1} >
                {
                    loading ? <h3>Loading...</h3> : updating ? <h3>Updating...</h3> : <form onSubmit={handleSubmit}>
                        <label htmlFor="image1">
                            <Image src={image1Url} name="image1" height={1000} width={1000} alt="dummyImage" />
                        </label>
                        <input type="file" id="image1" onChange={handleImage1} />
                        <div className={styles.head}>
                            <input id="title" defaultValue={data.title} name="title" onChange={(e) => setTitle(e.target.value)} type="text" />
                            <input id="date" defaultValue={data.date} name="date" onChange={(e) => setDate(e.target.value)} type="date" />
                        </div>
                        <div className={styles.content} >
                            <textarea defaultValue={data.para1} onChange={(e) => setPara1(e.target.value)} name="para1" id="para1" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para2} onChange={(e) => setPara2(e.target.value)} name="para2" id="para2" cols="30" rows="10"></textarea>
                            <div className={styles.image2} >

                                <label htmlFor="image2">
                                    <Image src={image2Url} name="image2" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <label htmlFor="image3">
                                    <Image src={image3Url} name="image3" height={1000} width={1000} alt="dummyImage" />
                                </label>
                                <input type="file" id="image2" onChange={handleImage2} />
                                <input type="file" id="image3" onChange={handleImage3} />
                            </div>

                            <textarea defaultValue={data.para3} onChange={(e) => setPara3(e.target.value)} name="para3" id="para3" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para4} onChange={(e) => setPara4(e.target.value)} name="para4" id="para4" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para5} onChange={(e) => setPara5(e.target.value)} name="para5" id="para5" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para6} onChange={(e) => setPara6(e.target.value)} name="para6" id="para6" cols="30" rows="10"></textarea>

                            <label htmlFor="image4">
                                <Image src={image4Url} name="image4" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <input type="file" id="image4" onChange={handleImage4} />

                            <textarea defaultValue={data.para7} onChange={(e) => setPara7(e.target.value)} name="para7" id="para7" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para8} onChange={(e) => setPara8(e.target.value)} name="para8" id="para8" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para9} onChange={(e) => setPara9(e.target.value)} name="para9" id="para9" cols="30" rows="10"></textarea>
                            <textarea defaultValue={data.para10} onChange={(e) => setPara10(e.target.value)} name="para10" id="para10" cols="30" rows="10"></textarea>
                        </div>
                        <button type="submit">Update</button>
                    </form>
                }

            </div>
        </AdminLayout>
    )
}

export default Layout1Edit