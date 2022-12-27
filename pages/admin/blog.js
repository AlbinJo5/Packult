import { useEffect, useState } from "react"
import { adminToken } from "../../core/localstorage"
import { getAuth, signOut } from "firebase/auth";
import app from "../../utils/firebase";
import styles from "../../styles/admin/blog.module.scss"
import { useRouter } from "next/router";

function Blog() {

    const auth = getAuth(app);
    const router = useRouter();
    const [loading, setloading] = useState(true)
    useEffect(() => {
        var token = localStorage.getItem(adminToken)
        if (!token) {
            router.push("/admin")
            return
        }
        setloading(false)
    }, [router])


    const handleSignOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem(adminToken)
            router.push("/admin")
        }).catch((error) => {
            alert(error.message)
        });
    }

    return (
        <div className={styles.blog}>
            {
                !loading ? (
                    <div>
                        Create Blog
                        <button onClick={handleSignOut} >Sign Out</button>
                    </div>
                ) : loading
            }

        </div>
    )
}

export default Blog