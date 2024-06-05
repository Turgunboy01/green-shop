import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../../../public/slider.png";
import bgImg from "../../../public/sliderBg.png";
import { FaArrowRight } from "react-icons/fa";
var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 3000,
  cssEase: "linear",
};

const HomeCarousel = () => {
  return (
    <div className="lg:container sm:mx-auto mx-5 px-5 bg-[#F5F5F5] rounded-[30px] sm:rounded-[0] homeSlide">
      <Slider {...settings}>
        <div>
          <div className="flex  items-center gap-[40px] relative md:gap-[100px] py-8   w-full ">
            <div className=" text-left z-50">
              <h2 className="text-[12px] sm:text-[14px]  text-gray-500 font-medium">
                WELCOME TO GREENSHOP
              </h2>
              <h1 className="text-[24px] sm:text-[30px] md:text-[40px]  xl:text-[70px] font-bold text-gray-800">
                LET’S MAKE A BETTER{" "}
                <span className="text-[#46A358]"> PLANET</span>{" "}
              </h1>
              <p className="text-gray-600 text-[13px]  sm:text-[15px] mt-4">
                We are an online plant shop offering a wide range{" "}
                <span className="sm:block hidden">
                  {" "}
                  of cheap and trendy plants. Use our plants to create a unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <button className="mt-6 text-[14px] hidden sm:block font-bold md:text-[16px] bg-[#46A358] text-white px-3 md:px-6 py-3 rounded-full shadow hover:bg-[#46A358] transition duration-200">
                SHOP NOW
              </button>
              <button className="sm:hidden  flex items-center gap-3 font-bold text-[12px] mt-6 text-[#46A358] ">
                Shop now <FaArrowRight />
              </button>
            </div>
            <div className=" mt-0 flex sm:relative absolute bottom-5 right-0 z-20 justify-center items-end">
              <img
                src={sliderImg1}
                alt="Plant"
                className=" w-[200px] sm:w-[600px] object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex  items-center gap-[40px] relative md:gap-[100px] py-8   w-full ">
            <div className=" text-left z-50">
              <h2 className="text-[12px] sm:text-[14px]  text-gray-500 font-medium">
                WELCOME TO GREENSHOP
              </h2>
              <h1 className="text-[24px] sm:text-[30px] md:text-[40px]  xl:text-[70px] font-bold text-gray-800">
                LET’S MAKE A BETTER{" "}
                <span className="text-[#46A358]"> PLANET</span>{" "}
              </h1>
              <p className="text-gray-600 text-[13px]  sm:text-[15px] mt-4">
                We are an online plant shop offering a wide range{" "}
                <span className="sm:block hidden">
                  {" "}
                  of cheap and trendy plants. Use our plants to create a unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <button className="mt-6 text-[14px] hidden sm:block font-bold md:text-[16px] bg-[#46A358] text-white px-3 md:px-6 py-3 rounded-full shadow hover:bg-[#46A358] transition duration-200">
                SHOP NOW
              </button>
              <button className="sm:hidden  flex items-center gap-3 font-bold text-[12px] mt-6 text-[#46A358] ">
                Shop now <FaArrowRight />
              </button>
            </div>
            <div className=" mt-0 flex sm:relative absolute bottom-5 right-0 z-20 justify-center items-end">
              <img
                src={sliderImg1}
                alt="Plant"
                className=" w-[200px] sm:w-[600px] object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex  items-center gap-[40px] relative md:gap-[100px] py-8   w-full ">
            <div className=" text-left z-50">
              <h2 className="text-[12px] sm:text-[14px]  text-gray-500 font-medium">
                WELCOME TO GREENSHOP
              </h2>
              <h1 className="text-[24px] sm:text-[30px] md:text-[40px]  xl:text-[70px] font-bold text-gray-800">
                LET’S MAKE A BETTER{" "}
                <span className="text-[#46A358]"> PLANET</span>{" "}
              </h1>
              <p className="text-gray-600 text-[13px]  sm:text-[15px] mt-4">
                We are an online plant shop offering a wide range{" "}
                <span className="sm:block hidden">
                  {" "}
                  of cheap and trendy plants. Use our plants to create a unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <button className="mt-6 text-[14px] hidden sm:block font-bold md:text-[16px] bg-[#46A358] text-white px-3 md:px-6 py-3 rounded-full shadow hover:bg-[#46A358] transition duration-200">
                SHOP NOW
              </button>
              <button className="sm:hidden  flex items-center gap-3 font-bold text-[12px] mt-6 text-[#46A358] ">
                Shop now <FaArrowRight />
              </button>
            </div>
            <div className=" mt-0 flex sm:relative absolute bottom-5 right-0 z-20 justify-center items-end">
              <img
                src={sliderImg1}
                alt="Plant"
                className=" w-[200px] sm:w-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
