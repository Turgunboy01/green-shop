import React from "react";

const OrderLeft = ({validateField,handleSubmit,handleChange,formData,errors}) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Billing Address</h2>
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
        <div className="mt-[32px]">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Ship to a different address?</span>
          </label>
        </div>
        <div className="grid grid-cols-2 mt-[54px]">
          <div>
            <label className="block text-[15px] mb-1 font-normal">
              Order notes (optional)
            </label>
            <textarea
              value={formData.note}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  note: e.target.value,
                })
              }
              className="w-full border h-[200px] p-4 rounded outline-none"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default OrderLeft;
