import '../styles/global.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
    const cursor = document.querySelector("#cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";
    });
  }, []);

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous"></link>
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"

      />
      <div id="cursor" >
        <span id="cursorSpan"></span>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
