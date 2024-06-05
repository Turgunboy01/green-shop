import React, { useState } from "react";
import gallary from "../../../public/gallary.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Account = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    newPassword: "",
    confirmPassword: "",
    password: "",
    email: "",
    phoneNumber: "",
    username: "",
  });

  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState(false);
  const [eyeClick, setEyeClick] = useState(false);

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

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
      case "username":
        if (!value) {
          error = "This field is required.";
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
      case "password":
      case "newPassword":
      case "confirmPassword":
        if (!value) {
          error = "This field is required.";
        } else if (
          name === "confirmPassword" &&
          value !== formData.newPassword
        ) {
          error = "Passwords do not match.";
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
      if (!formData[key]) {
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
      } else if (
        key === "confirmPassword" &&
        formData[key] !== formData.newPassword
      ) {
        newErrors[key] = "Passwords do not match.";
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(formData);
      // Clear the form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        newPassword: "",
        confirmPassword: "",
        password: "",
        email: "",
        phoneNumber: "",
        username: "",
      });
      setErrors({});
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mx-auto p-4">
        <h2 className="text-2xl mb-4">Personal Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[15px] mb-1 font-normal">
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={() => validateField("firstName", formData.firstName)}
              className="w-full border p-2 rounded outline-none"
              required
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-[15px] mb-1 font-normal">
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={() => validateField("lastName", formData.lastName)}
              className="w-full border p-2 rounded outline-none"
              required
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="grid  grid-cols-1 sm:grid-cols-2 gap-[22px]">
            <div className="mt-4">
              <label className="block text-[15px] mb-1 font-normal">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => validateField("email", formData.email)}
                className="w-full border p-2 rounded outline-none"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-[15px] mb-1 font-normal">
                Phone Number *
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border bg-gray-200 border-r-0 rounded-l">
                  +998
                </span>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={() =>
                    validateField("phoneNumber", formData.phoneNumber)
                  }
                  className="w-full border p-2 rounded-r outline-none"
                  required
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
          <div className="mt-4">
            <label className="block text-[15px] mb-1 font-normal">
              Username *
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              onBlur={() => validateField("username", formData.username)}
              className="w-full border p-2 rounded outline-none"
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          <div className="mt-11 flex items-center gap-5 ">
            <div className="w-[50px] h-[50px] border rounded-full flex items-center justify-center">
              <img src={gallary} className="w-[18px] h-[18px]" alt="" />
            </div>
            <button className="py-3 px-5 font-bold rounded text-[#46A358] hover:text-[#fff] border border-[#46A358] hover:bg-[#46A358] bg-[#fff]">
              Change
            </button>
            <button className="py-3 px-5 font-bold rounded text-[#46A358] hover:text-[#fff] border border-[#46A358] hover:bg-[#46A358] bg-[#fff]">
              Remove
            </button>
          </div>
        </div>

        <h2 className="text-[#3D3D3D] text-[16px] mt-[37px] font-medium">
          Password change
        </h2>
        <div className="grid sm:grid-cols-2 gap-[22px]">
          <div className="mt-4">
            <label className="block text-[15px] mb-1 font-normal">
              Current password *
            </label>
            <div className="w-full border py-2 rounded  flex items-center px-4">
              <input
                type={eyeClick ? "password" : "text"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={() => validateField("password", formData.password)}
                className="w-full p-2 rounded outline-none"
                required
              />
              {!eyeClick ? (
                <FaEye onClick={() => setEyeClick(!eyeClick)} />
              ) : (
                <FaEyeSlash onClick={() => setEyeClick(!eyeClick)} />
              )}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-[22px]">
          <div className="mt-4">
            <label className="block text-[15px] mb-1 font-normal">
              New password *
            </label>
            <div className="w-full border py-2 rounded  flex items-center px-4">
              <input
                type={eyeClick ? "password" : "text"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                onBlur={() =>
                  validateField("newPassword", formData.newPassword)
                }
                className="w-full p-2 rounded outline-none"
                required
              />
              {!eyeClick ? (
                <FaEye onClick={() => setEyeClick(!eyeClick)} />
              ) : (
                <FaEyeSlash onClick={() => setEyeClick(!eyeClick)} />
              )}
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-sm">{errors.newPassword}</p>
            )}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-[22px]">
          <div className="mt-4">
            <label className="block text-[15px] mb-1 font-normal">
              Confirm new password *
            </label>
            <div className="w-full border py-2 rounded  flex items-center px-4">
              <input
                type={eyeClick ? "password" : "text"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={() =>
                  validateField("confirmPassword", formData.confirmPassword)
                }
                className="w-full p-2 rounded outline-none"
                required
              />
              {!eyeClick ? (
                <FaEye onClick={() => setEyeClick(!eyeClick)} />
              ) : (
                <FaEyeSlash onClick={() => setEyeClick(!eyeClick)} />
              )}
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 mt-[54px]">
          <div>
            <button
              type="submit"
              className="px-6 py-3 rounded bg-[#46A358] text-white"
            >
              Send Address
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[50px]">
          <div className="">
            <h3 className="text-[17px] font-medium text-[#3D3D3D]">
              Shipping Address
            </h3>
            <p className="text-[#727272] text-[14px]">
              You have not set up this type of address yet.
            </p>
          </div>
          <div className="flex justify-end ">
            <div className="flex gap-[30px] sm:gap-[60px]">
              <div
                className="flex items-center gap-2"
                onClick={() => setCheck(!check)}
              >
                <div
                  className={`w-[16px] h-[16px] border p-[1px ] border-[#46A358] rounded-full ${
                    check ? "bg-[#46A358]" : "bg-transparent"
                  }`}
                ></div>
                <p className="text-[14px] text-[#3D3D3D]">
                  Same as billing address
                </p>
              </div>
              <button className="text-[#46A358] text-[16px] font-medium">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
