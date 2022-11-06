import { useRouter } from "next/router";
// import { NextSeo } from 'next-seo';
import MainImage from "../components/commons/MainImage";
import HomeCard from "../components/HomeCard";
import Layout, { siteTitle } from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";
import useSiteConfig from "../shared/hooks/useSiteConfig";

export default function Home() {
  const config = useSiteConfig();
  const router = useRouter();

  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout>
      {/* <NextSeo
        title={`${config.title}`}
      /> */}
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
