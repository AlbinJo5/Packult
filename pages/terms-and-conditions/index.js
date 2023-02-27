import Layout from "../../components/layout"
import styles from "../../styles/terms.module.scss"

function index() {

    const data = [{
        heading: "Terms and Conditions",
        content: "Lorem ipsum asdasdasd ",
    },
    {
        heading: "Privacy Policy",
        content: "Lorem ipsum asdasdasd ",
    },
    ]

    return (
        <Layout>
            <div className={styles.terms} >
                <h2>Terms and Conditions</h2>

                {
                    data.map((data, index) => (
                        <div className={styles.content} key={index} >
                            <h1>{data.heading}</h1>
                            <p>{data.content}</p>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export default index