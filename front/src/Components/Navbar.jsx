import { Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-4 bg-black text-white shadow-md">
      <h2 className="text-xl font-bold">MyShop</h2>

      <div className="flex gap-6">
        <Link to="/home" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-400 transition">
          Products
        </Link>
        <Link to="/cart" className="hover:text-gray-400 transition">
          <p>Cart ({cart.length})</p>
        </Link>
      </div>
    </nav>
  );
}



export default Navbar;
