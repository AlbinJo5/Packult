import React from 'react'
import Contact from '../../components/contact'
import ContentLayout1 from '../../components/contentLayout1'
import Layout from '../../components/layout'
import WorkNumbers from '../../components/workNumbers'
import styles from "../../styles/sustainable-solution.module.scss"


function index() {
    const layout1 = {
        heading: "Sustainable Solution",
        content1: "Sustainability is at the core of everything we do. The Packult team is highly adaptive to the changing customer needs in development of eco-friendly solutions. Our sustainable packaging solutions are intended to be in harmony with nature without impacting performance or aesthetics. ",
        imagePath: "/assets/images/sustainable-solution/1.png",
        imageName: "sustainable solution",
        content2: "",
    }
    return (
        <Layout>
            <section className={styles.content1} >
                <ContentLayout1 data={layout1} />
            </section>
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}

export default index