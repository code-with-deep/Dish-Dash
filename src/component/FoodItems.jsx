import React, { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = ({ selectedCategory }) => {
  const [foods, setFoods] = useState(FoodData);
  const search = useSelector((state) => state.search.search); 

  useEffect(() => {
    let filteredFoods = FoodData;

    // Category filter
    if (selectedCategory !== "All") {
      filteredFoods = filteredFoods.filter(
        (food) => food.category === selectedCategory
      );
    }

    // Search filter
    if (search.trim() !== "") {
      filteredFoods = filteredFoods.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFoods(filteredFoods);
  }, [selectedCategory, search]);

  const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleToast = () => toast.success("Item added to cart!");

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-5 justify-center">
        {foods.length > 0 ? (
          foods.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              desc={food.desc}
              img={food.img}
              rating={food.rating}
              price={food.price}
              onDelete={handleDelete}
              handleToast={handleToast}
            />
          ))
        ) : (
          <p className="text-white text-lg mt-5">No food items found 🍽️</p>
        )}
      </div>
    </>
  );
};

export default FoodItems;
