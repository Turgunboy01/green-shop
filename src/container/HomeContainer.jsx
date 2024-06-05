import React from "react";
import ProductCards from "../components/home/ProductCards";
import FindCards from "../components/home/FindCards";
import OurPosts from "../components/home/OurPosts";
import HomeCarousel from "../components/home/HomeCarousel";

const HomeContainer = () => {
  return (
    <div>
      <HomeCarousel />
      <ProductCards />
      <FindCards />
      <OurPosts />
    </div>
  );
};

export default HomeContainer;
