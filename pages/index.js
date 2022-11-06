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
    <Layout activeTab={siteTitle}>
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
