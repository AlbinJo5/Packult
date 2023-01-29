import styles from "../../styles/work-page.module.scss"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../../components/layout"

function WorkPage() {
    const router = useRouter()
    const params = router.query

    const [loading, setloading] = useState(true)
    const [data, setdata] = useState({})

    useEffect(() => {
        // fetch data using api
        fetch(`/api/our-work/getById?id=${params.id}`)
            .then(res => res.json())
            .then(data => {
                setdata(data)
                setloading(false)
                console.log(data);
            })
            .catch(err => console.log(err))
    }, [params.id])

    return (
        <Layout>
            {
                loading ? <h1>Loading...</h1> :
                    <div className={styles.work_page}>
                        <h3>{data.title}</h3>
                        <Image src={data.image1} height={1000} width={1000} alt={data.title} />
                        <p>{data.para1}</p>
                        <p>{data.para2}</p>
                        {/* images */}
                        <div className={styles.images}>
                            <Image src={data.image2} height={1000} width={1000} alt={data.title} />
                            <Image src={data.image3} height={1000} width={1000} alt={data.title} />
                        </div>
                        <Image src={data.image4} height={1000} width={1000} alt={data.title} />
                        <p>{data.para3}</p>
                        <p>{data.para4}</p>
                    </div>
            }

        </Layout>
    )
}

export default WorkPage