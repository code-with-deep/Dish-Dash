import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        // If item already exists, just increase quantity
        existingItem.quantity += action.payload.quantity || 1;
      } else {
        // Add new item with quantity
        state.cart.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;
