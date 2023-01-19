import Image from "next/image"
import styles from "../../styles/admin/components/blogCard.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES } from "../../common/routes"

function BlogCard({ img, title, description, id }) {

    const router = useRouter()
    return (
        <div className={styles.blog_card} >
            <Image src={img} height={1000} width={1000} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={styles.footer} >
                <button onClick={() => { router.push(ADMIN_ROUTES.BLOGS_EDIT_LAYOUT_1 + id) }} >Edit</button>
                <button onClick={() => {
                    // delete api with id as params
                    fetch(`/api/blog/delete?id=${id}`)
                        .then(res => res.json())
                        .then(data => {
                            router.reload()
                        })
                }} >Delete</button>
            </div>
        </div>
    )
}

export default BlogCard