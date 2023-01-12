import Image from "next/image"
import styles from "../../styles/admin/components/blogCard.module.scss"

function BlogCard({ img, title, description }) {
    return (
        <div className={styles.blog_card} >
            <Image src={img} height={1000} width={1000} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
            <div className={styles.footer} >
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default BlogCard