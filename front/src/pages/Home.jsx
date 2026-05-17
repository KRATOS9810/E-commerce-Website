import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home({ addToCart, takeSearch }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(takeSearch.toLowerCase()),
  );

  if (!products.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
        <p className="text-lg font-semibold animate-pulse">
          Loading Products...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] px-4 py-6 sm:px-6 lg:px-10">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Discover Products
        </h1>

        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Find your favorite items at the best price.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 border border-gray-100"
          >
            <Link to={`/product/${product.id}`}>
              <div className="h-44 sm:h-56 flex items-center justify-center bg-white p-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-contain group-hover:scale-110 transition duration-300"
                />
              </div>
            </Link>

            <div className="p-4">
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500">
                {product.category}
              </span>

              <h2 className="mt-3 text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
                {product.title}
              </h2>

              <div className="flex items-center justify-between mt-3">
                <p className="text-lg sm:text-xl font-bold text-black">
                  ₹{product.price}
                </p>

                <p className="text-yellow-500 text-sm">
                  ⭐ {product.rating.rate}
                </p>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-2">
                {product.description}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full mt-4 bg-black text-white py-2.5 rounded-xl hover:bg-gray-800 active:scale-95 transition duration-200 text-sm sm:text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-gray-700">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching with another keyword.
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
