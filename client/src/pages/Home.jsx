import BestSellers from "../components/BestSellers";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSellers/>
    </div>
  );
};

export default Home;
