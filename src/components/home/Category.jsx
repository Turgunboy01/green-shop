import React from "react";

const CategoryComponents = ({ handleCategoryChange, categoryCounts }) => {
  return (
    <div>
      <h2 className="text-[20px] font-bold">Categories</h2>
      <div className="px-3">
        {Object.keys(categoryCounts).map((category, index) => (
          <span
            key={index}
            className="flex justify-between text-[#3D3D3D] hover:text-[#46A358] font-semibold cursor-pointer"
            onClick={() => handleCategoryChange(category)}
          >
            <p className="py-2">{category}</p>
            <p>({categoryCounts[category]})</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryComponents;
