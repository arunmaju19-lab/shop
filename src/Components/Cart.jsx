import React from "react";
import { useProduct } from "./context/ProductContext.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useProduct();
  const navigate = useNavigate();

  // EMPTY CART WITH ANIMATION
  if (!cart || cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-white">
        
        {/* Animated Icon */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-lime-400/20 blur-xl animate-pulse"></div>
          <FaShoppingCart className="relative text-6xl text-lime-400 animate-bounce" />
        </div>

        {/* Text */}
        <h2 className="text-2xl font-semibold mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-400 mb-6 text-sm text-center max-w-xs">
          Looks like you haven’t added anything yet.
          Start exploring and add something you love 💛
        </p>

        {/* Action Button */}
        <button
          onClick={() => navigate("/")}
          className="
            border border-lime-400
            px-10 py-2
            rounded-md
            text-lime-400
            hover:bg-lime-400 hover:text-black
            transition
          "
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // CART ITEMS
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-2xl mb-6">Your Cart</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center mb-4 border-b border-gray-600 pb-4"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.img}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />

            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-300">₹{item.price}</p>
              <p className="text-sm text-gray-400">Qty: {item.qty}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-400 hover:text-red-600 transition"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
