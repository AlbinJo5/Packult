import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/blogs.module.scss"

function index() {
    return (
        <AdminLayout>
            <div className={styles.layout1} >
                <form >
                    <label htmlFor="image1">
                        <Image src="/assets/admin/dummyImage.jpg" name="image1" height={1000} width={1000} alt="dummyImage" />
                    </label>
                    <input type="file" id="image1" />
                    <div className={styles.head}>
                        <input id="title" name="title" type="text" />
                        <input id="date" name="date" type="date" />
                    </div>
                    <div className={styles.content} >
                        <textarea name="para1" id="para1" cols="30" rows="10"></textarea>
                        <textarea name="para2" id="para2" cols="30" rows="10"></textarea>
                        <div className={styles.image2} >


                            <label htmlFor="image2">
                                <Image src="/assets/admin/dummyImage.jpg" name="image2" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <label htmlFor="image3">
                                <Image src="/assets/admin/dummyImage.jpg" name="image3" height={1000} width={1000} alt="dummyImage" />
                            </label>
                            <input type="file" id="image2" />
                            <input type="file" id="image3" />
                        </div>

                        <textarea name="para3" id="para3" cols="30" rows="10"></textarea>
                        <textarea name="para4" id="para4" cols="30" rows="10"></textarea>
                        <textarea name="para5" id="para5" cols="30" rows="10"></textarea>
                        <textarea name="para6" id="para6" cols="30" rows="10"></textarea>

                        <label htmlFor="image4">
                            <Image src="/assets/admin/dummyImage.jpg" name="image4" height={1000} width={1000} alt="dummyImage" />
                        </label>
                        <input type="file" id="image4" />

                        <textarea name="para7" id="para7" cols="30" rows="10"></textarea>
                        <textarea name="para8" id="para8" cols="30" rows="10"></textarea>
                        <textarea name="para9" id="para9" cols="30" rows="10"></textarea>
                        <textarea name="para10" id="para10" cols="30" rows="10"></textarea>
                    </div>
                    <button type="submit">Post</button>
                </form>
            </div>
        </AdminLayout>
    )
}

export default index