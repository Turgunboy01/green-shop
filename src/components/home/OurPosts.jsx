import React from "react";
import ProductCard from "./ProductCard";
import OurPostCard from "./OurPostCard";
import { posts } from "../../data";

const OurPosts = () => {
  return (
    <div className="lg:container mx-auto px-5 mb-24">
      <div className="flex justify-center items-center flex-col pt-[100px]">
        <h1 className="text-[30px] font-bold text-[#3D3D3D]">Our Blog Posts</h1>
        <p className="text-[#727272] text-[14px] font-normal leading-6 md:w-[38%] w-full text-center">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>
      <div className="sm:grid flex flex-col  justify-center items-center  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 pt-5">
        {posts.map((item) => (
          <OurPostCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default OurPosts;
