import React, { useContext, useState } from "react";
import logo from "../../../public/logo.png";
import store from "../../../public/store.png";
import { IoSearch } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../data";
import { ProductsContext } from "../../context/AllProductsProvider";
import Modal from "../modal/Modal";
import { FaFacebookF, FaGoogle, FaSearch, FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiHome } from "react-icons/ti";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { login, signup } from "../../firebase/Firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { setModal, modal } = useContext(ProductsContext);
  const [signState, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const cart = useSelector((state) => state.cart.data);

  const handleNavigate = (id) => {
    navigate(`/card/${id}`);
    setSearch("");
  };

  const filtered = data.filter((fill) =>
    fill.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogin = () => {
    setModal(true);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    if (!signState && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      if (signState) {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
      setModal(false);
    } catch (error) {
      setError("An error occurred during authentication");
    }

    setLoading(false);
  };

  return (
    <div className="w-full fixed bg-[#fff] shadow-sm z-[999]">
      <div className="lg:container mx-auto px-5 ">
        <div className="hidden sm:flex  justify-between items-center py-5">
          <Link to={"/"} className="">
            <img src={logo} alt="" className="w-[100px] md:w-[150px]" />
          </Link>
          <div className="flex gap-[30px] lg:gap-[50px]  ">
            <li className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold  border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              Shop
            </li>
            <li className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold  border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              Plant Care
            </li>
            <li className="text-[#3D3D3D] text-[14px] md:text-[16px] hover:font-bold   border-b-[3px] border-[#0000] pb-2 hover:border-[#46A358] cursor-pointer">
              Blogs
            </li>
          </div>
          <div className="flex  items-center gap-2 md:gap-[30px] relative">
            <div className="group flex items-center gap-1 group-hover:border-[1px] border py-2 px-2 lg:px-4 border-[#000]">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="group-hover:w-[50px] md:group-hover:w-[80px]  lg:group-hover:w-[200px] w-0 outline-none  transition-all "
              />
              <div className="">
                <IoSearch />
              </div>
              {search && (
                <div
                  className={`absolute top-[40px] left-0 ${
                    search ? "w-[650px]" : "group-hover:w-[200px]"
                  } overflow-y-scroll overflow-hidden h-[300px] border bg-white z-999`}
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
              <img src={store} alt="" />
              <span className="absolute -top-1 bg-[#46A358] w-[15px] h-[15px] text-[12px] rounded-full border border-[#fff] flex justify-center items-center -right-2 text-[#fff]">
                {cart.length > 0 ? cart.length : 0}
              </span>
            </Link>
            <button
              onClick={handleLogin}
              className="bg-[#46A358] text-[#fff] flex items-center py-2 px-[12px] md:px-[17px] rounded-[6px] gap-2"
            >
              <RxExit />
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="px-5 w-full sm:hidden">
        <div className="w-full flex items-center justify-between gap-2 py-4   ">
          <div className="py-2 px-4 flex-[1] bg-[#F8F8F8] rounded-lg flex gap-3 ">
            <FaSearch />
            <input
              type="text"
              placeholder="Find your plants"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none  transition-all bg-transparent "
            />
          </div>
          <div className="bg-[#46A358] w-[45px] h-[45px] rounded-[14px] flex justify-center items-center text-white">
            <VscSettings />
          </div>
          {search && (
            <div
              className={`absolute top-[70px] left-0 w-full overflow-y-scroll overflow-hidden h-[300px] border bg-white z-999`}
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
      </div>
      <div className="sm:hidden flex items-center fixed bottom-0 bg-white z-40 w-full h-[100px]">
        <div className=" px-5 w-full flex justify-between items-center">
          <div className="flex gap-[50px] items-center ">
            <Link to={"/"}>
              <TiHome size={25} />
            </Link>
            <li>
              <CiHeart size={25} />
            </li>{" "}
          </div>
          <div className=""></div>
          <div className="flex gap-[50px] items-center ">
            <Link to={"/shop/cart"}>
              <CiShoppingCart size={25} />
            </Link>{" "}
            <Link to={"/user"}>
              <FaUser size={25} />
            </Link>
          </div>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className="w-full h-full mx-auto flex py-[20px] justify-center flex-col items-center">
            <div className="flex gap-2 items-center">
              <button
                className={` text-[25px] text-[#3D3D3D] ${
                  signState ? "text-[#46A358]" : "text-[#3D3D3D]"
                }`}
                onClick={() => setLogin(true)}
              >
                Login
              </button>
              <h2 className="text-[25px] text-[#3D3D3D]">|</h2>
              <button
                className={` text-[25px] ${
                  !signState ? "text-[#46A358]" : "text-[#3D3D3D]"
                }`}
                onClick={() => setLogin(false)}
              >
                Register
              </button>
            </div>

            <div className="mt-[20px] w-full flex flex-col">
              {signState ? (
                <div className="flex flex-col gap-[17px] ">
                  <h3 className="text-[13px] ">
                    Enter your email and password to login.
                  </h3>

                  <input
                    className="w-full py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500">{error}</p>}
                  <button
                    onClick={user_auth}
                    className="bg-[#46A358] rounded font-bold text-[16px] text-[#fff] w-full mt-5 py-[15px]"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-[17px] ">
                  <h3 className="text-[13px] ">
                    Enter your email and password to register.
                  </h3>
                  <input
                    type="text"
                    className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                    type="text"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    className="w-full py-2 sm:py-3 px-[14px] outline-none border-[#EAEAEA] rounded border "
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {error && <p className="text-red-500">{error}</p>}
                  <button
                    onClick={user_auth}
                    className="bg-[#46A358] rounded font-bold text-[16px] text-[#fff] w-full  sm:mt-5 py-[5px] sm:py-[15px]"
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>
              )}

              <h3 className="py-[10px] sm:py-[20px] text-[13px] text-center">
                Or register with
              </h3>
              <button className="flex border rounded border-[#EAEAEA] py-[5px] sm:py-[13px] px-3 justify-center items-center gap-3 w-full  text-[14px] sm:text-[16px]">
                <FcGoogle size={20} />{" "}
                <span className=" hidden sm:block">Continue with Google</span>
              </button>
              <button className="flex border rounded border-[#EAEAEA] py-[5px] sm:py-[13px] mt-2 px-3 justify-center items-center gap-3 w-full  text-[14px] sm:text-[16px]">
                <FaFacebookF size={20} />
                <span className=" hidden sm:block">
                  {" "}
                  Continue with Facebook
                </span>
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
