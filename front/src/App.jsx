import { useState } from "react";

import Products from "./pages/Products";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
function App() {
  const [cart, setCart] = useState([]);
  const [Search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success("Product Added"); // simple add
  };
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.success("Product Removed");
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div>
        <Navbar
          className="fixed top-0 left-0 w-full bg-black text-white z-50"
          cart={cart}
          giveSearch={setSearch}
        ></Navbar>
      </div>
      <Routes>
        <Route path="/products" element={<Products></Products>} />
        <Route
          path="/"
          element={<Home addToCart={addToCart} takeSearch={Search}></Home>}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart}></Cart>}
        />
        <Route path="/about" element={<About></About>} />
        <Route path="/checkout" element={<Checkout></Checkout>} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
