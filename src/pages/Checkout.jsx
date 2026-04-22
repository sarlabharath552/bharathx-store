import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

function Checkout() {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.qty),
    0
  );

  const shipping = subtotal > 5000 ? 0 : 199;
  const tax = Math.round(subtotal * 0.05);

  let discount = 0;

  if (coupon.trim().toUpperCase() === "BHARATH10") {
    discount = Math.round(subtotal * 0.1);
  }

  const total = subtotal + shipping + tax - discount;

  const validateForm = () => {
    if (!form.firstName) return "Enter first name";
    if (!form.lastName) return "Enter last name";
    if (!form.email) return "Enter email";
    if (!form.phone) return "Enter phone number";
    if (!form.address) return "Enter address";
    if (!form.city) return "Enter city";
    if (!form.pincode) return "Enter pincode";
    if (cartItems.length === 0) return "Your cart is empty";

    return null;
  };

  const handlePlaceOrder = async () => {
    const error = validateForm();

    if (error) {
      alert(error);
      return;
    }

    try {
      setLoading(true);

      await axios.post("/orders/", {
        email: form.email,
        amount: total,
        payment_method: paymentMethod,
      });

      alert("Order Placed Successfully!");

      setCartItems([]);
      navigate("/success");
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-8">
            {/* Heading */}
            <div>
              <h1 className="text-5xl font-bold mb-3">
                Checkout
              </h1>

              <p className="text-gray-500">
                Complete your purchase securely
              </p>
            </div>

            {/* Address Form */}
            <div className="bg-white rounded-3xl shadow p-8">
              <h2 className="text-2xl font-bold mb-6">
                Shipping Address
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl"
                />

                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl"
                />

                <input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl md:col-span-2"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl md:col-span-2"
                />

                <input
                  name="address"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl md:col-span-2"
                />

                <input
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl"
                />

                <input
                  name="pincode"
                  placeholder="Pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  className="border px-5 py-4 rounded-2xl"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-3xl shadow p-8">
              <h2 className="text-2xl font-bold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">
                <label className="border rounded-2xl p-5 flex gap-4 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "card"}
                    onChange={() =>
                      setPaymentMethod("card")
                    }
                  />
                  Credit / Debit Card
                </label>

                <label className="border rounded-2xl p-5 flex gap-4 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "upi"}
                    onChange={() =>
                      setPaymentMethod("upi")
                    }
                  />
                  UPI / Razorpay
                </label>

                <label className="border rounded-2xl p-5 flex gap-4 cursor-pointer">
                  <input
                    type="radio"
                    checked={paymentMethod === "cod"}
                    onChange={() =>
                      setPaymentMethod("cod")
                    }
                  />
                  Cash On Delivery
                </label>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid md:grid-cols-3 gap-5">
              <div className="bg-white p-5 rounded-2xl shadow text-center">
                🔒 Secure Checkout
              </div>

              <div className="bg-white p-5 rounded-2xl shadow text-center">
                🚚 Fast Delivery
              </div>

              <div className="bg-white p-5 rounded-2xl shadow text-center">
                ↩ Easy Returns
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="bg-white rounded-3xl shadow p-8 sticky top-28">
              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              {/* Products */}
              <div className="space-y-5 mb-8 max-h-72 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">
                    Cart is empty
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      <div className="flex-1">
                        <p className="font-semibold">
                          {item.name}
                        </p>

                        <p className="text-gray-500 text-sm">
                          Qty: {item.qty}
                        </p>

                        <p className="font-semibold mt-1">
                          ₹
                          {Number(item.price) *
                            Number(item.qty)}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Coupon */}
              <div className="flex gap-3 mb-8">
                <input
                  value={coupon}
                  onChange={(e) =>
                    setCoupon(e.target.value)
                  }
                  placeholder="Coupon Code"
                  className="flex-1 border px-4 py-3 rounded-full"
                />

                <button className="bg-black text-white px-6 rounded-full">
                  Apply
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 border-t pt-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0
                      ? "Free"
                      : `₹${shipping}`}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{tax}</span>
                </div>

                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              </div>

              <div className="flex justify-between text-2xl font-bold border-t mt-6 pt-6">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full bg-black text-white py-5 rounded-full mt-8 text-lg hover:bg-gray-800 transition disabled:opacity-60"
              >
                {loading
                  ? "Processing..."
                  : "Place Order"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY BAR */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl p-4 z-50">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              Total
            </p>

            <p className="font-bold text-xl">
              ₹{total}
            </p>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="bg-black text-white px-8 py-3 rounded-full disabled:opacity-60"
          >
            {loading ? "..." : "Buy Now"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;