import Image from "next/image"
import Link from "next/link"
import { ROUTES } from "../common/routes"
import styles from "../styles/components/header.module.scss"
import { useRouter } from 'next/router'
import { useState } from "react"

export default function Header() {
  // sidenav
  const [sideNav, setsideNav] = useState(false)
  const openNav = () => {
    setsideNav(true)
  }
  const closeNav = () => {
    setsideNav(false)
  }


  // get the current route
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav className={styles.nav}>
      <Link href={ROUTES.HOME} id="header_logo"  >

        <div className={styles.logo} >
          <Image src="/assets/logos/logo.svg" alt="Packult" width={1000} height={1000} />
        </div>
        <div className={styles.mlogo}>
          <Image src="/assets/logos/mobileLogo.svg" alt="Packult" width={1000} height={1000} />

        </div>
      </Link>


      <ul className={styles.links} >

        <li> <span className={currentRoute === ROUTES.BRAND_OWNERS || currentRoute === ROUTES.PACKAGING_CONVERTERS ? styles.selected : ""}> SCOPE</span>
          <div className={styles.dropdown}>
            <Link href={ROUTES.BRAND_OWNERS}><span>BRAND OWNERS</span></Link>
            <Link href={ROUTES.PACKAGING_CONVERTERS}><span>PACKAGING CONVERTERS</span></Link>
          </div></li>
        <li><Link className={currentRoute === ROUTES.GALLERY ? styles.selected : ""} href={ROUTES.GALLERY}>OUR WORK</Link></li>
        <li><Link className={currentRoute === ROUTES.ABOUT ? styles.selected : ""} href={ROUTES.ABOUT}>ABOUT</Link></li>
        <li><Link className={currentRoute === ROUTES.SERVICES ? styles.selected : ""} href={ROUTES.SERVICES}>SERVICES</Link></li>
        <li><Link className={currentRoute === ROUTES.CONATCT_US ? styles.selected_contact : styles.contact} href={ROUTES.CONATCT_US} >CONTACT</Link></li>
      </ul>
      <div className={styles.mlinks} >
        {/* hamburgr menu */}
        <Image onClick={openNav} src="/assets/icons/hamburger.png" alt="Packult" width={1000} height={1000} />
        {/* sidenav */}
        <div className={sideNav ? styles.sidenav : styles.sidenav_close}>
          {/* closebutton */}
          <div className={styles.closebtn}>

            <Image onClick={closeNav} src="/assets/icons/close.png" alt="Packult" width={1000} height={1000} />
          </div>
          <ul>
            <li><Link className={currentRoute === ROUTES.BRAND_OWNERS ? styles.selected : ""} href={ROUTES.BRAND_OWNERS}>SCOPE</Link></li>
            <li><Link className={currentRoute === ROUTES.GALLERY ? styles.selected : ""} href={ROUTES.SERVICES}>SERVICES</Link></li>
            <li><Link className={currentRoute === ROUTES.ABOUT ? styles.selected : ""} href={ROUTES.GALLERY}>OUR WORK</Link></li>
            <li><Link className={currentRoute === ROUTES.SERVICES ? styles.selected : ""} href={ROUTES.ABOUT}>ABOUT</Link></li>
            <li><Link className={currentRoute === ROUTES.CONATCT_US ? styles.selected_contact : styles.contact} href={ROUTES.CONATCT_US} >CONTACT</Link></li>
          </ul>
        </div>
      </div>

    </nav >
  )
}
