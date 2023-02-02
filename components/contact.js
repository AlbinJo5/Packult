import { useRef } from "react"
import styles from "../styles/components/contact.module.scss"
import Image from "next/image";

export default function Contact() {

    const name = useRef();
    const email = useRef();
    const number = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name.current.value);
        console.log(email.current.value);
        console.log(number.current.value);
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
                        <input type="number" ref={number} placeholder="Phone number*" required={true} />
                        <button type="submit" >Submit</button>
                    </form>
                </div>
                <Image data-aos="fade-up" data-aos-offset="-500" src="/assets/images/components/contactPerson.svg" height={100} width={100} alt={"Contact Person"} />
            </div>
        </div>
    )
}
