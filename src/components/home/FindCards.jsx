import React from "react";
import find1 from "../../../public/cardImg1.png";
import find2 from "../../../public/cardImg2.png";
import ellips from "../../../public/ellipse.png";
import { FaArrowRight } from "react-icons/fa";
const FindCards = () => {
  return (
    <div className="lg:container mx-auto px-5 flex my-[8rem]   xl:flex-nowrap flex-wrap  justify-between items-center  gap-[60px]">
      <div className="relative w-full overflow-hidden flex flex-wrap sm:flex-nowrap items-center mx-auto bg-[#FBFBFB] p-[30px]">
        <img src={find1} alt="" className="mx-auto" />
        <img
          src={ellips}
          alt=""
          className="absolute -bottom-[140px] -left-[200px]"
        />{" "}
        <img
          src={ellips}
          alt=""
          className="absolute -bottom-[150px] -left-[195px]"
        />
        <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-end ">
          <h1 className="text-[25px] font-bold text-[#333]">
            SUMMER CACTUS <br /> & SUCCULENTS
          </h1>
          <p className="w-[90%] text-[#333] text-[18px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <div className="">
            <button className="flex items-center gap-1 py-2 px-5 text-[#fff] rounded-[6px] bg-[#46A358]">
              Find More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden flex flex-wrap sm:flex-nowrap items-center mx-auto bg-[#FBFBFB] p-[30px] ">
        <img src={find2} alt="" className="mx-auto" />
        <img
          src={ellips}
          alt=""
          className="absolute -bottom-[140px] -left-[200px]"
        />{" "}
        <img
          src={ellips}
          alt=""
          className="absolute -bottom-[150px] -left-[195px]"
        />
        <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-end ">
          <h1 className="text-[25px] font-bold text-[#333]">
            SUMMER CACTUS <br /> & SUCCULENTS
          </h1>
          <p className="w-[90%] text-[#333] text-[18px]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants
          </p>
          <div className="">
            <button className="flex items-center gap-1 py-2 px-5 text-[#fff] rounded-[6px] bg-[#46A358]">
              Find More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCards;
