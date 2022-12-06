import Image from "next/image"
import Link from "next/link"
import styles from "../styles/header.module.scss"

export default function Header() {
  return (
    <nav className={styles.nav}>

      <div className={styles.logo} >
        <Image src="/assets/logos/logo.svg" alt="Packult" width={100} height={30} />
      </div>
      <div className={styles.mlogo}>
        <Image src="/assets/logos/mobileLogo.svg" alt="Packult" width={100} height={30} />

      </div>


      <ul className={styles.links} >
        <li><Link href="#">SCOPE</Link></li>
        <li><Link href="#">SERVICES</Link></li>
        <li><Link href="#">OUR WORK</Link></li>
        <li><Link href="#">ABOUT</Link></li>
        <li><Link href="#" className={styles.contact}>CONTACT</Link></li>
      </ul>
      <div className={styles.mlinks} >
        <div className={styles.mLinks__icon}>
          <Image src="/assets/icons/hamburger.svg" alt="Packult" width={30} height={30} />
        </div>
        <div className={styles.mLinks__links}>
          <ul>
            <li><Link href="#">SCOPE</Link></li>
            <li><Link href="#">SERVICES</Link></li>
            <li><Link href="#">OUR WORK</Link></li>
            <li><Link href="#">ABOUT</Link></li>
            <li><Link href="#" className={styles.contact}>CONTACT</Link></li>
          </ul>
        </div>
      </div>

    </nav>
  )
}
