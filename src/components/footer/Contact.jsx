import React from "react";
import logo from "../../../public/logo.png";
import img1 from "../../../public/location.png";
import img2 from "../../../public/message.png";
import img3 from "../../../public/call.png";
// import logo from "../../../public/logo.png";
const Contact = () => {
  return (
    <div className="lg:container mx-auto p-5 py-7 grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-[30px] lg:gap-[70px]  bg-[#46a35925]">
      <li>
        <img src={logo} alt="" />
      </li>
      <li className="flex items-center gap-[10px] ">
        <img src={img1} alt="" className="w-[20px] h-5" />
        <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
      </li>
      <li className="flex items-center gap-[10px]">
        <img src={img2} alt="" className="w-[20px] h-5" />
        <p>contact@greenshop.com</p>
      </li>
      <li className="flex items-center gap-[10px]">
        <img src={img3} alt="" className="w-[20px] h-5" />
        <p>+88 01911 717 490</p>
      </li>
    </div>
  );
};

export default Contact;
