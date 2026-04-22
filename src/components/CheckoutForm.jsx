function CheckoutForm() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow">

      <h2 className="text-3xl font-bold mb-8">
        Shipping Address
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input placeholder="First Name"
          className="border px-5 py-4 rounded-2xl" />

        <input placeholder="Last Name"
          className="border px-5 py-4 rounded-2xl" />

        <input placeholder="Email"
          className="border px-5 py-4 rounded-2xl md:col-span-2" />

        <input placeholder="Phone"
          className="border px-5 py-4 rounded-2xl md:col-span-2" />

        <input placeholder="Address Line 1"
          className="border px-5 py-4 rounded-2xl md:col-span-2" />

        <input placeholder="City"
          className="border px-5 py-4 rounded-2xl" />

        <input placeholder="Pincode"
          className="border px-5 py-4 rounded-2xl" />

      </div>

    </div>
  );
}

export default CheckoutForm;