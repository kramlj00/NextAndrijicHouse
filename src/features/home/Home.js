import MainImage from '@components/MainImage';
import HomeCard from '@features/home/HomeCard';
import Amenities from './Amenities';
import ExteriorImagesGallery from './ExteriorImagesGallery';
import InteriorImagesGallery from './InteriorImagesGallery';
import Testimonials from '../../components/Testimonials';

const Home = () => {
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

      <HomeCard />
    </>
  );
};

export default Home;
