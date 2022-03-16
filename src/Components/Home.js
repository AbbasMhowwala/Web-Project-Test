import React from "react";
import Slider from "./Home/Slider";
import "./Assets/Css/Home.css";
import { Helmet } from "react-helmet";
import Collection from "./Home/Collection";
import ShopDiamond from "./Home/ShopDiamonds";

const Home = () => {
  return (
    <div className="bw-home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Belgium Webnet- Making these Extraordinary Diamonds Attainable</title>
        <meta name="description" content="Specializing in fancy color diamonds including; pink, yellow, blue, green, orange, purple, and white diamonds. Colored diamond jewelry. Offering a luxury experience to clients worldwide." />
      </Helmet>
      <Slider />
      <Collection />
      <ShopDiamond /> 
    </div>
  );
};

export default Home;
