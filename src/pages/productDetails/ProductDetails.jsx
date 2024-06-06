import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";
import PopularProducts from "../../components/popularProducts/PopularProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CardSlice";
import { Rating } from "@mui/material";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id == id);
  // console.log(product);
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const [qty, setQty] = useState(1);
  const num = Math.random().toFixed(1) * 10;
  console.log(num);
  const handleAddToCart = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };
    console.log(totalPrice);
    dispatch(addToCart(tempProduct));
  };
  const plusQty = (qty) => {
    setQty(qty + 1);
  };
  const minusQty = (qty) => {
    setQty(qty - 1);
  };
  const handleImg = (item) => {
    navigate(`/shop/product/${item.id}`);
  };

  return (
    <div className="lg:container mx-auto px-5 overflow-x-hidden ">
      <div className="flex gap-[6px]">
        <Link to={"/"}>Home</Link>/<Link to={"/shop"}>Shop</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="hidden sm:flex flex-row-reverse md:flex-col gap-2">
            {data.slice(num, num + 4).map((item) => (
              <div onClick={() => handleImg(item)}>
                <img
                  src={item.img}
                  className="w-[80px] cursor-pointer md:w-[100px] h-[80px] md:h-[100px]"
                  alt=""
                />
              </div>
            ))}
          </div>
          <img
            src={product.img}
            alt=""
            className="w-[450px] md:w-[300px] lg:w-[400px] h-[500px] object-contain"
          />
        </div>
        <div className=" mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className=" md:p-8">
              <div className="uppercase tracking-wide text-[28px]  text-[#3D3D3D] font-bold">
                {product.name}
              </div>
              <div className="flex justify-between items-center">
                <p className="mt-2 text-[22px] text-[#46A358] font-bold">
                  ${product.price}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-yellow-400  ">
                    {/* {Array(product.rating).fill().map((_,i)=>(<p>★</p>))} */}
                    <Rating name="no-value" value={product.rating} />
                  </span>
                  <span className="text-gray-600">
                    {" "}
                    {product.review} Customer Review
                  </span>
                </div>
              </div>
              <p className="mt-4 text-gray-500">
                The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground. The ceramic cylinder
                planters come with a wooden stand to help elevate your plants
                off the ground.
              </p>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Size:
                </label>
                <div className="mt-1 flex space-x-3">
                  <button
                    className={`px-3 py-1 border rounded-full text-gray-700 ${
                      product.size == "s"
                        ? "border-[#46A358] bg-green-100"
                        : "border-gray-300"
                    }  `}
                  >
                    S
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-full text-gray-700 ${
                      product.size == "m"
                        ? "border-[#46A358] bg-green-100"
                        : "border-gray-300"
                    }  `}
                  >
                    M
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-full text-gray-700 ${
                      product.size == "l"
                        ? "border-green-500 bg-green-100"
                        : "border-gray-300"
                    }  `}
                  >
                    L
                  </button>
                  <button
                    className={`px-3 py-1 border rounded-full text-gray-700 ${
                      product.size == "xl"
                        ? "border-[#46A358] bg-green-100"
                        : "border-gray-300"
                    }  `}
                  >
                    XL
                  </button>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <button
                  className="bg-[#F6F6F6] sm:bg-[#46A358] text-[#A5A5A5] sm:text-white  w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                  // onClick={() => decreaseQty(item.id, item.quantity)}
                  onClick={() => minusQty(qty)}
                >
                  -
                </button>
                <span className="mx-2">{qty}</span>
                <button
                  className="bg-[#F6F6F6] sm:bg-[#46A358] text-[#A5A5A5] sm:text-white w-8 h-8 flex items-center justify-center rounded-full focus:outline-none"
                  // onClick={() => increaseQty(item.id, item.quantity)}
                  onClick={() => plusQty(qty)}
                >
                  +
                </button>

                <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md">
                  BUY NOW
                </button>
                <button
                  className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md"
                  onClick={() => handleAddToCart(product)}
                >
                  ADD TO CART
                </button>
                <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-md">
                  ❤️
                </button>
              </div>
              <div className="mt-4">
                <p className="text-[#727272]">
                  <span className="text-[#A5A5A5]">SKU</span>: 1995751877966
                </p>
                <p className="text-[#727272]">
                  <span className="text-[#A5A5A5]">Categories:</span> Potter
                  Plants
                </p>
                <p className="text-[#727272]">
                  <span className="text-[#A5A5A5]">Tags:</span> Home, Garden,
                  Plants
                </p>
              </div>
              <div className="mt-4 flex space-x-3 text-[#3D3D3D] items-center font-medium">
                <h3>Share this products:</h3>
                <div className="flex">
                  <button className="px-3 py-2  text-gray-700 text-sm font-medium rounded-md">
                    <FaFacebookF size={15} />
                  </button>
                  <button className="px-3 py-2  text-gray-700 text-sm font-medium rounded-md">
                    <BsTwitter size={15} />
                  </button>
                  <button className="px-3 py-2  text-gray-700 text-sm font-medium rounded-md">
                    <BsInstagram size={15} />
                  </button>
                  <button className="px-3 py-2  text-gray-700 text-sm font-medium rounded-md">
                    <MdOutlineEmail size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mt-10">
          <div className="flex gap-4">
            <button className="text-[16px] font-bold pt-[20px] pb-[5px] text-[#46A358] border-b-[2px] border-b-[#46A358] ">
              Product Description
            </button>
            <button className="text-[16px] font-bold pt-[20px] pb-[5px] text-[#333]">
              Reviews (19)
            </button>
          </div>
          <div className="pt-3">
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. <br /> <br /> Pellentesque aliquet, sem eget laoreet
              ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
              velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
              aliquam, purus eget sagittis vulputate, sapien libero hendrerit
              est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed tempor, lorem et placerat
              vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
              mi. Cras neque metus, consequat et blandit et, luctus a nunc.
              Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground.
            </p>
            <h3 className="text-[16px] font-bold pt-[20px] pb-[5px]">
              Living Room:
            </h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <h3 className="text-[16px] font-bold pt-[20px] pb-[5px]">
              Dining Room:
            </h3>
            <p>
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h3 className="text-[16px] font-bold pt-[20px] pb-[5px]">
              Office:
            </h3>
            <p>
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-[80px] popular">
        <PopularProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
