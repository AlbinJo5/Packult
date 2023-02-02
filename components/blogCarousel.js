import React, { useEffect, useState } from 'react'
import Heading from './heading'
import styles from "../styles/components/blogCarousel.module.scss"
import { useRouter } from 'next/router'
import { ROUTES } from '../common/routes'

function BlogCarousel({ heading, isBlogPage }) {

    const [data, setdata] = useState([])
    const router = useRouter()

    // string date to date object to get month and day
    const date = (date) => {
        const d = new Date(date);
        const month = d.toLocaleString('default', { month: 'long' });
        const day = d.getDate();
        return `${month} ${day}`
    }

    useEffect(() => {
        //   fetch blog data using api
        fetch('/api/blog/get')
            .then(res => res.json())
            .then(data => {
                // reverse the array to get latest blog first
                data.reverse()
                setdata(data)
            })
            .catch(err => console.log(err))

    }, [])


    return (
        <div className={styles.blogCarousel}>
            {
                !isBlogPage ? <Heading heading={heading} line={true} /> :
                    <Heading heading={heading} line={false} color={"black"} />
            }
            <div className={styles.content}>
                {
                    data.map((item, index) => {
                        return (
                            <div data-aos="fade-up" data-aos-duration="1000" className={styles.card} key={index}
                                onClick={() => router.push(ROUTES.BLOG + item.id)}
                            >
                                <h5>{date(item.date)}</h5>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default BlogCarousel