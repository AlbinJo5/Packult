import styles from "../../styles/work-page.module.scss"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Image from "next/image"
import Layout from "../../components/layout"
import { ROUTES } from "../../common/routes"
import WorkNumbers from "../../components/workNumbers"
import Contact from "../../components/contact"

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
    const [images, setimages] = useState([])

    useEffect(() => {
        //   fetch blog images using api
        fetch('/api/our-work/get')
            .then(res => res.json())
            .then(images => {
                // reverse the array to get latest blog first
                images.reverse()
                setimages(images)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                loading ? <h1>Loading...</h1> :
                    <Layout>
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

                            {/* explore */}
                            <div className={styles.explore}>
                                <h4>Explore Other Works</h4>
                                <div className={styles.scroll}>
                                    {
                                        images.map((item, index) => {
                                            return (
                                                // exlcude current item
                                                item.id === data.id ? null :
                                                    <Image onClick={() => { router.push(ROUTES.OUR_WORKS + item.id) }} key={index} src={item.image2} alt={item.title} width={1000} height={1000} />
                                            )
                                        })
                                    }

                                </div>
                            </div>

                        </div>
                        <WorkNumbers />
                        <Contact />
                    </Layout>
            }

        </div>
    )
}

export default WorkPage