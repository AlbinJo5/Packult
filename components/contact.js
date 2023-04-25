import { useRef, useState } from "react"
import styles from "../styles/components/contact.module.scss"
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

import Alert from 'react-bootstrap/Alert';

export default function Contact() {
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
        <div className={styles.contact} >
            <h1>Have a project in mind?</h1>
            <div className={styles.formContainer} >
                <div>
                    <h4>Contact Us!</h4>
                    <form onSubmit={handleSubmit}>
                        <input type="text" ref={name} placeholder="Your name*" required={true} />
                        <input type="email" ref={email} placeholder="Email address*" required={true} />
                        <input type="number" ref={number} placeholder="Phone number*"  />
                        <textarea ref={message} placeholder="Your message*"  />
                        <button type="submit" >Submit</button>
                    </form>
                </div>
                <Image data-aos="fade-up" data-aos-offset="-500" src="/assets/images/components/contactPerson.svg" height={100} width={100} alt={"Contact Person"} />
            </div>

            {/* <Alert variant="success"/>
            <Alert variant="danger"/> */}
            <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Message Sent!</Alert.Heading>
                <p>
                    We will get back to you as soon as possible.
                </p>
            </Alert>
            <Alert show={showError} variant="danger" onClose={() => setShowError(false)} dismissible>
                <Alert.Heading>Message Not Sent!</Alert.Heading>
                <p>
                    Please try again later.
                </p>
            </Alert>
        </div>
    )
}
