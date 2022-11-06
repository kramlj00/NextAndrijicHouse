import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import useSiteConfig from "../shared/hooks/useSiteConfig";
import MainImage from "../components/commons/MainImage";
import HomeCard from "../components/HomeCard";
import Layout from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";

export default function Home() {
  const config = useSiteConfig();
  const router = useRouter();

  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout>
      <NextSeo
        openGraph={{
          title: config.title,
          url: config.url,
          description: config.description,
        }}
      />
      <MainImage
        src="/images/home-image.webp"
        name="home.jpg"
        sayingFirstPart={t.homeSayingPartOne}
        sayingSecondPart={t.homeSayingPartTwo}
      />
      <HomeCard />
    </Layout>
  );
}
