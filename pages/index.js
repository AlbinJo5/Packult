import Layout from '../components/layout'
import styles from "../styles/home.module.scss"
import Image from 'next/image'
import Heading from '../components/heading'
import Link from 'next/link'
import { ROUTES } from '../common/routes'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

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
            <Image src="/assets/images/home/brandOwners.png" width={1000} height={1000} alt="Brand Owners" />
            <div className={styles.brandCard}>
              <Link href={ROUTES.BRAND_OWNERS} >
                <h3>Brand Owners<span className={styles.arrow} > <Image src="/assets/icons/arrow45.svg" height={10} width={10} alt="arrow45" /> </span></h3>
              </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quia vero qui, hic molestias accusamus blanditiis dolores praesentium repudiandae. Quis, enim voluptatum excepturi itaque distinctio porro tempora aspernatur eum aliquam!</p>
            </div>
          </div>
          <div className={styles.brand}>
            <Image src="/assets/images/home/packagingConverters.png" width={1000} height={1000} alt="Packaging Converters" />
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
        <Heading heading="Vision and Mission" line={true} />
        <div className={styles.content} >
          <Image src="/assets/images/home/vision.png" alt='vision' height={1000} width={1000} />
          <h2>OUR VISION</h2>
          <ul>
            <li>To Provide a platform for sustanable and Innovative packaging solution.</li>
            <li>Always try to make sustanble solutions.</li>
            <li>Disruptive and value for money packaging solution.</li>
          </ul>
        </div>
        <div className={styles.content} >
          <Image src="/assets/images/home/mission.png" alt='vision' height={1000} width={1000} />
          <h2>OUR MISSION</h2>
          <ul>
            <li>Close contact with brand owners, converters, and raw material suppliers.</li>
            <li>Using the appropriate chemistry, process expertise with the right machine technology for cost-optimal solutions.</li>
            <li>To ensure end users get the best experience and expertise at an affordable cost.</li>
          </ul>
        </div>
      </div>
      {/* <div className={styles.gallery} >
        <Heading heading="Gallery" line={true} />
        <div className={styles.content} >
          <h3>Some more of our work, social posts many more things...</h3>
          <Carousel showThumbs={false} showStatus={false} >
            <div>
              <Image src="/assets/images/home/gallery (1).png" alt="gallery1" height={1000} width={1000} />
              <Image src="/assets/images/home/gallery (2).png" alt="gallery2" height={1000} width={1000} />
              <Image src="/assets/images/home/gallery (3).png" alt="gallery2" height={1000} width={1000} />

            </div>
            <div>
              <Image src="/assets/images/home/gallery (1).png" alt="gallery1" height={1000} width={1000} />
              <Image src="/assets/images/home/gallery (2).png" alt="gallery2" height={1000} width={1000} />
              <Image src="/assets/images/home/gallery (3).png" alt="gallery2" height={1000} width={1000} />
            </div>
            <div>
              <Image src="/assets/images/home/gallery (1).png" alt="gallery1" height={1000} width={1000} />
              <Image src="/assets/images/home/gallery (2).png" alt="gallery2" height={1000} width={1000} />
              <Image src="/assets/images/home/gallery (3).png" alt="gallery2" height={1000} width={1000} />
            </div>
          </Carousel>
        </div>
      </div> */}
      <div className={styles.services} >
        <Heading heading="Services" line={true} />
        <div className={styles.content} >
          <div>
            <h2>Brand Owners<span className={styles.arrow} > <Image src="/assets/icons/arrow45.svg" height={10} width={10} alt="arrow45" /> </span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
            <ul>
              <li>Graphic Design</li>
              <li>Structural Engineering</li>
            </ul>
          </div>
          <Image src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
        </div>
      </div>

    </Layout>
  )
}
