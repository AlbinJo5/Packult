import Image from "next/image"
import Link from "next/link"
import styles from "../styles/components/cardContent.module.scss"

export default function CardContent({ data }) {
    const { number, heading, content, links, image } = data;
    return (
        <div className={styles.cardContent} >

            <div className={styles.content} >
                <div className={styles.heading} >
                    <h1>{number}</h1>
                    <h2>{heading}</h2>
                </div>
                <p>{content}</p>
                {
                    links?.map((link, index) => (
                        <Link href={link.link} key={index} >{link.text}</Link>
                    ))
                }
            </div>
            <div className={styles.image} >
                <Image data-aos="flip-left" src={image} width={100} height={100} alt={heading} />
            </div>
        </div>
    )
}
