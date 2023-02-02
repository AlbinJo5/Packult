import styles from "../styles/components/footer.module.scss"
import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "../common/routes"

export default function Footer() {
    return (
        <div className={styles.footer} >
            <div className={styles.links} >
                <ul>
                    <li><Link href={ROUTES.HOME}>Home</Link></li>
                    <li><Link href={ROUTES.ABOUT}>About Us</Link></li>
                    <li><Link href={ROUTES.GALLERY}>Our Work</Link></li>
                    <li><Link href={ROUTES.SERVICES}>Services</Link></li>
                    <li><Link href={ROUTES.GALLERY}>Gallery</Link></li>
                    <li><Link href={ROUTES.CARRERS}>Careers</Link></li>
                    <li><Link href={ROUTES.HOME}>Blog</Link></li>
                </ul>

            </div>
            <div className={styles.social} >
                <div className={styles.icons} >
                    <Link data-aos="fade-up" data-aos-offset="-700" href="#"><Image src="/assets/icons/facebook.svg" width={30} height={30} alt="facebook" /></Link>
                    <Link data-aos="fade-up" data-aos-offset="-700" href="#"><Image src="/assets/icons/instagram.svg" width={30} height={30} alt="instagram" /></Link>
                    <Link data-aos="fade-up" data-aos-offset="-700" href="#"><Image src="/assets/icons/twitter.svg" width={30} height={30} alt="twitter" /></Link>
                    <Link data-aos="fade-up" data-aos-offset="-700" href="#"><Image src="/assets/icons/linkedin.svg" width={30} height={30} alt="linkedin" /></Link>
                </div>
                <div className={styles.contact} >
                    <p>
                        <Link href="mailto: connect@packult.com">connect@packult.com</Link>
                    </p>
                    <p  >
                        <Link className={styles.whatsapp} href="tel: +91 9876543210"> <Image src="/assets/icons/whatsapp.svg" width={30} height={30} alt="whatsapp" />  +91 9876543210</Link>
                    </p>
                    <p>
                        230, Udyog Bhavan, Sonawala road,<br />
                        Gurgao east, Mumbai, Maharashtra<br />
                        400063
                    </p>
                </div>
            </div>
        </div>
    )
}
