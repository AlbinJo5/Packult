import Layout from "../../components/layout";
import styles from "../../styles/brand-owners.module.scss";
import { data } from "../../data/brand-owners.js";
import CardContent from "../../components/cardContent";
import WorkNumbers from "../../components/workNumbers";
import Contact from "../../components/contact";
import Image from "next/image";
import Particles from "../../components/particles";
export default function index() {
    return (
        <Layout>
            <Image src="/assets/images/vectors/3.png" alt="Brand Owners" width={1000} height={1000}
                style={{ position: "absolute", top: "0", right: "0", zIndex: "1", width: "15vw", height: "max-content" }}
            />
            <div className={styles.brandowners} >
                <Particles color={"#F1C644"} height="50vw" width="150vw" top="-15vh" left="90vw" blur='10vw' />
                <Particles color={"#A4FAFF"} height="50vw" width="150vw" top="10vh" left="-130vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="100vh" left="80vw" blur='10vw' />
                <Particles color={"#FFE185"} height="50vw" width="150vw" top="190vh" left="-140vw" blur='10vw' />
                <Particles color={"#FFD7EA"} height="50vw" width="150vw" top="380vh" left="-130vw" blur='5vw' />

                <h1>Brand Owners</h1>
                <p>
                    Packult has been providing innovative Packaging solutions to reputed brand owners of the FMCG, HPC, Cosmetics, Pharmaceutical, Industrial products, and other industries.
                </p>

                <div className={styles.brandowners__content} >
                    {
                        data.map((item, index) => {
                            return <CardContent key={index} data={item} />
                        })

                    }
                </div>

            </div>
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}
