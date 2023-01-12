import Link from "next/link";
import styles from "../../styles/admin/components/navbar.module.scss";
import { getAuth, signOut } from "firebase/auth";
import app from "../../utils/firebase";
import { adminToken } from "../../core/localstorage"
import { useRouter } from "next/router";


function Navbar() {
    const auth = getAuth(app);
    const router = useRouter();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem(adminToken)
            router.push("/admin")
        }).catch((error) => {
            alert(error.message)
        });
    }
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Link href="#">Blogs</Link></li>
                <li><Link href="#">New Blog</Link></li>
                <li><Link href="#">Our Works</Link></li>
                <li><Link href="#">New Work</Link></li>

            </ul>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )
}

export default Navbar