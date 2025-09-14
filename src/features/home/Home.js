import MainImage from '@components/MainImage';
import HomeCard from '@features/home/HomeCard';

const Home = () => {
  return (
    <>
      <MainImage
        src="/images/exterior-image.webp"
        name="home.jpg"
      />
      <HomeCard />
    </>
  );
};

export default Home;
