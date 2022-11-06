import Layout from "../layout/layout";
import MainImage from "../components/commons/MainImage";
import ImageGallery from "../components/commons/ImageGallery";
import en from "../locales/en";
import hr from "../locales/hr";
import { useRouter } from "next/router";

export default function Rooms() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const exteriorImages = [
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702141/exterior/exterior2-image_vpmxap.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702142/exterior/exterior3-image_mnp0jn.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior4-image_cvvmpo.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior5-image_ph4ksj.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702145/exterior/exterior6-image_hid7eo.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior7-image_oukkjg.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702142/exterior/exterior8-image_a2hfty.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior9-image_esoiya.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior10-image_wfnzg4.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702145/exterior/exterior11-image_f7j2hu.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702144/exterior/exterior12-image_ogvker.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702147/exterior/exterior13-image_ay7pkg.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702146/exterior/exterior14-image_da6ijw.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior15-image_unyat4.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702137/exterior/exterior16-image_b0qug0.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702139/exterior/exterior17-image_vljnra.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior18-image_fi613x.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior19-image_gbdirh.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior20-image_xsoiyw.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior21-image_pazgkn.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702139/exterior/exterior22-image_dlfhdw.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0356_qgqg2u.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0365_bli0qr.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0357_mkzxrh.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702185/exterior/DJI_0359_oxlhdo.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702184/exterior/DJI_0364_dnq2hj.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702184/exterior/DJI_0360_bivaej.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702183/exterior/DJI_0361_tfwlqg.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702187/exterior/DJI_0363_eyqnuh.jpg",
  ];

  return (
    <Layout activeTab={t.exterior}>
      <MainImage
        src="/images/exterior-image.webp"
        name="exterior.jpg"
        sayingFirstPart={t.exteriorSayingPartOne}
        sayingSecondPart={t.exteriorSayingPartTwo}
      />
      <ImageGallery imageList={exteriorImages} />
    </Layout>
  );
}
