import React from "react";
import img1 from "../../../public/footerimg1.png";
import img2 from "../../../public/footerimg2.png";
import ellipse from "../../../public/ellipse2.png";
import { FaSearch } from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className="lg:container mx-auto bg-[#FBFBFB]  p-6 flex items-center flex-wrap gap-6  ">
      <div className=" lg:flex-[.7] flex  gap-[50px] px-[30px] flex-wrap md:flex-nowrap">
        <div className="flex flex-col md:border-r ">
          <div className="relative ">
            <img src={img1} alt="" className="ml-4" />
            <img src={ellipse} alt="" className="absolute -bottom-1 left-0" />
          </div>
          <h2 className="pt-[15px] pb-2 text-[17px] font-bold">
            Watering Graden
          </h2>
          <p className="text-[14px] text-[#727272] leading-[22px] md:w-[70%]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col md:border-r ">
          <div className="relative ">
            <img src={img1} alt="" className="ml-4" />
            <img src={ellipse} alt="" className="absolute -bottom-1 left-0" />
          </div>
          <h2 className="pt-[15px] pb-2 text-[17px] font-bold">
            Watering Graden
          </h2>
          <p className="text-[14px] text-[#727272] leading-[22px] md:w-[70%]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="flex flex-col ">
          <div className="relative ">
            <img src={img2} alt="" className="ml-4" />
            <img src={ellipse} alt="" className="absolute -bottom-1 left-0" />
          </div>
          <h2 className="pt-[15px] pb-2 text-[17px] font-bold">
            Watering Graden
          </h2>
          <p className="text-[14px] text-[#727272] leading-[22px] md:w-[70%]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
      </div>
      <div className="lg:flex-[.3] flex-1">
        <h2 className="text-[18px] font-bold text-[#3D3D3D]">
          Would you like to join newsletters?
        </h2>
        <div className="bg-white flex rounded-[6px] overflow-hidden my-[17px]">
          <input
            type="text"
            className="outline-none border-0 bg-transparent w-full p-[12px]"
            placeholder="enter your email address..."
          />
          <button className="py-3 px-6 bg-[#46A358] font-bold text-white">
            Join
          </button>
        </div>
        <p className="text-[#727272] text-[13px]">
          We usually post offers and challenges in newsletter. We’re your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!{" "}
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
