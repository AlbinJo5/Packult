import Contact from "../../components/contact"
import ContentLayout4 from "../../components/contentLayout4"
import ContentLayout3 from "../../components/contentLayout3"
import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/management-and-assistance.module.scss"
import ContentLayout1 from "../../components/contentLayout1"

function index() {
    const layout1 = {
        heading: "Mergers & Acquisitions",
        content1: "We provide end to end Mergers & Acquisitions support for converters of any size including Make ready procedures for dilution or expansion, financial due diligence, integration of culture & business processes.",
        imagePath: "/assets/images/management-and-assistance/1.png",
        imageName: "Recyclable Packaging",
        content2: "",
    }
    const layout2 = {
        heading: "We Improve the Quality of Your Product",
        imageName: "Adobe Icons",
        content1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nisi recusandae reiciendis eum. Dolorum iure cupiditate quis! Incidunt architecto animi a facere odio aut quia, assumenda et tenetur mollitia possimus quis quaerat eum deserunt placeat repudiandae recusandae deleniti magni ipsa maxime perspiciatis iusto! Temporibus, totam delectus ipsum commodi minus obcaecati dolorum cum non pariatur perspiciatis eius, aliquam, nesciunt nihil deserunt at ducimus consequatur corrupti porro veritatis! Aperiam, sunt assumenda quam perferendis obcaecati voluptatibus maxime maiores aliquam eligendi dicta blanditiis aut, a ipsam nostrum odit sit, corporis nulla. Asperiores voluptates pariatur excepturi dolorum modi illum totam, debitis, blanditiis, officia tenetur dolore.",
    }
    return (
        <Layout>
            <section className={styles.content1} >
                <ContentLayout1 data={layout1} />
            </section>
            {/* <section>
                <ContentLayout3 data={layout2} />
            </section> */}

            <WorkNumbers />
            <Contact />
        </Layout>
    )
}

export default index