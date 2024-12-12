// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Store cart items with properties: name, quantity, cost, image, etc.
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.name === item.name);

      if (existingItem) {
        // If item already in cart, just increase quantity
        existingItem.quantity += 1;
      } else {
        // If item not in cart, add it with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((cartItem) => cartItem.name === name);
      if (item) {
        item.quantity = quantity;
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name);
    },
  },
});

export const { addItem, updateQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
