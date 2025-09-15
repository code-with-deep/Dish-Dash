import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';



const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, rating, quantity: 1, img })); // ✅ use `quantity`
    if (handleToast) handleToast(); // ✅ show toast when item is added
  };

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg 
                    hover:shadow-lg hover:scale-105 duration-300 cursor-pointer">
      
      {/* Image */}
      <div className="w-full h-[160px] overflow-hidden rounded-lg">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm mt-3">{name}</h3> 
      <p className="text-xs font-normal text-gray-500">
        {desc.slice(0,50)}
      </p>

      {/* Rating, Price & Button in SAME Row */}
      <div className="flex justify-between items-center mt-2 text-sm">
        
        {/* Left side: Rating + Price */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-yellow-500">
            <FaStar/> {rating}
          </span>
          <span className="text-green-500">Rs : {price}</span>
        </div>

        {/* Right side: Add to Cart button */}
        <button 
          onClick={handleAddToCart} 
          className="p-1 px-2 text-white bg-green-500 hover:bg-green-600 rounded-lg text-xs"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default FoodCard
