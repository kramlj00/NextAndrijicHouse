import MainImage from '@components/MainImage';
import Amenities from './Amenities';
import ExteriorImagesGallery from './ExteriorImagesGallery';
import InteriorImagesGallery from './InteriorImagesGallery';
import Testimonials from '../../components/Testimonials';
import Location from '../../components/Location';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;

      const lenis = new Lenis({
        autoRaf: true,
      });

      return () => {
        lenis.destroy();
      };
    };

    initLenis();
  }, []);

  return (
    <>
      <MainImage
        src="/images/exterior-image.webp"
        name="home.jpg"
      />
      <Amenities />
      <ExteriorImagesGallery />
      <InteriorImagesGallery />
      <Testimonials />
      <Location />
    </>
  );
};

export default Home;
