import Image from "next/image";
import Link from "next/link";
import Contact from "../../components/contact";
import Layout from "../../components/layout";
import Particles from "../../components/particles";
import WorkNumbers from "../../components/workNumbers";
import styles from "../../styles/about.module.scss";

export default function index() {
    return (
        <Layout>
            <main className={styles.about} >
            <Particles color={"rgba(241, 198, 68, 0.6)"} height="50vw" width="150vw" top="15vh" left="80vw" blur='10vw' />
            <Particles color={"#A3DCFF"} height="50vw" width="150vw" top="400vh" left="-120vw" blur='10vw' />
            <Particles color={"rgba(187, 128, 255, 0.6)"} height="50vw" width="150vw" top="500vh" left="80vw" blur='10vw' />

                <section className={styles.section1} >
                    <div>
                        <h4>About Us</h4>
                        <h1> <span> <div className={styles.background}></div> Unique</span> Business Ideas for your Digital Business</h1>
                        <p>Our team has strong end to end capabilities across Creatives, Artworks & Graphics, Packaging Development, Value improvement, Sourcing Excellence & Operational excellence, which makes it easier for us to address our clients’ diverse demands. Starting from ideation, product research, development, design, feasibility, supply chain management and execution, our team assist our clients at every step</p>
                        <button>View our work</button>
                    </div>
                    <div>
                        <Image src={"/assets/images/about/about (1).png"} alt="coffe" width={1000} height={1000} />
                    </div>
                </section>
                <section className={styles.section2} >
                    <div className={styles.img_holder} >
                        <Image src={"/assets/images/about/about (2).png"} alt="coffe" width={1000} height={1000} />
                        <Image src={"/assets/images/about/about (3).png"} alt="coffe" width={1000} height={1000} />
                    </div>
                    <div>
                        <h4>Why Us</h4>
                        <h1> <span>Unique</span> Business Ideas for your Digital Business</h1>
                        <p>With innovation and expertise at heart and equipped with the best of capabilities, we make sure that our clients are offered the best of the best. Our unique approach in spheres of creation, development and execution makes us the best at what we do.</p>
                    </div>

                </section>
                <section className={styles.section3}>
                    <h4>Stake Holders and Top Management</h4>
                    <h1> Meet our <span>stakeholders</span> and Top Management</h1>
                    <div className={styles.content} >
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (4).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Ulrich Reifenhäuser</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (5).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Manish Mehta</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (6).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Amitav Ray</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (7).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Nippon Paper Industries</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>

                            </div>
                        </div>
                        <div className={styles.LinkedinImage} >
                            <Image src={"/assets/images/about/about (8).png"} alt="coffe" width={1000} height={1000} />
                            <div className={styles.NameLink} >
                                <h3>Esq. Suresh Gupta</h3>
                                <Link href={"linkedin.com"} >Linkedin <span><Image src={"/assets/images/about/about (9).png"} width={1000} height={1000} alt="arrow" /></span> </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <WorkNumbers />
            <Contact />
        </Layout>
    )
}
