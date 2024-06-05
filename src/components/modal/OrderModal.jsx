import React, { useContext } from "react";
import { ProductsContext } from "../../context/AllProductsProvider";
import { CgClose } from "react-icons/cg";

const OrderModal = ({ children }) => {
  const { setOrderModal } = useContext(ProductsContext);
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center z-[999] flex-col items-center"
        onClick={() => setOrderModal(false)}
      >
        <div
          className="bg-white p-6   flex border-b-[10px] border-b-[#46A358] justify-center items-centerw-sm  sm:w-[611px] relative "
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="absolute cursor-pointer right-4 top-4"
            onClick={() => setOrderModal(false)}
          >
            <CgClose size={22} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default OrderModal;
