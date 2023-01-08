import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "../common/routes"
import styles from "../styles/components/header.module.scss"
import { useRouter } from 'next/router'

export default function Header() {

  // get the current route
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav className={styles.nav}>
      <Link href={ROUTES.HOME} id="header_logo"  >

        <div className={styles.logo} >
          <Image src="/assets/logos/logo.svg" alt="Packult" width={100} height={30} />
        </div>
        <div className={styles.mlogo}>
          <Image src="/assets/logos/mobileLogo.svg" alt="Packult" width={100} height={30} />

        </div>
      </Link>


      <ul className={styles.links} >
        <li><Link href="#">SCOPE</Link></li>
        <li><Link href="#">SERVICES</Link></li>
        <li><Link href="#">OUR WORK</Link></li>
        <li><Link className={currentRoute === ROUTES.ABOUT ? styles.selected : ""} href={ROUTES.ABOUT}>ABOUT</Link></li>
        <li><Link className={currentRoute === ROUTES.CONATCT_US ? styles.selected_contact : styles.contact} href={ROUTES.CONATCT_US} >CONTACT</Link></li>
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
