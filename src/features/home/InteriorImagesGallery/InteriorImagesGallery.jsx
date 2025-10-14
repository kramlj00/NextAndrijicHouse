import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';
import ImageGallery from '../../../components/ImageGallery';

const InteriorImagesGallery = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const interiorImages = [
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room2-image_f63dok.jpg',
      alt: 'Interior image 1',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room3-image_so8ux6.jpg',
      alt: 'Interior image 2',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room4-image_fi4i61.jpg',
      alt: 'Interior image 3',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room5-image_xh4qzi.jpg',
      alt: 'Interior image 4',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room6-image_n64brb.jpg',
      alt: 'Interior image 5',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702040/rooms/room7-image_j20mdd.jpg',
      alt: 'Interior image 6',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room8-image_etw1z2.jpg',
      alt: 'Interior image 7',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room9-image_o2rrbv.jpg',
      alt: 'Interior image 8',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room10-image_hvvxpa.jpg',
      alt: 'Interior image 9',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702041/rooms/room11-image_sruv2w.jpg',
      alt: 'Interior image 10',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room12-image_wc5o37.jpg',
      alt: 'Interior image 11',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room13-image_hvz6ra.jpg',
      alt: 'Interior image 12',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room14-image_lbjdab.jpg',
      alt: 'Interior image 13',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room15-image_fqgu9g.jpg',
      alt: 'Interior image 14',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room16-image_hl360g.jpg',
      alt: 'Interior image 15',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702042/rooms/room17-image_ir36t2.jpg',
      alt: 'Interior image 16',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702043/rooms/room18-image_lbt6nf.jpg',
      alt: 'Interior image 17',
    },
  ];

  return (
    <ImageGallery
      id={t.interiorHref}
      title={t.interiorImageGalleryTitle}
      subTitle={t.interiorImageGallerySubtitle}
      sectionName={t.interiorImageGallerySectionName}
      imagesList={interiorImages}
    />
  );
};

export default InteriorImagesGallery;
