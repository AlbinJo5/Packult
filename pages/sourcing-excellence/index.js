import Contact from "../../components/contact"
import ContentLayout1 from "../../components/contentLayout1"
import ContentLayout3 from "../../components/contentLayout3"
import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/valueImprovement.module.scss"

function index() {
    const layout1 = {
        heading: "Sourcing Excellence",
        content1: "Thanks to our deep understanding of the converting industry, we are able to identify and develop the vendors with the right competency and capability for all your Packaging requirements. We have excellent in-house resources to audit your current or potential vendors for their capabilities in terms of infrastructure, human capital, adherence to compliances, gap analysis and follow-up audits for closure of non-conformities. Our value chain understanding of Packaging materials helps our clients understand the conversion costs in greater detail and allows them to create sourcing scenarios through ‘What if’ scenarios built-in in our proprietary “Should cost” models.",
        imagePath: "/assets/images/sourcing-excellence/1.png",
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