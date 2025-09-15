import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Cart from '../component/Cart';
import CategoryMenu from '../component/CategoryMenu';
import FoodItems from '../component/FoodItems';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Navbar />
      <CategoryMenu 
        setSelectedCategory={setSelectedCategory} 
        selectedCategory={selectedCategory} 
      />
      <FoodItems selectedCategory={selectedCategory} />

      {/* Always keep Cart mounted */}
      <Cart />
    </div>
  );
};

export default Home;
