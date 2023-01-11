import Image from "next/image"
import CarrersCard from "../../components/carrersCard"
import Contact from "../../components/contact"
import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/carrers.module.scss"
function index() {
    return (
        <Layout>
            <div className={styles.carrers} >

                <h1><span ><div className={styles.background}></div> Join our team</span> of Creators, Designers, and world-class Problem Solvers</h1>
                <p>To be the company our customers want us to be, It takes an eclectic group of passionate operators. Get to know the people Leading the way at Packult.</p>
                <div className={styles.images}>
                    <Image src="/assets/images/carrers/carrers (1).png" width={1000} height={1000} alt="carrers (1).png" />
                    <Image src="/assets/images/carrers/carrers (2).png" width={1000} height={1000} alt="carrers (2).png" />
                </div>
                <div className={styles.content}>
                    <h3>We&apos;re Hiring</h3>
                    <h1>Start doing work that Matters</h1>
                    <p>We&apos;re a 100% remote team spread all across the world and looking for talented people Join Us!</p>
                    <div className={styles.data} >
                        <CarrersCard />
                        <CarrersCard />
                        <CarrersCard />
                        <CarrersCard />
                        <CarrersCard />
                    </div>
                </div>
            </div>
            <WorkNumbers />
            <Contact />

        </Layout>
    )
}

export default index