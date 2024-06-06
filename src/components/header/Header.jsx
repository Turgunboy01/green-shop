import React, { useContext, useEffect, useState } from "react";
import logo from "../../../public/logo.png";
import store from "../../../public/store.png";
import { IoSearch } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { data } from "../../data";
import { ProductsContext } from "../../context/AllProductsProvider";
import Modal from "../modal/Modal";
import { FaSearch, FaUser, FaUserCircle } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { TbLineScan } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { useSelector } from "react-redux";
import HeaderModal from "./HeaderModal";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { setModal, modal } = useContext(ProductsContext);

  const [userBtn, setUserBtn] = useState(false);

  const cart = useSelector((state) => state.cart.data);

  const handleNavigate = (id) => {
    navigate(`/shop/product/${id}`);
    setSearch("");
  };
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("users"));
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
  }
  const filtered = data.filter((fill) =>
    fill.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogin = () => {
    setModal(true);
  };

  const handleBtnClick = () => {
    navigate("/user");
    setUserBtn(false);
  };
  const logout = () => {
    localStorage.clear("users");
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch("");
    }, 8000);

    // Cleanup the timeout if the component unmounts or the effect runs again
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="w-full fixed bg-[#fff] shadow-sm z-[999]">
      <div className="lg:container mx-auto px-5">
        <div className="hidden sm:flex justify-between items-center py-5">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-[100px] md:w-[150px]" />
          </Link>
          <div className="flex gap-[30px] lg:gap-[50px]">
            <NavLink
              to={"/"}
              className={
                "text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer"
              }
            >
              Home
            </NavLink>

            <NavLink
              to={"/shop"}
              className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer"
            >
              Shop
            </NavLink>
            <NavLink
              to={"/plant"}
              className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer"
            >
              Plant CareNavli
            </NavLink>
            <NavLink
              to={"/blog"}
              className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer"
            >
              Blogs
            </NavLink>
          </div>
          <div className="flex items-center gap-2 md:gap-[30px] relative">
            <div className="group flex items-center gap-1 group-hover:border-[1px] border border-[#eee] py-2 px-2 lg:px-4 border-[#000]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="group-hover:w-[50px] md:group-hover:w-[80px] lg:group-hover:w-[200px] w-0 outline-none transition-all"
              />
              <IoSearch />
              {search && (
                <div
                  className={`absolute top-[40px] left-0 ${
                    search ? "w-[650px]" : "group-hover:w-[200px]"
                  } overflow-y-scroll overflow-hidden h-[300px] border border-[#eee] bg-white z-999`}
                >
                  {filtered.map((item) => (
                    <div
                      className="flex py-2 cursor-pointer"
                      onClick={() => handleNavigate(item.id)}
                      key={item.img}
                    >
                      <img
                        src={item.img}
                        className="w-[60px] h-[40px] object-contain"
                        alt=""
                      />
                      <h3>{item.name}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link to={"/shop/cart"} className="relative">
              <img src={store} alt="Store" />
              <span className="absolute -top-1 bg-[#46A358] w-[15px] h-[15px] text-[12px] rounded-full border border-[#fff] flex justify-center items-center -right-2 text-[#fff]">
                {cart.length > 0 ? cart.length : 0}
              </span>
            </Link>
            {!user && (
              <button
                onClick={handleLogin}
                className="bg-[#46A358] text-[#fff] flex items-center py-2 px-[12px] md:px-[17px] rounded-[6px] gap-2"
              >
                <RxExit />
                Login
              </button>
            )}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setUserBtn(!userBtn)}
                  className="bg-[#46A358] text-[#fff] flex items-center py-2 px-[12px] md:px-[17px] rounded-[6px] gap-2"
                >
                  <FaUserCircle />
                  User
                </button>
                {userBtn && (
                  <div className="bg-[#eee] py-[13px] w-[160px] px-5 absolute top-14 right-0 z-40 flex flex-col gap-3">
                    <button
                      className="flex items-center gap-3 font-medium text-[#3d3d3d] border-b border-b-[#33333307] hover:text-[#46A358] hover:border-b-[#46A358]"
                      onClick={() => handleBtnClick()}
                    >
                      <FaUser /> My Account
                    </button>
                    <button
                      className="flex items-center gap-3 font-medium text-[#3d3d3d] border-b border-b-[#33333307] hover:text-[#46A358] hover:border-b-[#46A358]"
                      onClick={logout}
                    >
                      <RxExit /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="px-5 w-full sm:hidden">
        <div className="w-full flex items-center justify-between gap-2 py-4">
          <div className="py-2 px-4 flex-[1] bg-[#F8F8F8] rounded-lg flex gap-3">
            <FaSearch />
            <input
              type="text"
              placeholder="Find your plants"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none transition-all bg-transparent"
            />
          </div>
          <div className="bg-[#46A358] w-[45px] h-[45px] rounded-[14px] flex justify-center items-center text-white">
            <VscSettings />
          </div>
          {search && (
            <div
              className={`absolute top-[70px] left-0 w-full overflow-y-scroll overflow-hidden h-[300px] border bg-white z-999`}
            >
              {filtered.length == 0 ? (
                <div className="w-full h-[200px] flex justify-center items-center">
                  <img
                    src="https://www.soulpharma.org/images/no-product-found.png"
                    alt=""
                    className="h-[200px] object-contain"
                  />
                </div>
              ) : (
                <>
                  {filtered.map((item) => (
                    <div
                      className="flex py-2 cursor-pointer"
                      onClick={() => handleNavigate(item.id)}
                      key={item.id}
                    >
                      <img
                        src={item.img}
                        className="w-[60px] h-[40px] object-contain"
                        alt=""
                      />
                      <h3>{item.name}</h3>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="sm:hidden flex items-center fixed bottom-0 bg-white z-40 w-full h-[80px]">
        <div className="px-5 w-full flex justify-between items-center">
          <div className="flex gap-[40px] items-center">
            <NavLink to={"/"}>
              <GoHome size={25} />
            </NavLink>
            <NavLink to={"/wishlist"}>
              <CiHeart size={25} />
            </NavLink>
          </div>
          <div className="relative">
            <div
              onClick={() => navigate("/scaner")}
              className="w-[70px] h-[70px] absolute -top-[70px] -left-[30px]   flex items-center justify-center rounded-full bg-[#46A358] border-[10px] border-[#fff] text-white"
            >
              <TbLineScan size={25} />
            </div>
          </div>
          <div className="flex gap-[40px] items-center">
            <NavLink to={"/shop/cart"} className="relative">
              <CiShoppingCart size={25} />
              <span className="absolute -top-1 bg-[#46A358] w-[15px] h-[15px] text-[12px] rounded-full border border-[#fff] flex justify-center items-center -right-2 text-[#fff]">
                {cart.length > 0 ? cart.length : 0}
              </span>
            </NavLink>
            {!user && (
              <button
                onClick={handleLogin}
                className="bg-[#46A358] text-[#fff] flex items-center py-2 px-[12px] md:px-[17px] rounded-[6px] gap-2"
              >
                <RxExit />
                Login
              </button>
            )}
            {user && (
              <div className="relative">
                <button
                  onClick={() => setUserBtn(!userBtn)}
                  className="bg-[#46A358] text-[#fff] flex items-center py-2 px-[12px] md:px-[17px] rounded-[6px] gap-2"
                >
                  <FaUserCircle />
                  User
                </button>
                {userBtn && (
                  <div className="bg-[#eee] py-[13px] w-[160px] px-5 absolute -top-24 right-0 z-40 flex flex-col gap-3">
                    <button
                      className="flex items-center gap-3 font-medium text-[#3d3d3d] border-b border-b-[#33333307] hover:text-[#46A358] hover:border-b-[#46A358]"
                      onClick={() => handleBtnClick()}
                    >
                      <FaUser /> My Account
                    </button>
                    <button
                      className="flex items-center gap-3 font-medium text-[#3d3d3d] border-b border-b-[#33333307] hover:text-[#46A358] hover:border-b-[#46A358]"
                      onClick={logout}
                    >
                      <RxExit /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {modal && (
        <Modal>
          <HeaderModal />
        </Modal>
      )}
    </div>
  );
};

export default Header;
