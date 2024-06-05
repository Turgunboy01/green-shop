import React from "react";

// import img1 from "../../public/01.png";
const OurPostCard = ({ item }) => {
  const { title, img, name, desc } = item;
  return (
    <div className="max-w-sm rounded overflow-hidden bg-[#FBFBFB]  m-4">
      <img className="w-full" src={img} alt="Plants" />
      <div className="px-6 py-4">
        <div className="text-green-600 text-sm mb-2">{title}</div>
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 py-4">
        <a href="#" className="hover:text-green-500 hover:underline">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default OurPostCard;
