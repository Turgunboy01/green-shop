import React, { useContext } from "react";
import { ProductsContext } from "../../context/AllProductsProvider";
import { useSelector } from "react-redux";

const OrderRight = ({ paymentMethod, handlePaymentMethodChange, subtotal }) => {
  const { setOrderModal } = useContext(ProductsContext);
  const cart = useSelector((state) => state.cart.data);
  const cupon = subtotal * 0.1;

  const total = subtotal - cupon + 16;
  return (
    <>
      <div className="max-w-lg mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="border-b pb-4 mb-4">
          {cart.map((item) => (
            <div className="flex items-center gap-[60px] mb-2">
              <div className="flex w-2/3 items-center gap-3">
                <div className="">
                  <img src={item.img} className="w-[70px] h-[70px]" alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] text-[#3D3D3D]">
                    {item.name}{" "}
                  </span>
                  <span className="text-[#727272] text-[14px] flex">
                    <p className="text-[#A5A5A5]">SKU:</p> {item.sku}
                  </span>
                </div>
              </div>
              <div className="w-1/3 flex justify-between">
                <span>(x {item.quantity})</span>
                <span className="font-bold">${item.totalPrice}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Coupon Discount</span>
            <span className="font-bold">(-) ${cupon}.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className="font-bold">$16.00</span>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-lg font-bold">Total</span>
          <span className="text-lg font-bold">${total}</span>
        </div>
        <h2 className="text-xl font-bold mb-4">Payment Method</h2>
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="PayPal"
              checked={paymentMethod === "PayPal"}
              onChange={handlePaymentMethodChange}
              className="form-radio"
            />
            <img
              src="https://img.icons8.com/color/48/000000/paypal.png"
              alt="PayPal"
              className="ml-2"
            />
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Credit Card"
              checked={paymentMethod === "Credit Card"}
              onChange={handlePaymentMethodChange}
              className="form-radio"
            />
            <img
              src="https://img.icons8.com/color/48/000000/mastercard.png"
              alt="MasterCard"
              className="ml-2"
            />
            <img
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
              className="ml-2"
            />
            <img
              src="https://img.icons8.com/color/48/000000/amex.png"
              alt="American Express"
              className="ml-2"
            />
          </label>
          <label className="flex items-center mb-2">
            <input
              type="radio"
              name="paymentMethod"
              value="Bank Transfer"
              checked={paymentMethod === "Bank Transfer"}
              onChange={handlePaymentMethodChange}
              className="form-radio"
            />
            <span className="ml-2">Direct Bank Transfer</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="Cash On Delivery"
              checked={paymentMethod === "Cash On Delivery"}
              onChange={handlePaymentMethodChange}
              className="form-radio"
            />
            <span className="ml-2">Cash on Delivery</span>
          </label>
        </div>
        <button
          className="w-full bg-green-500 text-white p-2 rounded"
          onClick={() => setOrderModal(true)}
        >
          Place Order
        </button>
      </div>
    </>
  );
};

export default OrderRight;
