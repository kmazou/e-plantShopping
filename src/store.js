// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the cartReducer from CartSlice.jsx

// Configure the Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer, // The cart slice will be managed by cartReducer
  },
});

export default store; // Export the store so it can be used in the application
