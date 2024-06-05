import React, { useContext } from "react";
import { ProductsContext } from "../../context/AllProductsProvider";
import { CgClose } from "react-icons/cg";

const Modal = ({ children }) => {
  const { setModal } = useContext(ProductsContext);
  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center flex-col items-center"
      onClick={() => setModal(false)}
    >
      <div
        className="bg-white p-6   flex border-b-[10px] -mt-[60px] sm:mt-0 border-b-[#46A358] justify-center items-center w-full sm:w-[611px] relative "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute cursor-pointer right-4 top-4"
          onClick={() => setModal(false)}
        >
          <CgClose size={22} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
