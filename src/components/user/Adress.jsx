import React, { useState } from "react";

const Address = () => {
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

  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState(false);

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
        if (!value) {
          error = "This field is required.";
        }
        break;
      case "country":
        if (!value) {
          error = "Please select a country.";
        }
        break;
      case "city":
      case "streetAddress":
      case "state":
      case "zip":
      case "phoneNumber":
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
      setErrors({});
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto p-4">
        <h2 className="text-2xl mb-4">Billing Address</h2>
        <p className="text-[#727272] mb-[30px] text-[14px]">
          The following addresses will be used on the checkout page by default.
        </p>
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
          <div className="grid grid-cols-2 gap-[22px]">
            <div>
              <label className="block text-[15px] mb-1 font-normal">
                Country / Region *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                onBlur={() => validateField("country", formData.country)}
                className="w-full border p-2 rounded outline-none"
                required
              >
                <option value="">Select a country / region</option>
                {/* Add country options here */}
              </select>
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
            <div>
              <label className="block text-[15px] mb-1 font-normal">
                Town / City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={() => validateField("city", formData.city)}
                className="w-full border p-2 rounded outline-none"
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[22px]">
          <div className="mt-4">
            <label className="block text-[15px] mb-1 font-normal">
              Street Address *
            </label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              onBlur={() =>
                validateField("streetAddress", formData.streetAddress)
              }
              className="w-full border p-2 rounded outline-none"
              placeholder="House number and street name"
              required
            />
            {errors.streetAddress && (
              <p className="text-red-500 text-sm">{errors.streetAddress}</p>
            )}
          </div>
          <div className="mt-11">
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              placeholder="Apartment, suite, unit, etc. (optional)"
              className="w-full border p-2 rounded outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-[15px] mb-1 font-normal">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              onBlur={() => validateField("state", formData.state)}
              className="w-full border p-2 rounded outline-none"
              required
            >
              <option value="">Select a state</option>
              {/* Add state options here */}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state}</p>
            )}
          </div>
          <div>
            <label className="block text-[15px] mb-1 font-normal">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              onBlur={() => validateField("zip", formData.zip)}
              className="w-full border p-2 rounded outline-none"
              required
            />
            {errors.zip && <p className="text-red-500 text-sm">{errors.zip}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[22px]">
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

        <div className="grid grid-cols-2 mt-[54px]">
          <div>
            <button className="px-6 py-3 rounded bg-[#46A358] text-white">
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
    </>
  );
};

export default Address;
