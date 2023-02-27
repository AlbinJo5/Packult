import Contact from "../../components/contact";
import WorkNumbers from "../../components/workNumbers";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout2 from "../../components/contentLayout2";
import styles from "../../styles/packagingSolution.module.scss";
import Layout from "../../components/layout";

export default function index() {
    const layout1 = {
        heading: "Operational Excellence",
        content1: "Packult has a dedicated and experienced Operational Excellence team which provides Process Excellence & Converting Excellence services to Film producers and converters. Our Process Excellence offerings include specialty inline / offline coatings, Material & Process optimization, SOPs for Screen changing and Die & Coating Head cleaning, Trim waste reduction and more. Our Converting Excellence services include Machine retrofit, upgradation & refurbishment for productivity enhancement and wastage reduction. We also offer services for decommissioning of machines from one location and recommissioning at another.",
        imagePath: "/assets/images/operational-excellence/1.png",
        imageName: "Recyclable Packaging",
        content2: "",
    }
    const layout2 = {
        heading: "Process Excellence",
        imagePath: "/assets/images/operational-excellence/2.png",
        imageName: "Adobe Icons",
        content1: " We provide following services under Process Excellence: Recipe evaluation and selection, Material and Process optimization, Product failure investigation – RCA and Troubleshooting, On-site Technical support, Safety checks, Trim waste reduction, Specialty inline / offline coatings, SOPs for Screen changing and Die & Coating Head cleaning",
    }
    const layout3 = {
        heading: "Converting Excellence",
        imagePath: "/assets/images/operational-excellence/3.png",
        imageName: "Round Edge Shapes",
        content1: "We provide the following services under Converting Excellence: Machine retrofit, repairs & maintenance, Productivity enhancement and wastage reduction through electrical and mechanical upgradation, Software development and automation for upgradation to the latest generation Dismantling & decommissioning of machines from one location and recommissioning at another, Operational training on preventive maintenance & safety enhancement, Technical advisory on machine selection",
    }
    return (
        <Layout>
            <section className={styles.content1} >
                <ContentLayout1 data={layout1} />
            </section>
            <section>
                <ContentLayout2 data={layout2} />
            </section>
            <section>
                <ContentLayout2 data={layout3} />
            </section>
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}
