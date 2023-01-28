import Image from "next/image"
import { useEffect, useState } from 'react'
import AdminLayout from "../../../../../components/admin/adminLayout"
import styles from "../../../../../styles/admin/components/new-work.module.scss"
import { useRouter } from "next/router"
import { storage, db } from "../../../../../utils/firebase"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
import { setDoc, doc } from "firebase/firestore"
import { ADMIN_ROUTES } from "../../../../../common/routes"
function OurWorkEdit() {
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
    const [para1, setPara1] = useState("")
    const [para2, setPara2] = useState("")
    const [para3, setPara3] = useState("")
    const [para4, setPara4] = useState("")


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
        if (params.id) {
            fetch('/api/our-work/getById?id=' + params.id)
                .then(res => res.json())
                .then(data => {
                    setdata(data)
                    setTitle(data.title)
                    setPara1(data.para1)
                    setPara2(data.para2)
                    setPara3(data.para3)
                    setPara4(data.para4)
                    setImage1Url(data.image1)
                    setImage2Url(data.image2)
                    setImage3Url(data.image3)
                    setImage4Url(data.image4)
                    setloading(false)
                })
                .catch(err => {
                    console.log(err)
                    setloading(false)
                })
        }
    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setUpdating(true)
            var newData = {}

            // check if each data is changed or not
            if (data.title !== title) newData.title = title
            if (data.para1 !== para1) newData.para1 = para1
            if (data.para2 !== para2) newData.para2 = para2
            if (data.para3 !== para3) newData.para3 = para3
            if (data.para4 !== para4) newData.para4 = para4

            // check if image is changed or not
            if (data.image1 !== image1Url) {
                // upload the image into firbase storage and get the url
                await uploadBytes(ref(storage, `our-works/${params.id}/image1`), image1)
                newData.image1 = await getDownloadURL(ref(storage, `our-works/${params.id}/image1`))
            }
            if (data.image2 !== image2Url) {
                await uploadBytes(ref(storage, `our-works/${params.id}/image2`), image2)
                newData.image2 = await getDownloadURL(ref(storage, `our-works/${params.id}/image2`))
            }
            if (data.image3 !== image3Url) {
                await uploadBytes(ref(storage, `our-works/${params.id}/image3`), image3)
                newData.image3 = await getDownloadURL(ref(storage, `our-works/${params.id}/image3`))
            }
            if (data.image4 !== image4Url) {
                await uploadBytes(ref(storage, `our-works/${params.id}/image4`), image4)
                newData.image4 = await getDownloadURL(ref(storage, `our-works/${params.id}/image4`))
            }

            // update the data in the firestore database
            const workRef = doc(db, "our-works", params.id);
            setDoc(workRef, newData, { merge: true });

            alert("Work Updated")
            router.push(ADMIN_ROUTES.OUR_WORKS)
            setUpdating(false)

        } catch (error) {
            alert("Something went wrong")
            console.log(error);
            setUpdating(false)
        }
    }

    return (
        <AdminLayout>
            <div className={styles.newWork}>
                {
                    loading ? <h3>Loading...</h3> : updating ? <h3>Updating...</h3> :
                        <form onSubmit={handleSubmit}>
                            <input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                            <label htmlFor="new_work_image1">
                                <Image src={image1Url} height={1000} width={1000} alt="our work" />
                            </label>
                            <input onChange={handleImage1} type="file" id="new_work_image1" />
                            <textarea onChange={(e) => setPara1(e.target.value)} defaultValue={para1} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <textarea onChange={(e) => setPara2(e.target.value)} defaultValue={para2} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <div className={styles.images2} >
                                <label htmlFor="new_work_image2">
                                    <Image src={image2Url} height={1000} width={1000} alt="our work" />
                                </label>
                                <input onChange={handleImage2} type="file" id="new_work_image2" />
                                <label htmlFor="new_work_image3">
                                    <Image src={image3Url} height={1000} width={1000} alt="our work" />
                                </label>
                                <input onChange={handleImage3} type="file" id="new_work_image3" />
                            </div>
                            <label htmlFor="new_work_image4">
                                <Image src={image4Url} height={1000} width={1000} alt="our work" />
                            </label>
                            <input onChange={handleImage4} type="file" id="new_work_image4" />
                            <textarea onChange={(e) => setPara3(e.target.value)} defaultValue={para3} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <textarea onChange={(e) => setPara4(e.target.value)} defaultValue={para4} cols="30" rows="10" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            <button type="submit" >Update</button>
                        </form>
                }

            </div>
        </AdminLayout>
    )
}

export default OurWorkEdit