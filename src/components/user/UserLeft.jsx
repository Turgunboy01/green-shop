import React, { useContext } from "react";
import { CiHeart, CiLocationOn, CiUser } from "react-icons/ci";
import { RxExit } from "react-icons/rx";
import store from "../../../public/store.png";
import location from "../../../public/Location.png";
import wishlist from "../../../public/wishlist.png";
import user from "../../../public/User.svg";
import report from "../../../public/Activity.png";
import download from "../../../public/Download.png";
import danger from "../../../public/Danger.png";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/AllProductsProvider";

const UserLeft = ({ menu, setMenu }) => {
  const navigate = useNavigate();
  const { setModal, modal } = useContext(ProductsContext);

  const logout = () => {
    localStorage.clear("users");
    // navigate("/login");
    setModal(true);
  };

  return (
    <>
      <li
        className={`flex items-center cursor-pointer  gap-3 pl-[18px] hover:border-l-[5px]  hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 1
            ? "font-bold border-l-[4px] text-[#46A358] border-l-[#46A358] "
            : "text-[#727272] border-l-[5px] border-l-[#ffffff02]"
        } `}
        onClick={() => setMenu(1)}
      >
        <img src={user} alt="" /> Account details
      </li>
      <li
        className={`flex items-center cursor-pointer  gap-3 pl-[18px] hover:border-l-[5px]  hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 2
            ? "font-bold border-l-[4px] text-[#46A358] border-l-[#46A358] "
            : "text-[#727272] border-l-[5px] border-l-[#ffffff02]"
        } `}
        onClick={() => setMenu(2)}
      >
        <img src={location} alt="" /> Adress
      </li>
      <li
        className={`flex items-center cursor-pointer  gap-3 pl-[18px] hover:border-l-[5px] hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 3
            ? "font-bold border-l-[4px] text-[#46A358] border-l-[#46A358] "
            : "text-[#727272] border-l-[5px] border-l-[#ffffff02] "
        } `}
        onClick={() => setMenu(3)}
      >
        <img src={store} className="w-[18px]" alt="" /> Orders
      </li>
      <li
        className={`flex items-center cursor-pointer  gap-3 pl-[18px] hover:border-l-[5px] hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 4
            ? "font-bold border-l-[4px] text-[#46A358] border-l-[#46A358] "
            : "text-[#727272] border-l-[5px] border-l-[#ffffff02] "
        } `}
        onClick={() => setMenu(4)}
      >
        <img src={wishlist} alt="" /> Wishlist
      </li>
      <li
        className={`flex items-center cursor-pointer  gap-3 pl-[18px] hover:border-l-[5px]  hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 5
            ? "font-bold border-l-[5px] text-[#46A358] border-l-[#46A358]"
            : "text-[#727272] border-l-[5px] border-l-[#ffffff02]"
        } `}
        onClick={() => setMenu(5)}
      >
        <img src={report} className="w-[18px]" alt="" /> Reports
      </li>
      <li
        className={`flex items-center cursor-pointer  gap-3 pl-[18px] hover:border-l-[5px] hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 6
            ? "font-bold border-l-[4px] text-[#46A358] border-l-[#46A358] "
            : "text-[#727272]  border-l-[5px] border-l-[#ffffff02]"
        } `}
        onClick={() => setMenu(6)}
      >
        <img src={download} alt="" /> Downloads
      </li>
      <li
        className={`flex items-center cursor-pointer gap-3 pl-[18px] hover:border-l-[5px]  hover:border-l-[#46A358] hover:text-[#46A358] hover:font-bold ${
          menu == 7
            ? "font-bold border-l-[4px] text-[#46A358] border-l-[#46A358] "
            : "text-[#727272] border-l-[5px] border-l-[#ffffff02]"
        } `}
        onClick={() => setMenu(7)}
      >
        <img src={danger} className="w-[18px]" alt="" /> Support
      </li>
      <hr />
      <li
        className={`flex items-center cursor-pointer gap-3 pl-[18px] hover:border-l-[5px] font-bold  text-[#46A358] border-l-[#46A358]    `}
        onClick={logout}
      >
        <RxExit /> loguot
      </li>
    </>
  );
};

export default UserLeft;
