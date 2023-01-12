import Link from "next/link";
import styles from "../../styles/admin/components/navbar.module.scss";
import { getAuth, signOut } from "firebase/auth";
import app from "../../utils/firebase";
import { adminToken } from "../../core/localstorage"
import { useRouter } from "next/router";
import { ADMIN_ROUTES } from "../../common/routes";


function Navbar() {
    const auth = getAuth(app);
    const router = useRouter();
    const currentRoute = router.pathname
    const handleSignOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem(adminToken)
            router.push(ADMIN_ROUTES.LOGIN)
        }).catch((error) => {
            alert(error.message)
        });
    }
    return (
        <div className={styles.navbar}>
            <h1>Admin Panel</h1>
            <ul>
                <li><Link className={currentRoute === ADMIN_ROUTES.BLOGS ? styles.selected : ""} href={ADMIN_ROUTES.BLOGS}>Blogs</Link></li>
                <li><Link className={currentRoute === ADMIN_ROUTES.BLOGS_CREATE ? styles.selected : ""} href={ADMIN_ROUTES.BLOGS_CREATE}>New Blog</Link></li>
                <li><Link href="#">Our Works</Link></li>
                <li><Link href="#">New Work</Link></li>

            </ul>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar