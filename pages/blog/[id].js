import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from "../../styles/clientBlog.module.scss"
import BlogPage1 from "../../components/blogPage1"
import BlogPage2 from "../../components/blogPage2"
import BlogPage3 from "../../components/blogPage3"
import Layout from "../../components/layout"

function Index() {

    const [loading, setloading] = useState(true)
    const [data, setdata] = useState([])
    const router = useRouter()
    const params = router.query
    useEffect(() => {
        if (params.id) {
            //   fetch blog getbyid api
            fetch(`/api/blog/getById?id=${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setdata(data)
                    setloading(false)
                })
                .catch(err => console.log(err))

        }


    }, [params.id])

    return (
        <Layout>
            <div className={styles.blog} >
                {
                    loading ? <h1>Loading...</h1> :
                        data.layout === "layout1" ? <BlogPage1 data={data} /> :
                            data.layout === "layout2" ? <BlogPage2 data={data} /> :
                                data.layout === "layout3" ? <BlogPage3 data={data} /> :
                                    <h1>Oops, Something is wrong</h1>
                }
            </div>
        </Layout>
    )
}

export default Index