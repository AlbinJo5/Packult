import Image from "next/image";
import styles from "../styles/components/contentLayouts.module.scss";
export default function ContentLayout2({ data }) {
  return (
    <div className={styles.Layout2} >
      <h1>{data.heading}</h1>
      <Image src={data.imagePath} alt={data.imageName} height={1000} width={1000} />
      <p>{data.content1}</p>
    </div>
  )
}
