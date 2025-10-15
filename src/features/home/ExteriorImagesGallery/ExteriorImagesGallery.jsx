import { useRouter } from 'next/router';
import en from '@locales/en';
import hr from '@locales/hr';
import ImageGallery from '../../../components/ImageGallery';

const ExteriorImagesGallery = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : hr;

  const exteriorImages = [
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702187/exterior/DJI_0363_eyqnuh.jpg',
      alt: 'Exterior view 1',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior4-image_cvvmpo.jpg',
      alt: 'Exterior view 2',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702145/exterior/exterior11-image_f7j2hu.jpg',
      alt: 'Exterior view 3',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702142/exterior/exterior8-image_a2hfty.jpg',
      alt: 'Exterior view 4',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702137/exterior/exterior16-image_b0qug0.jpg ',
      alt: 'Exterior view 5',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0365_bli0qr.jpg',
      alt: 'Drone view 2',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior7-image_oukkjg.jpg',
      alt: 'Exterior view 6',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior5-image_ph4ksj.jpg',
      alt: 'Exterior view 7',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior9-image_esoiya.jpg',
      alt: 'Exterior view 8',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702143/exterior/exterior10-image_wfnzg4.jpg',
      alt: 'Exterior view 9',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702142/exterior/exterior3-image_mnp0jn.jpg',
      alt: 'Exterior view 10',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702144/exterior/exterior12-image_ogvker.jpg',
      alt: 'Exterior view 11',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702147/exterior/exterior13-image_ay7pkg.jpg',
      alt: 'Exterior view 12',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702146/exterior/exterior14-image_da6ijw.jpg',
      alt: 'Exterior view 13',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior15-image_unyat4.jpg',
      alt: 'Exterior view 14',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior19-image_gbdirh.jpg',
      alt: 'Exterior view 15',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702139/exterior/exterior17-image_vljnra.jpg',
      alt: 'Exterior view 16',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior18-image_fi613x.jpg',
      alt: 'Exterior view 17',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702145/exterior/exterior6-image_hid7eo.jpg',
      alt: 'Exterior view 18',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702140/exterior/exterior20-image_xsoiyw.jpg',
      alt: 'Exterior view 19',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702138/exterior/exterior21-image_pazgkn.jpg',
      alt: 'Exterior view 20',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702139/exterior/exterior22-image_dlfhdw.jpg',
      alt: 'Exterior view 21',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702141/exterior/exterior2-image_vpmxap.jpg',
      alt: 'Drone view 8',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0356_qgqg2u.jpg',
      alt: 'Drone view 1',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702186/exterior/DJI_0357_mkzxrh.jpg',
      alt: 'Drone view 3',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702185/exterior/DJI_0359_oxlhdo.jpg',
      alt: 'Drone view 4',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702184/exterior/DJI_0364_dnq2hj.jpg',
      alt: 'Drone view 5',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702184/exterior/DJI_0360_bivaej.jpg',
      alt: 'Drone view 6',
    },
    {
      src: 'https://res.cloudinary.com/kristina1950/image/upload/v1659702183/exterior/DJI_0361_tfwlqg.jpg',
      alt: 'Drone view 7',
    },
  ];

  return (
    <ImageGallery
      id={t.exteriorHref}
      title={t.exteriorImageGalleryTitle}
      subTitle={t.exteriorImageGallerySubtitle}
      sectionName={t.exteriorImageGallerySectionName}
      imagesList={exteriorImages}
    />
  );
};

export default ExteriorImagesGallery;
