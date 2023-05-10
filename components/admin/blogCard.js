import Image from "next/image"
import styles from "../../styles/admin/components/blogCard.module.scss"
import { useRouter } from "next/router"
import { ADMIN_ROUTES, ROUTES } from "../../common/routes"

function BlogCard({ img, title, description, id, layout }) {

    const router = useRouter()
    return (
        <div className={styles.blog_card} onClick={() => {
            router.push(ROUTES.BLOG + id)
        }} >
            <Image src={img} height={1000} width={1000} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={styles.footer} >
                <button onClick={(e) => {
                    e.stopPropagation();
                    if (layout === "layout1")
                        router.push(ADMIN_ROUTES.BLOGS_EDIT_LAYOUT_1 + id)
                    else if (layout === "layout2")
                        router.push(ADMIN_ROUTES.BLOGS_EDIT_LAYOUT_2 + id)
                    else
                        router.push(ADMIN_ROUTES.BLOGS_EDIT_LAYOUT_3 + id)

                }}
                >Edit</button>
                <button onClick={(e) => {
                    e.stopPropagation();
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