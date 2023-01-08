/* eslint-disable react/no-unescaped-entities */
import Layout from '../components/layout'
import styles from "../styles/home.module.scss"
import Image from 'next/image'
import Heading from '../components/heading'
import Link from 'next/link'
import { ROUTES } from '../common/routes'
import Carousel from 'nuka-carousel'
import WorkNumbers from '../components/workNumbers'
import Contact from '../components/contact'
import BlogCarousel from '../components/blogCarousel'
import { blog_dummy } from '../data/dummy'
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
      <div className={styles.gallery} >
        <Heading heading="Gallery" line={true} />
        <div className={styles.content} >
          <h3>Some more of our work, social posts many more things...</h3>

          <div className={styles.scroll}>
            <Image src="/assets/images/home/gallery (1).png" alt='gallery1' width={1000} height={1000} />
            <Image src="/assets/images/home/gallery (2).png" alt='gallery2' width={1000} height={1000} />
            <Image src="/assets/images/home/gallery (3).png" alt='gallery3' width={1000} height={1000} />
            <Image src="/assets/images/home/gallery (2).png" alt='gallery1' width={1000} height={1000} />
            <Image src="/assets/images/home/gallery (1).png" alt='gallery2' width={1000} height={1000} />
            <Image src="/assets/images/home/gallery (3).png" alt='gallery3' width={1000} height={1000} />
          </div>
          <div className={styles.all_services_button} >
            <hr></hr>
            <Link href={"/"}>View all Images</Link>
            <hr></hr>
          </div>
        </div>
      </div>
      <div className={styles.services} >
        <Heading heading="Services" line={true} />
        <div className={styles.component} >
          <div className={styles.content} >
            <div>
              <h2>Packaging Innovation<span className={styles.arrow} > <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" /> </span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
              <ul>
                <li> <Link href={"/"}> Graphic Design</Link></li>
                <li><Link href={"/"}>Structural Engineering</Link></li>
              </ul>
            </div>
            <Image src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
          </div>
          <hr />
        </div>
        <div className={styles.component} >
          <div className={styles.content} >
            <div>
              <h2>Sustainable Solution<span className={styles.arrow} > <Image src="/assets/icons/arrow green.png" height={1000} width={1000} alt="arrow green" /> </span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
              <ul>
                <li><Link href={"/"}>Graphic Design</Link></li>
                <li><Link href={"/"}>Structural Engineering</Link></li>
              </ul>
            </div>
            <Image src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
          </div>
          <hr />
        </div>
        <div className={styles.component} >
          <div className={styles.content} >
            <div>
              <h2>Value Improvement<span className={styles.arrow} > <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" /> </span></h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni, rem amet dolor, officiis ipsam unde molestiae ea enim, itaque corporis ratione. Quaerat itaque facere fugit ipsam magnam debitis quos! Ab ipsam qui labore culpa? Eos quis aut quaerat autem.</p>
              <ul>
                <li><Link href={"/"}>Graphic Design</Link></li>
                <li><Link href={"/"}>Structural Engineering</Link></li>
              </ul>
            </div>
            <Image src="/assets/images/home/service.png" width={1000} height={1000} alt="Service" />
          </div>
          <div className={styles.all_services}>
            <Link href={"/"}>
              <h2>Operational Excellence<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>
            <Link href={"/"}>
              <h2>Sourcing Excellence<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>
            <Link href={"/"}>
              <h2>Resourcing<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>
            <Link href={"/"}>
              <h2>Application & Business Dev.<span className={styles.arrow} >
                <Image src="/assets/icons/arrow2.png" height={1000} width={1000} alt="arrow2" />
              </span>
              </h2>
            </Link>

          </div>
          <div className={styles.all_services_button} >
            <hr></hr>
            <Link href={"/"}>View all Services</Link>
            <hr></hr>
          </div>
        </div>

      </div>
      <div className={styles.customers} >
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Here's what our customers experinced after implementing Prospectss Tools</h2>
            <hr></hr>
            <Image src={'/assets/images/home/stars.png'} alt="stars" height={1000} width={1000} />
            <p>Packult helped our business to generate more sales and saved money on product packaging</p>
            <h4> <span> Azim Premji</span> Founder Chairman of Wipro</h4>
          </div>
          <hr></hr>
          <div className={styles.right}>
            <h1>Trusted by over 233784+ Customers</h1>
          </div>
        </div>

      </div>
      <div className={styles.cutomers_gallery} >
        <Carousel
        >
          <div className={styles.carousel} >
            <Image src="/assets/images/home/customers (1).png" alt='customers1' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (2).png" alt='customers2' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (3).png" alt='customers3' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (4).png" alt='customers4' width={1000} height={1000} />
            <Image src="/assets/images/home/customers (5).png" alt='customers5' width={1000} height={1000} />
          </div>

        </Carousel>
      </div>
      <BlogCarousel heading={"Blog"} isBlogPage={false} data={blog_dummy} />
      <div className={styles.awards}>
        <div className={styles.bg_plane}>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.scrollable}>
              <div className={styles.award_box}>
                {/* <h4> <span> INDIASTAR</span> PACKAGING DESIGN EXCELLENE 2022</h4>
                <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} /> */}
              </div>
              <div className={styles.award_box}>
                <h4> <span> IFCA 2022</span> DESIGN OF THE YEAR 2022</h4>
                <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} />
              </div>
              <div className={styles.award_box}>
                <h4> <span> INDIASTAR</span> PACKAGING DESIGN EXCELLENE 2022</h4>
                <Image src={'/assets/images/home/award.png'} alt="award" width={1000} height={1000} />
              </div>

            </div>
          </div>
          <div className={styles.right}>
            <h2>Our Awards</h2>
            <h3>Our Well Deserved Awards</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam est ullam recusandae dolores nam dolore a nemo architecto fuga illum.</p>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <Image src={'/assets/images/home/map.png'} alt="map" width={1000} height={1000} />
      </div>
      <WorkNumbers />
      <div className={styles.mobile_app}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Download our Mobile App</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, ea eligendi! Iste beatae perspiciatis laborum suscipit accusamus animi facilis magni.</p>
            <div className={styles.qr_codes}>
              <div>
                <Image src={'/assets/images/home/customer-qr-code.png'} alt="cutomer-qr-code" width={1000} height={1000} />
                <h5>Customer App</h5>
              </div>
              <div>
                <Image src={'/assets/images/home/vendor-qr-code.png'} alt="vendor-qr-code" width={1000} height={1000} />
                <h5>Vendor App</h5>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Image src={'/assets/images/home/mobile-app.png'} alt="mobile-app" width={1000} height={1000} />
            <div className={styles.apple_play_store}>
              <Image src={'/assets/images/home/App Store.png'} alt="app-store" width={1000} height={1000} />
              <Image src={'/assets/images/home/Google Play.png'} alt="play-store" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </Layout>
  )
}
