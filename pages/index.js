import Layout from '../components/layout'
import styles from "../styles/home.module.scss"
import Image from 'next/image'
import Heading from '../components/heading'
import Link from 'next/link'
import { ROUTES } from '../common/routes'

export default function Home() {
  return (
    <Layout >
      <div className={styles.langingPage} >

        Packult
      </div>
      <div className={styles.intro}>
        <div className={styles.bgRectangle}></div>
        <div className={styles.bgOval}></div>
        <div className={styles.content} >
          <div className={styles.brand} >
            <Image src="/assets/images/home/brandOwners.png" width={100} height={100} alt="Brand Owners" />
            <div className={styles.brandCard}>
              <Link href={ROUTES.BRAND_OWNERS} >
                <h3>Brand Owners<span className={styles.arrow} > <Image src="/assets/icons/arrow45.svg" height={10} width={10} alt="arrow45" /> </span></h3>
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia vero qui, hic molestias accusamus blanditiis dolores praesentium repudiandae. Quis, enim voluptatum excepturi itaque distinctio porro tempora aspernatur eum aliquam!</p>
            </div>
          </div>
          <div className={styles.brand}>
            <Image src="/assets/images/home/packagingConverters.png" width={100} height={100} alt="Packaging Converters" />
            <div className={styles.brandCard}>
              <Link href={ROUTES.PACKAGING_CONVERTERS} >
                <h3>Packaging Converters<span className={styles.arrow} > <Image src="/assets/icons/arrow45.svg" height={10} width={10} alt="arrow45" /> </span></h3>
              </Link>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ut amet qui reprehenderit velit corrupti magnam fugit, perferendis, quia sapiente a libero ullam, architecto perspiciatis dolor consequatur quas voluptatum? Aliquid.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.vision_mission} >
        <Heading heading="Vision & Mission" line={true} />
        <div className={styles.vision} >
          {/* <Image src={} /> */}
        </div>
      </div>
    </Layout>
  )
}
