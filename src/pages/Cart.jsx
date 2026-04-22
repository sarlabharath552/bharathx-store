import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cartItems,
    removeItem,
    increaseQty,
    decreaseQty,
  } = useCart();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.qty,
    0
  );

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-20 px-6 min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">
              Your Cart
            </h1>

            <span className="text-gray-500 text-lg">
              {cartItems.length} Item(s)
            </span>
          </div>

          {/* Empty Cart */}
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-3xl shadow-md p-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Cart is Empty
              </h2>

              <p className="text-gray-500 mb-8">
                Looks like you haven’t added anything yet.
              </p>

              <button
                onClick={() => navigate("/")}
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl shadow-md p-5 flex flex-col md:flex-row gap-6"
                  >
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-40 h-40 object-cover rounded-2xl"
                    />

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">

                      <div>
                        <h2 className="text-2xl font-semibold">
                          {item.name}
                        </h2>

                        <p className="text-gray-500 mt-2">
                          ₹{Number(item.price).toLocaleString()}
                        </p>
                      </div>

                      {/* Qty Controls */}
                      <div className="flex items-center justify-between mt-6">

                        <div className="flex items-center gap-3">

                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-10 h-10 border rounded-full text-xl hover:bg-gray-100"
                          >
                            -
                          </button>

                          <span className="text-lg font-medium w-8 text-center">
                            {item.qty}
                          </span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="w-10 h-10 border rounded-full text-xl hover:bg-gray-100"
                          >
                            +
                          </button>

                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 font-semibold hover:underline"
                        >
                          Remove
                        </button>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-3xl shadow-md p-8 h-fit sticky top-28">

                <h2 className="text-2xl font-bold mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 text-gray-600">

                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{cartItems.length}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>

                  <div className="border-t pt-4 flex justify-between text-xl font-bold text-black">
                    <span>Total</span>
                    <span>
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>

                </div>

                <button
                  onClick={() => navigate("/checkout")}
                  className="w-full mt-8 bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  Proceed To Checkout
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="w-full mt-4 border py-4 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Continue Shopping
                </button>

              </div>

            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default Cart;