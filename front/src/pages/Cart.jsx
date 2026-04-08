function Cart({ cart = [], removeFromCart  }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
            >
              {/* Left */}
              <div className="flex items-center gap-4">
                <img src={item.image} className="h-16 w-16 object-contain" />
                <div>
                  <h2 className="font-semibold text-sm">{item.title}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* Right */}
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h2 className="text-xl font-bold">Total: ₹{total.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
