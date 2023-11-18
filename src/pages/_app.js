import "@styles/global.scss";
import AOS from "aos";
import { DefaultSeo } from 'next-seo';

import "aos/dist/aos.css";
import { useEffect } from "react";
import useSiteConfig from "../shared/hooks/useSiteConfig";

export default function App({ Component, pageProps }) {
  const siteConfig = useSiteConfig();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return <>
    <DefaultSeo
      title={siteConfig.title}
      description={siteConfig.description}
      openGraph={{
        site_name: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: siteConfig.title,
          },
        ],
      }}
    />
    <Component {...pageProps} />
  </>;
}
