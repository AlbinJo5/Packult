import styles from "../styles/components/footer.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className={styles.footer} >
            <div className={styles.links} >
                <ul>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About Us</Link></li>
                    <li><Link href="#">Our Services</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Gallery</Link></li>
                    <li><Link href="#">Careers</Link></li>
                    <li><Link href="#">Blog</Link></li>
                </ul>

            </div>
            <div className={styles.social} >
                <div className={styles.icons} >
                    <Link href="#"><Image src="/assets/icons/facebook.svg" width={30} height={30} alt="facebook" /></Link>
                    <Link href="#"><Image src="/assets/icons/instagram.svg" width={30} height={30} alt="instagram" /></Link>
                    <Link href="#"><Image src="/assets/icons/twitter.svg" width={30} height={30} alt="twitter" /></Link>
                    <Link href="#"><Image src="/assets/icons/linkedin.svg" width={30} height={30} alt="linkedin" /></Link>
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
