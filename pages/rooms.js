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

  const roomsImages = [
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room2-image_f63dok.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room3-image_so8ux6.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room4-image_fi4i61.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room5-image_xh4qzi.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room6-image_n64brb.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room7-image_j20mdd.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room8-image_etw1z2.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room9-image_o2rrbv.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room10-image_hvvxpa.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room11-image_sruv2w.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room12-image_wc5o37.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room13-image_hvz6ra.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room14-image_lbjdab.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room15-image_fqgu9g.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room16-image_hl360g.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room17-image_ir36t2.jpg",
    "https://res.cloudinary.com/kristina1950/image/upload/v1659702043/rooms/room18-image_lbt6nf.jpg",
  ];

  return (
    <Layout activeTab={t.rooms}>
      <MainImage
        src="/images/room-image.webp"
        name="room.jpg"
        sayingFirstPart={t.roomsSayingPartOne}
        sayingSecondPart={t.roomsSayingPartTwo}
      />
      <ImageGallery imageList={roomsImages} />
    </Layout>
  );
}
