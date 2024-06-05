import React, { useContext, useState } from "react";
import Modal from "../../components/modal/Modal";
import OrderLeft from "./OrderLeft";
import OrderRight from "./OrderRight";
import { useSelector } from "react-redux";
import { ProductsContext } from "../../context/AllProductsProvider";
import OrderModal from "../../components/modal/OrderModal";
import { useNavigate } from "react-router-dom";
import thanks from "../../../public/Group.png";

const CartOrder = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    streetAddress: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phoneNumber: "",
    note: "",
  });

  const cart = useSelector((state) => state.cart.data); // Correct usage of useSelector
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const { setOrderModal, orderModal } = useContext(ProductsContext);

  // const [login, setLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (errors[name]) {
      validateField(name, value);
    }
  };
  console.log(paymentMethod, "pay");

  const validateField = (name, value) => {
    let error = "";
    validateField;
    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
      case "streetAddress":
      case "state":
      case "zip":
        if (!value) {
          error = "This field is required.";
        }
        break;
      case "country":
        if (!value) {
          error = "Please select a country.";
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Invalid email address.";
        }
        break;
      case "phoneNumber":
        const phoneRegex = /^\d{9}$/; // assuming phone number is 9 digits
        if (!phoneRegex.test(value)) {
          error = "Invalid phone number.";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "apartment" && key !== "note") {
        newErrors[key] = "This field is required.";
      } else if (key === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[key])) {
          newErrors[key] = "Invalid email address.";
        }
      } else if (key === "phoneNumber") {
        const phoneRegex = /^\d{9}$/; // assuming phone number is 9 digits
        if (!phoneRegex.test(formData[key])) {
          newErrors[key] = "Invalid phone number.";
        }
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      // Process the form data as needed
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const orderDetails = {
    orderNumber: "19586887",
    date: "15 Sep, 2021",
    shipping: 16,
  };

  const subtotal = cart.reduce((sum, product) => sum + product.totalPrice, 0);
  const total = subtotal - orderDetails.shipping;

  return (
    <div className="lg:container mx-auto px-5 flex flex-col sm:flex-row">
      <div className="w-full sm:w-2/3 ">
        <OrderLeft
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
          errors={errors}
          validateField={validateField}
        />
      </div>
      <div className="w-full sm:w-1/3">
        <OrderRight
          subtotal={subtotal}
          handlePaymentMethodChange={handlePaymentMethodChange}
          paymentMethod={paymentMethod}
        />
        {orderModal && (
          <OrderModal>
            <div className=" rounded-lg ">
              <div className="text-center mb-6 bg-[#46A3580F]">
                <img src={thanks} alt="Thank You" className="mx-auto mb-2" />
                <h2 className="text-xl font-bold">
                  Your order has been receivedflex
                </h2>
              </div>
              <div className="border-t border-b py-4 grid grid-cols-4">
                <div className="flex justify-between flex-col mb-2">
                  <span className="font-semibold">Order Number</span>
                  <span>{orderDetails.orderNumber}</span>
                </div>
                <div className="flex justify-between mb-2 flex-col">
                  <span className="font-semibold">Date</span>
                  <span>{orderDetails.date}</span>
                </div>
                <div className="flex justify-between mb-2 flex-col">
                  <span className="font-semibold">Total</span>
                  <span>{total < 0 ? 0 : total}</span>
                </div>
                <div className="flex justify-between mb-2 flex-col">
                  <span className="font-semibold">Payment Method</span>
                  <span>{paymentMethod}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-[16px] sm:text-lg font-bold mb-2">
                  Order Details
                </h3>
                <div className="grid grid-cols-2 text-[14px] sm:text-[16px]">
                  <h1>Products</h1>
                  <div className="grid grid-cols-2">
                    <h1 className="text-center text-[14px] sm:text-[16px]">
                      Qty
                    </h1>
                    <h1 className="text-center text-[14px] sm:text-[16px]">
                      Subtotal
                    </h1>
                  </div>
                </div>
                {cart.map((product, index) => (
                  <div key={index} className="f mb-2">
                    <div className="grid grid-cols-2 items-center">
                      <div className="flex items-center">
                        <img
                          src={product.img}
                          className="w-[70px] h-[70px]"
                          alt=""
                        />
                        <div className="">
                          <p className="text-[14px] sm:text-[16px] font-medium text-[#3D3D3D]">
                            {product.name}
                          </p>
                          <p className="text-[12px] sm:text-[14px] text-[#727272]">
                            <span className="text-[#A5A5A5]">SKU : </span>
                            {product.sku}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2">
                        <h1 className="text-[13px] sm:text-[14px] text-center text-[#727272]">
                          (x {product.quantity})
                        </h1>
                        <h1 className="text-[14px] sm:text-[18px] font-bold text-center text-[#46A358]">
                          ${product.totalPrice}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-2 pr-[54px]">
                  <div className="grid grid-cols-2  mb-2">
                    <div className=""></div>
                    <div className="flex justify-between">
                      <span className="text-[14px] sm:text-[16px]">
                        Shipping
                      </span>
                      <span className="text-[14px] sm:text-[16px] font-bold">
                        ${orderDetails.shipping}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2  mb-4">
                    <div></div>
                    <div className="flex  justify-between">
                      <span className="text-[16px] sm:text-[18px] font-bold text-center">
                        Total
                      </span>
                      <span className="text-[14px] text-[18px] font-bold text-center text-[#46A358]">
                        ${total < 0 ? 0 : total}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mb-4">
                Your order is currently being processed. You will receive an
                order confirmation email shortly with the expected delivery date
                for your items.
              </p>
              <button
                className="w-full bg-green-500 text-white p-2 rounded"
                onClick={() => navigate("/user")}
              >
                Track your order
              </button>
            </div>
          </OrderModal>
        )}
      </div>
    </div>
  );
};

export default CartOrder;
