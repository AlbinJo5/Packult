import { useRef, useState } from "react";
import styles from "../styles/components/contact.module.scss";
import Image from "next/image";
import { uploadData } from "../utils/firebase_data_handler";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitText, setSubmitText] = useState("Submit");
  const name = useRef();
  const email = useRef();
  const number = useRef();
  const message = useRef();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // months start at 0, so add 1 to get the current month
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitText("Submitting...");
    const data = {
      name: name,
      email: email,
      number: number,
      message: message,
      date: currentDateTime,
    };
    uploadData(data, `contacts`).then(
      () => setSubmitText("Submitted"),
      setLoading(false)
      // props.onHide()
    );
  };

  return (
    <div className={styles.contact}>
      <h1>Have a project in mind?</h1>
      <div className={styles.formContainer}>
        <div>
          <h4>Contact Us!</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={name}
              placeholder="Your name*"
              required={true}
            />
            <input
              type="email"
              ref={email}
              placeholder="Email address*"
              required={true}
            />
            <input
              type="number"
              ref={number}
              placeholder="Phone number (optional)"
            />
            <textarea ref={message} placeholder="Your message*" />
            <button type="submit" required={true}>
              {submitText}
            </button>
          </form>
        </div>
        <Image
          data-aos="fade-up"
          data-aos-offset="-500"
          src="/assets/images/components/contactPerson.svg"
          height={100}
          width={100}
          alt={"Contact Person"}
        />
      </div>
    </div>
  );
}
