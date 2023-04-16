import Image from "next/image"
import CarrersCard from "../../components/carrersCard"
import Contact from "../../components/contact"
import Layout from "../../components/layout"
import Particles from "../../components/particles"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/carrers.module.scss"
function index() {
    return (
        <Layout pageMeta={{ description: "Join us in our quest for the best that Packaging has to offer" }} >
            <div className={styles.lap_particles}>
                <Image src="/assets/images/vectors/1.png" alt="Brand Owners" width={1000} height={1000}
                    style={{ position: "absolute", top: "0", right: "0", zIndex: "1", width: "25vw", height: "max-content" }}
                />
                <Particles color={"rgba(194, 217, 80, 0.5)"} height="50vw" width="150vw" top="-10vw" left="75vw" blur='3vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="10vw" left="-130vw" blur='10vw' />
                {/* <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="60vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' /> */}
            </div>
            <div className={styles.tablet_particles}>
                <Image src="/assets/images/vectors/1.png" alt="Brand Owners" width={1000} height={1000}
                    style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "25vw", height: "max-content" }}
                />
                <Particles color={"rgba(194, 217, 80, 0.5)"} height="50vw" width="150vw" top="-10vw" left="75vw" blur='3vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                {/* <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="70vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="110vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="200vw" left="-130vw" blur='5vw' /> */}
            </div>
            <div className={styles.mobile_particles}>
                <Image src="/assets/images/vectors/1.png" alt="Brand Owners" width={1000} height={1000}
                    style={{ position: "absolute", top: "5vw", right: "0", zIndex: "1", width: "25vw", height: "max-content" }}
                />
                <Particles color={"rgba(194, 217, 80, 0.5)"} height="50vw" width="150vw" top="-10vw" left="75vw" blur='3vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="20vw" left="-130vw" blur='10vw' />
                {/* <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vw" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="150vw" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="240vw" left="-130vw" blur='5vw' /> */}
            </div>
            <div className={styles.carrers} >

                <h1><span ><div className={styles.background}></div> Join us in our</span>  quest for the best that Packaging has to offer</h1>
                <p>To be the company our customers want us to be, It takes an eclectic group of passionate operators. Get to know the people Leading</p>
                <div className={styles.images}>
                    <Image src="/assets/images/carrers/carrers (1).png" width={1000} height={1000} alt="carrers (1).png" />
                    <Image src="/assets/images/carrers/carrers (2).png" width={1000} height={1000} alt="carrers (2).png" />
                </div>
                <div className={styles.content}>
                    <h3>We&apos;re Hiring</h3>
                    {/* <h1>Start doing work that Matters</h1>
                    <p>We&apos;re a 100% remote team spread all across the world and looking for talented people Join Us!</p> */}
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