import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Cart starts empty
  },
  reducers: {
    addItem: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find((item) => item.name === plant.name);

      if (!existingItem) {
        state.items.push({ ...plant, quantity: 1 });
      } else {
        existingItem.quantity += 1; // Increment quantity if plant already exists
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload.name);
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

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
