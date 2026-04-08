import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
 
  

  if (!products.length) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 flex items-center justify-center bg-gray-100">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} width="100" />
              </Link>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-sm font-semibold line-clamp-2">
                {product.title}
              </h2>

              <p className="text-lg font-bold mt-2">₹{product.price}</p>

              <p className="text-gray-500 text-xs mt-1 line-clamp-2">
                {product.description}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
