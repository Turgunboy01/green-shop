import React from "react";
import Slider from "react-slick";
import { data } from "../../data";
import ProductCard from "../home/ProductCard";
import PopularCart from "./PopularCart";
var settings = {
  dots: true,
  infinite: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "linear",
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PopularProducts = () => {
  return (
    <div className="lg:container mx-auto ">
      <h3 className="text-[20px] font-bold text-[#46A358] pb-2">
        Releted Products
      </h3>
      <hr className="bg-[#46A35880]" />
      <Slider {...settings}>
        {data.slice(0, 8).map((item) => (
          <PopularCart item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default PopularProducts;
