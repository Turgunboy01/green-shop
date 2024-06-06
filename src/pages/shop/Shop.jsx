import React from "react";
import { data } from "../../data";
import ShopCard from "../../components/shop/ShopCard";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="lg:container mx-auto px-5">
      <div className="flex gap-[6px] font-semibold">
        <Link to={"/"}>Home</Link>/
        <Link className="border-b text-[#46A358] border-b-[#46A358]">Shop</Link>
      </div>

      <div className="grid sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <ShopCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
