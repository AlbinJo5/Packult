import AdminLayout from "../../../components/admin/adminLayout"
import styles from "../../../styles/admin/our-works.module.scss"
import OurWorkCard from "../../../components/admin/ourWorkCard"
import { useEffect, useState } from "react"

function Index() {
    const [loading, setloading] = useState(true)
    const [ourWorks, setourWorks] = useState([])

    useEffect(() => {
        fetch('/api/our-work/get')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setourWorks(data)
                setloading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <AdminLayout>
            <div className={styles.ourWorks}>
                <h2>Our Works</h2>
                <hr />
                <div className={styles.all_works} >
                    {
                        loading ? <h3>Loading...</h3> : ourWorks.map(ourWork => <OurWorkCard key={ourWork.id} data={ourWork} />)
                    }
                </div>
            </div>
        </AdminLayout>
    )
}

export default Index