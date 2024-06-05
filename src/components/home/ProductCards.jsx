import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/AllProductsProvider";
import ProductCard from "./ProductCard";
import "react-responsive-pagination/themes/classic.css";
import { Box, Slider } from "@mui/material";
import saleImg from "../../../public/sale.png";
import CategoryComponents from "./Category";
import "tailwindcss/tailwind.css";
import Pagination from "./Pagination";

function valuetext(value) {
  return `${value}`;
}

const ProductCards = () => {
  const { products } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [value, setValue] = useState([0, 1000]);
  const [filteredPriceRange, setFilteredPriceRange] = useState([0, 1000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleFilterClick = () => {
    setFilteredPriceRange(value);
    setCurrentPage(1); // Reset to first page on filter
  };

  const sortProducts = (products, option) => {
    switch (option) {
      case "name":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "size":
        return [...products].sort((a, b) => a.size.localeCompare(b.size));
      case "price":
        return [...products].sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  };

  // Filter products by selected category and price range
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price >= filteredPriceRange[0] &&
      product.price <= filteredPriceRange[1]
  );

  // Sort products by selected sort option
  const sortedProducts = sortProducts(filteredProducts, sortOption);

  // Calculate total pages
  const totalItems = sortedProducts.length;

  // Slice products for the current page
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Extract unique categories from filtered products and count them
  const categoryCounts = products.reduce((acc, product) => {
    if (
      product.price >= filteredPriceRange[0] &&
      product.price <= filteredPriceRange[1]
    ) {
      acc[product.category] = (acc[product.category] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="lg:container mx-auto px-5 mt-[100px]">
      <div className="flex justify-between gap-7">
        <div className="flex-[.1] md:flex-[.2] hidden md:block bg-[#FBFBFB]">
          <div className="p-5">
            <CategoryComponents
              categoryCounts={categoryCounts}
              handleCategoryChange={handleCategoryChange}
            />
            <div>
              <Box sx={{ width: 300 }}>
                <Slider
                  getAriaLabel={() => "Price range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                  min={0}
                  max={1000}
                />
              </Box>
              <div className="flex flex-col">
                Price:{" "}
                <span className="text-[#46A358] font-bold">
                  ${value[0]}-${value[1]}
                </span>
                <div className="mt-4">
                  <button
                    className="px-5 py-3 bg-[#46A358] font-bold text-white rounded-lg"
                    onClick={handleFilterClick}
                  >
                    Filter
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-[20px]">
              <h2 className="text-[20px] font-bold">Size</h2>
              <div className="px-3">
                <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
                  <p className="py-2">Small</p>
                  <p>(14)</p>
                </span>
                <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
                  <p className="py-2">Medium</p>
                  <p>(10)</p>
                </span>
                <span className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold ">
                  <p className="py-2">Large</p>
                  <p>(12)</p>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <img src={saleImg} alt="Sale" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex justify-between px-2 items-center">
            <div className="flex items-center gap-[37px]">
              <button
                className={`font-bold border-b-[2px] py-1 ${
                  selectedCategory === "All"
                    ? "border-b-[#46A358] text-[#46A358]"
                    : ""
                }`}
                onClick={() => handleCategoryChange("All")}
              >
                All Plants
              </button>
              <button
                className={`${
                  selectedCategory === "New Arrivals"
                    ? "border-b-[#46A358] text-[#46A358]"
                    : ""
                }`}
                onClick={() => handleCategoryChange("New Arrivals")}
              >
                New Arrivals
              </button>
              <button
                className={`${
                  selectedCategory === "Sale"
                    ? "border-b-[#46A358] text-[#46A358]"
                    : ""
                }`}
                onClick={() => handleCategoryChange("Sale")}
              >
                Sale
              </button>
            </div>
            <div className="sm:flex items-center hidden">
              <p className="">Sort by:</p>
              <select
                className="p-2 focus:outline-none focus:border-transparent"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="default">Default sorting</option>
                <option value="name">Name</option>
                <option value="size">Size</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>
          <div
            className={`flex-1 ${
              currentProducts.length > 0 ? "grid" : ""
            }  grid-cols-2 xl:grid-cols-3  gap-5`}
          >
            {currentProducts.length > 0 ? (
              <>
                {currentProducts.map((item) => (
                  <div
                    className="w-[175px] sm:w-full h-[245px] sm:h-[400px]"
                    key={item.id}
                  >
                    <ProductCard item={item} />
                  </div>
                ))}
              </>
            ) : (
              <div className="w-full h-full flex justify-center items-center">
                <img
                  src="https://www.soulpharma.org/images/no-product-found.png"
                  alt=""
                  className="h-[400px]"
                />
              </div>
            )}
          </div>
          <div className="flex justify-end pr-4 sm:pr-0">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
