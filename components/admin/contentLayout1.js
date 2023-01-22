import Image from "next/image"
import styles from "../../styles/admin/components/layouts.module.scss"

function ContentLayout1({ data, isAdmin }) {
    console.log(data);
    return (
        <div className={isAdmin ? styles.admin_content_layout_1 : styles.client_content_layout_1} >
            {
                isAdmin ? (
                    <div className={styles.admin_options} >
                        <button>Edit</button>
                        <button>Delete</button>
                        <hr />
                    </div>
                ) : null
            }
            <Image className={styles.image1} src={data.images[0]} height={1000} width={1000} alt={data.title} />
            <div className={styles.head}>
                <h1>{data.title}</h1>
                <p>{data.date}</p>
            </div>
            <div className={styles.content} >
                <p>{data.para1}</p>
                <p>{data.para2}</p>
                <div className={styles.image2} >
                    <Image src={data.images[1]} height={1000} width={1000} alt={data.title} />
                    <Image src={data.images[2]} height={1000} width={1000} alt={data.title} />
                </div>
                <p>{data.para3}</p>
                <p>{data.para4}</p>
                <p>{data.para5}</p>
                <p>{data.para6}</p>
                <Image className={styles.image3} src={data.images[3]} height={1000} width={1000} alt={data.title} />
                <p>{data.para7}</p>
                <p>{data.para8}</p>
                <p>{data.para9}</p>
                <p>{data.para10}</p>
            </div>

        </div>
    )
}

export default ContentLayout1