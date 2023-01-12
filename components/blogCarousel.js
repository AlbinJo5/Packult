import React from 'react'
import Heading from './heading'
import styles from "../styles/components/blogCarousel.module.scss"

function BlogCarousel({ heading, isBlogPage, data=[] }) {
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
                            <div className={styles.card} key={index}>
                                <h5>{item.date}</h5>
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