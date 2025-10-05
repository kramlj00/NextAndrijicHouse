import MainImage from '@components/MainImage';
import HomeCard from '@features/home/HomeCard';
import Amenities from './Amenities';
import ExteriorImagesGallery from './ExteriorImagesGallery';

const Home = () => {
  return (
    <>
      <MainImage
        src="/images/exterior-image.webp"
        name="home.jpg"
      />
      <Amenities />
      <ExteriorImagesGallery />
      <HomeCard />
    </>
  );
};

export default Home;
