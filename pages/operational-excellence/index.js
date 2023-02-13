import Contact from "../../components/contact";
import WorkNumbers from "../../components/workNumbers";
import ContentLayout1 from "../../components/contentLayout1";
import ContentLayout2 from "../../components/contentLayout2";
import styles from "../../styles/packagingSolution.module.scss";
import Layout from "../../components/layout";

export default function index() {
    const layout1 = {
        heading: "Operational Excellence",
        content1: "We understand the importance of operational excellence for the converters Our deep machine expertise can help improve productivity of converting equipments through upgradation, refurbishing and attachments to increase throughput, reduce wastage, stoppages and set-up times. We can also assist in decommissioning of machines from one location and commissioning at another. In short, we have the expertise to assist in anything related to converting machines and the possibilities are infinite.",
        imagePath: "/assets/images/operational-excellence/1.png",
        imageName: "Recyclable Packaging",
        content2: "",
    }
    const layout2 = {
        heading: "Process Excellence",
        imagePath: "/assets/images/operational-excellence/2.png",
        imageName: "Adobe Icons",
        content1: "Process excellence is all about improvements in converting processes through upgradation, refurbishing and suitable attachments to attain higher with minimum variation and minimum waste. Our solutions are the most optimal so that our customers don't have to break the banks for over-engineered retrofits",
    }
    const layout3 = {
        heading: "Machine Automation",
        imagePath: "/assets/images/operational-excellence/3.png",
        imageName: "Round Edge Shapes",
        content1: "We offer our customers the latest in machine automation technology. Our automation systems are designed to improve the efficiency, accuracy, and speed resulting in improved productivity at reduced costs.",
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
