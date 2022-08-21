import Head from "next/head";
import { useRouter } from "next/router";
import MainImage from "../components/commons/MainImage";
import HomeCard from "../components/HomeCard";
import Layout, { siteTitle } from "../layout/layout";
import en from "../locales/en";
import hr from "../locales/hr";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="TWpe2aeZnD_aC8cZiU0xXXfD_CAnbcjHPX7ajgdq-Lw"
        />
        <title>{siteTitle}</title>
      </Head>
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
