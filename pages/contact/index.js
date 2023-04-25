import Layout from "../../components/layout"
import Particles from "../../components/particles"
import WorkNumbers from "../../components/workNumbers"
import styles from "../../styles/contact-us.module.scss"
import { useRef, useState } from "react"


function Index() {
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);
    const name = useRef();
    const email = useRef();
    const number = useRef();
    const message = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetch('/api/contact/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name.current.value,
                email: email.current.value,
                number: number.current.value,
                message: message.current.value
            })
        })

        const data = await resp.json();
        if (data.message === 'success') {
            setShow(true);
            setShowError(false);
        }
        else {
            setShowError(true);
            setShow(false);
        }
    }

    return (
        <Layout pageMeta={{description:"We are always ready to answer any questions that interests you. Shoot!"}} >
            <div className={styles.lap_particles}>
                <Particles color={"#B3E2FF"} height="50vw" width="150vw" top="-15vw" left="90vw" blur='10vw' />
                <Particles color={"#B3E2FF"} height="50vw" width="150vw" top="20vw" left="-140vw" blur='10vw' />
            </div>
            <div className={styles.tablet_particles}>
                <Particles color={"#B3E2FF"} height="50vw" width="150vw" top="-15vw" left="90vw" blur='10vw' />
                <Particles color={"#B3E2FF"} height="50vw" width="150vw" top="20vw" left="-140vw" blur='10vw' />
            </div>
            <div className={styles.mobile_particles}>
                <Particles color={"#B3E2FF"} height="50vw" width="150vw" top="-15vw" left="90vw" blur='10vw' />
                <Particles color={"#B3E2FF"} height="50vw" width="150vw" top="50vw" left="-140vw" blur='10vw' />
            </div>
            <div className={styles.contact_us} >
                <div className={styles.content}>
                    <div className={styles.left}>
                        <form onSubmit={handleSubmit} >
                            <input ref={name} type="text" name="name" placeholder="Your Name*" required={true} />
                            <input ref={email} type="email" name="email" placeholder="Email Address*" required={true} />
                            <input ref={number} type="number" name="phone" placeholder="Phone Number" />
                            <textarea ref={message} name="queries" placeholder="Share your thoughts or Queries"></textarea>
                            <button type="submit">SUBMIT</button>
                        </form>
                    </div>
                    <div className={styles.right}>
                        <h1 data-aos="fade-left">Contact</h1>
                        <h2><span><hr /></span>Us</h2>
                        <p>We are always ready to answer any questions that interests you. Shoot!</p>
                    </div>
                </div>
                <WorkNumbers />
            </div>
        </Layout>
    )
}

export default Index