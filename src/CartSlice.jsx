import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize an empty cart
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item already exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item to the cart
      }
    },
    removeItem: (state, action) => {
        const name = action.payload;
        state.items = state.items.filter((item) => item.name !== name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const item = state.items.find((item) => item.name === name);
        if (item) {
          item.quantity = quantity;
        }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer as default
export default CartSlice.reducer;
