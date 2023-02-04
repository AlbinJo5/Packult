import '../styles/global.scss'
import AOS from "aos";
import "aos/dist/aos.css";
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
      <div id="cursor" >
        <span id="cursorSpan"></span>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
