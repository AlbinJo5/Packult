import Layout from "../../components/layout"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/contact-us.module.scss"

function index() {
    return (
        <Layout>
            <div className={styles.contact_us} >
                <div className={styles.content}>
                    <div className={styles.left}>
                        <form >
                            <input type="text" name="name" placeholder="Your Name*" required={true} />
                            <input type="email" name="email" placeholder="Email Address*" required={true} />
                            <input type="number" name="phone" placeholder="Phone Number" />
                            <textarea name="queries" placeholder="Share your thoughts or Queries"></textarea>
                            <button type="submit">SHARE YOUR FEEDBACK</button>
                        </form>
                    </div>
                    <div className={styles.right}>
                        <h1>Contact</h1>
                        <h2><span><hr /></span>Us</h2>
                        <p>It is very important for us to keep in touch with you. So we are always ready to answer any questions that interests you. Shoot!</p>
                    </div>
                </div>
                <WorkNumbers />
            </div>
        </Layout>
    )
}

export default index