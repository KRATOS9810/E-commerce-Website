import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar({ cart, giveSearch }) {
  const [search, setSearch] = useState("");

  return (
    <nav className="sticky top-0 z-50 bg-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-extrabold tracking-wide">
            MyShop
          </Link>

          <div className="flex-1 max-w-xl mx-2 sm:mx-6">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                giveSearch(e.target.value);
              }}
              className="w-full px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-white text-black placeholder-gray-500 outline-none border-2 border-transparent focus:border-gray-400 transition text-sm sm:text-base"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-gray-300 transition">
              About
            </Link>

            <Link
              to="/cart"
              className="relative hover:text-gray-300 transition"
            >
              Cart
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-4 md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              giveSearch(e.target.value);
            }}
            className="w-full px-4 py-2 rounded-full text-black outline-none"
          />
        </div>

        <div className="flex md:hidden justify-around mt-4 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>

          <Link to="/cart" className="relative hover:text-gray-300 transition">
            Cart
            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
