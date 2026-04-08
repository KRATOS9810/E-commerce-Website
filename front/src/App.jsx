import { useState } from "react";

import Products from "./pages/Products";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // simple add
  };
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <Navbar
          className="fixed top-0 left-0 w-full bg-black text-white z-50"
          cart={cart}
        ></Navbar>
      </div>
      <Routes>
        <Route path="/products" element={<Products></Products>} />
        <Route path="/home" element={<Home addToCart={addToCart}></Home>} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart}></Cart>}
        />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
