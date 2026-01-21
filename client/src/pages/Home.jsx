import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers/>
      <OurPolicy/>
    </div>
  );
};

export default Home;
