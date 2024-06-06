import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import card1 from "../../../public/paypal.png";
import card2 from "../../../public/masterCard.png";
import card3 from "../../../public/vis.png";
import card4 from "../../../public/amera.png";
import { Link } from "react-router-dom";

const FooteLinks = () => {
  return (
    <div className="lg:container mx-auto bg-[#FBFBFB]  p-6  flex flex-col lg:flex-row  gap-6  ">
      <div className=" lg:flex-[.7] grid grid-cols-1 sm:grid-cols-3 gap-[30px] sm:gap-[100px]  ">
        <div className="flex flex-col w-[200px] ">
          <h2 className=" pb-2 text-[17px] font-bold">My Account</h2>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            My Account
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            Our stores
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px]">
            Contact us
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">Career</li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            {" "}
            Specials
          </li>
        </div>
        {/* <div className="w-[2px] h-[150px] bg-black"></div> */}
        <div className="flex flex-col  w-[200px] ">
          <h2 className=" pb-2 text-[17px] font-bold">Help & Guide</h2>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            Help Center{" "}
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            How to Buy
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px]">
            Shipping & Delivery
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            Product Policy
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            {" "}
            How to Return
          </li>
        </div>
        <div className="flex flex-col  w-[200px]">
          <h2 className=" pb-2 text-[17px] font-bold">Categories</h2>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            House Plants
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            Potter Plants
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px]">Seeds</li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            Small Seeds
          </li>
          <li className="text-[14px] text-[#727272] leading-[22px] ">
            Accessories
          </li>
        </div>
      </div>
      <div className="lg:flex-[.3] flex-1">
        <h2 className="text-[18px] font-bold text-[#3D3D3D] ">Social Media</h2>

        <div className="flex gap-[10px] pt-5">
          <Link
            target="__both"
            to={
              "https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfacebook%7C&placement=&creative=477437435741&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjwmYCzBhA6EiwAxFwfgEpYMlQKmp-f4DQhxuu-DALnn6bt3I4gwoZdbwzJTdDcehCltcU-9hoC7Z8QAvD_BwE"
            }
            className="w-[30px] h-[30px] rounded-[6px] border-[#46A35833] border flex justify-center items-center text-[#46A35899]"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={"https://www.instagram.com/accounts/login/"}
            target="__both"
            className="w-[30px] h-[30px] rounded-[6px] border-[#46A35833] border flex justify-center items-center text-[#46A35899]"
          >
            <FaInstagram />
          </Link>
          <Link
            to={"https://x.com/i/flow/login"}
            target="__both"
            className="w-[30px] h-[30px] rounded-[6px] border-[#46A35833] border flex justify-center items-center text-[#46A35899]"
          >
            <FaTwitter />
          </Link>
          <Link
            to={"https://www.linkedin.com/login/ru"}
            target="__both"
            className="w-[30px] h-[30px] rounded-[6px] border-[#46A35833] border flex justify-center items-center text-[#46A35899]"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to={"https://www.youtube.com/account"}
            target="__both"
            className="w-[30px] h-[30px] rounded-[6px] border-[#46A35833] border flex justify-center items-center text-[#46A35899]"
          >
            <FaYoutube />
          </Link>
        </div>
        <h2 className="text-[18px] font-bold pt-[30px] pb-3 text-[#3D3D3D] ">
          We accept
        </h2>
        <div className="flex gap-3">
          <img src={card1} alt="" className="w-[80px] h-[25px] object-cover" />
          <img
            src={card2}
            alt=""
            className="w-[50px] h-[25px] object-contain "
          />
          <img src={card3} alt="" className="w-[80px] h-[25px] object-cover" />
          <img
            src={card4}
            alt=""
            className="w-[60px] h-[25px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FooteLinks;
