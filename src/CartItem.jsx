import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '@/CartSlice.jsx';
import './CartItem.css';
const CartItem = ({ cartItems, onContinueShopping }) => {
  const dispatch = useDispatch();

  // Calculate total cost for all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.cost,
      0
    );
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement item quantity or remove if quantity is zero
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      handleRemove(item);
    }
  };

  // Remove item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Continue shopping
  const handleContinueShopping = () => {
    onContinueShopping();
  };

  // Checkout (placeholder functionality)
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Cost: ${item.cost}</p>
              <div className="cart-item-quantity">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p>Subtotal: ${item.quantity * item.cost}</p>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${calculateTotalAmount()}</h2>
        <button onClick={handleContinueShopping}>Continue Shopping</button>
        <button onClick={handleCheckoutShopping}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
