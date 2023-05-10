import { useEffect, useState } from "react"
import AdminLayout from "../../../components/admin/adminLayout"
import BlogCard from "../../../components/admin/blogCard"
import styles from "../../../styles/admin/blogs.module.scss"

function Index() {

    const [loading, setloading] = useState(true)
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('/api/blog/get')
            .then(res => res.json())
            .then(data => {
                setblogs(data)
                setloading(false)
            })
    }, [])

    return (
        <AdminLayout>
            <div className={styles.blogs}>
                <h2>Blogs</h2>
                <hr />
                {
                    loading ? <h3>Loading...</h3> : <div className={styles.all_blogs}>
                        {
                            blogs.map(blog => <BlogCard key={blog.id} id={blog.id} img={blog.mainImage} title={blog.title} description={blog.description} layout={blog.layout} />)
                        }
                    </div>
                }


            </div>
        </AdminLayout>
    )
}

export default Index