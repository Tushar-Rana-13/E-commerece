import React from "react";

const Cart = () => {
  return (
    <div>
      <h1>Your Cart</h1>

      <div className="cart-item">
        <h3>Product Name</h3>
        <p>$100</p>
        <button>Remove</button>
      </div>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;