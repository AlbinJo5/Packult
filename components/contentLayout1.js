import Image from "next/image"
import styles from "../styles/components/contentLayouts.module.scss"

export default function ContentLayout1({ data }) {

    return (
        <div className={styles.Layout1} >
            <h1>{data.heading}</h1>
            <div class={styles.Top}>
                <p>{data.content1}</p>
                <Image src={data.imagePath} alt={data.imageName} height={1000} width={1000} />
            </div>
            <div class={styles.Bottom}>
                <p>{data.content2}</p>
            </div>
        </div>
    )
}
