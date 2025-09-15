import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = ({ toggleCart }) => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-3 mx-6 gap-3 lg:gap-0">
      {/* Left side */}
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Dish Dash</h1>
      </div>

      {/* Middle: Search */}
      <div>
        <input
          type="search"
          name="search"
          placeholder="Search here"
          autoComplete="off"
          onChange ={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>

      {/* Right: Cart Button */}
      <div>
        <button
          onClick={toggleCart}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
        >
          <FaCartShopping size={20} />
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
