import MainImage from '@components/MainImage';
import HomeCard from '@features/home/HomeCard';
import Amenities from './Amenities';
import ExteriorImagesGallery from './ExteriorImagesGallery';
import InteriorImagesGallery from './InteriorImagesGallery';

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
      <HomeCard />
    </>
  );
};

export default Home;
