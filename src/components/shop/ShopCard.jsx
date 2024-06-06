import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CardSlice";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const ShopCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    let totalPrice = 1 * product.price;
    const tempProduct = {
      ...product,
      quantity: 1,
      totalPrice,
    };
    dispatch(addToCart(tempProduct));
  };
  return (
    <div>
        
      <div className=" rounded  group m-4 ">
        <div className="bg-[#FBFBFB] relative overflow-hidden group-hover:border-t-[2px] border-t-[2px] border-t-[#4440] group-hover:border-t-[#46a359a1] ">
          <img
            className="w-full h-[100%] sm:h-[330px] object-cover sm:object-contain  group-hover:opacity-40"
            src={item.img}
            alt={item.name}
          />
          <div className=" absolute w-[100px] sm:w-[160px] -bottom-[20px] group-hover:bottom-[40px] transition-all duration-300 left-[30%]   h-[20px] flex gap-[10px]">
            <div
              className="hover:bg-[#fff] w-[100px] h-10 flex justify-center rounded-lg items-center hover:text-[#46A358]"
              onClick={() => handleAddToCart(item)}
            >
              <SlBasket size={20} />
            </div>
            <div className="hover:bg-[#fff] w-[100px] h-10 flex justify-center rounded-lg items-center hover:text-[#46A358]">
              <FaRegHeart size={20} />
            </div>
            <Link
              to={`/shop/product/${item.id}`}
              className="hover:bg-[#fff] w-[100px] h-10 flex justify-center rounded-lg items-center hover:text-[#46A358]"
            >
              <IoSearch size={20} />
            </Link>
          </div>
        </div>
        <div className=" pt-2">
          <div className=" text-xl ">{item.name}</div>
          <p className="text-[#46A358] text-base font-semibold">
            ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
