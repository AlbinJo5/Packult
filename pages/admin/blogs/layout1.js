import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/components/layouts.module.scss"
import { useState } from "react"

function Index() {

    const [image1, setImage1] = useState("/assets/admin/dummyImage.jpg")
    const [image2, setImage2] = useState("/assets/admin/dummyImage.jpg")
    const [image3, setImage3] = useState("/assets/admin/dummyImage.jpg")
    const [image4, setImage4] = useState("/assets/admin/dummyImage.jpg")

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
            setImage1(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleImage2 = (e) => {
        if (e.target.files[0]) {
            setImage2(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleImage3 = (e) => {
        if (e.target.files[0]) {
            setImage3(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleImage4 = (e) => {
        if (e.target.files[0]) {
            setImage4(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // check for empty fields with images
        if (title === "" || date === "" || para1 === "" || para2 === "" || para3 === "" || para4 === "" || para5 === "" || para6 === "" || para7 === "" || para8 === "" || para9 === "" || para10 === "" || image1 === "/assets/admin/dummyImage.jpg" || image2 === "/assets/admin/dummyImage.jpg" || image3 === "/assets/admin/dummyImage.jpg" || image4 === "/assets/admin/dummyImage.jpg") {
            alert("Please fill all the fields")
        } else {
            // upload the data to the database
            const data = {
                title,
                date,
                para1,
                para2,
                para3,
                para4,
                para5,
                para6,
                para7,
                para8,
                para9,
                para10,
                image1,
                image2,
                image3,
                image4,
                layout: "layout1"
            }
            console.log(data)
        }
    }



    return (
        <AdminLayout>
            <div className={styles.layout1} >
                <form onSubmit={handleSubmit}>
                    <label htmlFor="image1">
                        <Image src={image1} id="layout1_image1" name="image1" height={1000} width={1000} alt="dummyImage" />
                    </label>
                    <input type="file" id="image1" onChange={handleImage1} />
                    <div className={styles.head}>

                        <input id="title" name="title" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title of the Blog" />
                        <input id="date" name="date" onChange={(e) => setDate(e.target.value)} type="date" />
                    </div>
                    <div className={styles.content} >
                        <textarea onChange={(e) => setPara1(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para1" id="para1" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara2(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para2" id="para2" cols="30" rows="10"></textarea>
                        <div className={styles.image2} >


                            <label htmlFor="image2">
                                <Image src={image2} name="image2" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <label htmlFor="image3">
                                <Image src={image3} name="image3" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <input type="file" id="image2" onChange={handleImage2} />
                            <input type="file" id="image3" onChange={handleImage3} />
                        </div>

                        <textarea onChange={(e) => setPara3(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para3" id="para3" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara4(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para4" id="para4" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara5(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para5" id="para5" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara6(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para6" id="para6" cols="30" rows="10"></textarea>

                        <label htmlFor="image4">
                            <Image src={image4} name="image4" height={1000} width={1000} alt="dummyImage" />
                        </label>
                        <input type="file" id="image4" onChange={handleImage4} />

                        <textarea onChange={(e) => setPara7(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para7" id="para7" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara8(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para8" id="para8" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara9(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para9" id="para9" cols="30" rows="10"></textarea>
                        <textarea onChange={(e) => setPara10(e.target.value)} placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." name="para10" id="para10" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>
        </AdminLayout>
    )
}

export default Index