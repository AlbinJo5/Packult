import '../styles/global.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
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
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
