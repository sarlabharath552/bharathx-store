function OrderSummary() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow sticky top-28">

      <h2 className="text-3xl font-bold mb-8">
        Order Summary
      </h2>

      <div className="space-y-5 border-b pb-6">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹7,999</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹320</span>
        </div>

      </div>

      <div className="flex justify-between text-2xl font-bold py-6">
        <span>Total</span>
        <span>₹8,319</span>
      </div>

      <div className="flex gap-3 mb-6">

        <input
          placeholder="Coupon Code"
          className="flex-1 border px-4 py-3 rounded-full"
        />

        <button className="bg-black text-white px-6 rounded-full">
          Apply
        </button>

      </div>

      <button className="w-full bg-black text-white py-5 rounded-full text-lg">
        Place Order
      </button>

    </div>
  );
}

export default OrderSummary;