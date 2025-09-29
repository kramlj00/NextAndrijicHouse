import MainImage from '@components/MainImage';
import HomeCard from '@features/home/HomeCard';
import Amenities from './Amenities';

const Home = () => {
  return (
    <>
      <MainImage
        src="/images/exterior-image.webp"
        name="home.jpg"
      />
      <Amenities />
      <HomeCard />
    </>
  );
};

export default Home;
