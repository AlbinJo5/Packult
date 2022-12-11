import Layout from "../../components/layout";
import styles from "../../styles/brand-owners.module.scss";
import { data } from "../../data/brand-owners.js";
import CardContent from "../../components/cardContent";
import WorkNumbers from "../../components/workNumbers";
import Contact from "../../components/contact";
export default function index() {
    return (
        <Layout>
            <div className={styles.brandowners} >
                <h1>Brand Owners</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, natus fugiat! Accusantium, nesciunt architecto! Modi ab error quia! Mollitia ducimus atque dolorum culpa velit laboriosam sapiente libero veritatis alias fugit deleniti natus maxime nam non, unde itaque cumque ratione eos? Modi maiores, dignissimos quo ipsa voluptatem impedit numquam deserunt molestiae excepturi eius minus sequi autem, libero veniam harum laboriosam! Totam in magnam sit perspiciatis ab aperiam harum accusamus nihil magni sint, beatae, ad natus. Non enim sequi ducimus qui dignissimos magnam ad accusantium laudantium? Fugit exercitationem obcaecati corrupti incidunt voluptatibus in blanditiis labore assumenda nam, hic minus eligendi quos nostrum.
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
