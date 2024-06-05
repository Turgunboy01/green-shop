import React, { useState } from "react";
import { CiHeart, CiLocationOn, CiUser } from "react-icons/ci";

import { RxExit } from "react-icons/rx";
import UserLeft from "../../components/user/UserLeft";
import Adress from "../../components/user/Adress";
import Account from "../../components/user/Account";
// import { Report } from "../../../public/Svg";

const UserPage = () => {
  const [menu, setMenu] = useState(1);
  return (
    <div className="lg:container mx-auto px-5 flex flex-col sm:flex-row gap-10">
      <div className="w-[30%] flex gap-[20px] py-2 flex-row flex-wrap sm:flex-col">
        <UserLeft menu={menu} setMenu={setMenu} />
      </div>
      <div className="w-full sm:w-[70%]">
        {menu == 1 && (
          <>
            <Account />
          </>
        )}
        {menu == 2 && (
          <>
            <Adress />
          </>
        )}
        {menu == 3 && <>Orders</>}
        {menu == 4 && <>Wishlist</>}
        {menu == 5 && <>Reports</>}
        {menu == 6 && <>Downloads</>}
        {menu == 7 && <>Supports</>}
      </div>
    </div>
  );
};

export default UserPage;
