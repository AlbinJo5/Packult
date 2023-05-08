import { Timestamp } from "firebase/firestore";
import Layout from "../../components/layout";
import Particles from "../../components/particles";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/contact-us.module.scss";
import { useRef, useState } from "react";
import { uploadData } from "../../utils/firebase_data_handler";

function Index() {
  const [loading, setLoading] = useState(false);

  //   const [show, setShow] = useState(false);
  //   const [showError, setShowError] = useState(false);
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
    alert("Submitted");
    const data = {
      name: name,
      email: email,
      number: number,
      message: message,
      date: currentDateTime,
    };
    uploadData(data, `contacts`).then(() => alert("Added"), setLoading(false));
  };

  return (
    <Layout
      pageMeta={{
        description:
          "We are always ready to answer any questions that interests you. Shoot!",
      }}
    >
      <div className={styles.lap_particles}>
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="-15vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="20vw"
          left="-140vw"
          blur="10vw"
        />
      </div>
      <div className={styles.tablet_particles}>
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="-15vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="20vw"
          left="-140vw"
          blur="10vw"
        />
      </div>
      <div className={styles.mobile_particles}>
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="-15vw"
          left="90vw"
          blur="10vw"
        />
        <Particles
          color={"#B3E2FF"}
          height="50vw"
          width="150vw"
          top="50vw"
          left="-140vw"
          blur="10vw"
        />
      </div>
      <div className={styles.contact_us}>
        <div className={styles.content}>
          <div className={styles.left}>
            <form onSubmit={handleSubmit}>
              <input
                ref={name}
                type="text"
                name="name"
                placeholder="Your Name*"
                required={true}
              />
              <input
                ref={email}
                type="email"
                name="email"
                placeholder="Email Address*"
                required={true}
              />
              <input
                ref={number}
                type="number"
                name="phone"
                placeholder="Phone Number"
              />
              <textarea
                ref={message}
                name="queries"
                placeholder="Share your thoughts or Queries"
                required={true}
              />
              <button onClick={handleSubmit} type="submit">
                SUBMIT
              </button>
            </form>
          </div>
          <div className={styles.right}>
            <h1 data-aos="fade-left">Contact</h1>
            <h2>
              <span>
                <hr />
              </span>
              Us
            </h2>
            <p>
              We are always ready to answer any questions that interests you.
              Shoot!
            </p>
          </div>
        </div>
        <WorkNumbers />
      </div>
    </Layout>
  );
}

export default Index;
