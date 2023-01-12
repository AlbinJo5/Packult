import AdminLayout from "../../../components/admin/adminLayout"
import BlogCard from "../../../components/admin/blogCard"
import styles from "../../../styles/admin/blogs.module.scss"

function index() {
    return (
        <AdminLayout>
            <div className={styles.blogs}>
                <h2>Blogs</h2>
                <hr/>
                <div className={styles.all_blogs}>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>

            </div>
        </AdminLayout>
    )
}

export default index