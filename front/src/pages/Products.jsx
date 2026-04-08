import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <p className="text-xl font-semibold mt-3">₹{product.price}</p>

          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="mt-2 text-sm text-gray-500">
            Category: {product.category}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-black text-white px-6 py-2 rounded-lg">
              Add to Cart
            </button>

            <button className="border px-6 py-2 rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
