import "../styles/global.scss";
import AOS from "aos";

import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <Component {...pageProps} />;
}
