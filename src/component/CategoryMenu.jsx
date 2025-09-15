import React, { useState, useEffect } from "react";
import FoodData from "../data/FoodData";

const CategoryMenu = ({ setSelectedCategory, selectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  }, []);

  const getButtonClass = (category) =>
    `px-3 py-2 font-bold rounded-lg ${
      selectedCategory === category
        ? "bg-green-500 text-white"
        : "bg-gray-200 hover:bg-green-500 hover:text-white"
    }`;

  return (
    <div className="mx-6">
      <h3 className="font-semibold">Find the best food</h3>

      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {/* All button */}
        <button
          onClick={() => setSelectedCategory("All")}
          className={getButtonClass("All")}
        >
          All
        </button>

        {/* Dynamic categories */}
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={getButtonClass(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
