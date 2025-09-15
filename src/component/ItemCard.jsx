import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux'
import { removeFromCart, increaseQty, decreaseQty } from '../redux/slices/cartSlice'

const ItemCard = ({ id, name, price, img, quantity }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(removeFromCart({ id }))
  }

  return (
    <div className="flex justify-center my-4">
      <div className="relative w-[260px] bg-white shadow-md rounded-lg p-4 flex items-center gap-3 
                      hover:scale-105 hover:shadow-lg transition-all duration-300">
        
        {/* Delete Icon */}
        <button 
          onClick={handleDelete}
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
        >
          <MdDelete size={20} />
        </button>

        {/* Image */}
        <img 
          src={img || "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996"} 
          alt={name} 
          className="w-[60px] h-[60px] rounded-md object-cover flex-shrink-0"
        />

        {/* Details */}
        <div className="flex flex-col flex-1">
          <h2 className="font-bold text-gray-800 text-sm">{name}</h2>
          <span className="text-green-500 font-bold text-xs">Rs : {price}</span>

          {/* Quantity Control */}
          <div className="flex items-center gap-2 mt-1">
            <AiOutlinePlus 
              onClick={() => dispatch(increaseQty({ id }))}
              className="border-2 border-gray-600 hover:text-white hover:bg-green-500 rounded-md p-1 text-lg transition-all cursor-pointer" 
            />
            <span className="text-sm font-semibold">{quantity}</span>
            <AiOutlineMinus 
              onClick={() => dispatch(decreaseQty({ id }))}
              className="border-2 border-gray-600 hover:text-white hover:bg-red-500 rounded-md p-1 text-lg transition-all cursor-pointer" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
