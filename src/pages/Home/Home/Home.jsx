import PopularMenu from "../PopularMenu/PopularMenu";
import Category from "../Category/Category";
import Banner from "./Banner/Banner";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import ChefService from "../ChefService/ChefService";
import CallUs from "../CallUs/CallUs";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <CallUs />
      <ChefRecommends />
      {/* <Featured /> */}
      {/* <Testimonials /> */}
    </div>
  );
};

export default Home;
