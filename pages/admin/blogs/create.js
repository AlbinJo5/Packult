import Image from "next/image"
import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/blogs.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES } from "../../../common/routes"
function Create() {
    const router = useRouter()
    return (
        <AdminLayout>
            <div className={styles.create} >
                <h2>Choose layout</h2>
                <div className={styles.layouts} >
                    <Image onClick={()=>{ router.push(ADMIN_ROUTES.BLOGS_LAYOUT_1) }} src="/assets/admin/layout1.png" height={1000} width={1000} alt="layout1" data-title="Name" />
                    <Image src="/assets/admin/layout1.png" height={1000} width={1000} alt="layout2" />
                    <Image src="/assets/admin/layout1.png" height={1000} width={1000} alt="layout3" />
                </div>
            </div>
        </AdminLayout>
    )
}

export default Create