function PaymentMethods() {
  return (
    <div className="bg-white p-8 rounded-3xl shadow mt-8">

      <h2 className="text-3xl font-bold mb-8">
        Payment Method
      </h2>

      <div className="space-y-4">

        <label className="border p-5 rounded-2xl flex gap-4 cursor-pointer">
          <input type="radio" name="pay" defaultChecked />
          Credit / Debit Card
        </label>

        <label className="border p-5 rounded-2xl flex gap-4 cursor-pointer">
          <input type="radio" name="pay" />
          :contentReference[oaicite:2]{index=2} / UPI
        </label>

        <label className="border p-5 rounded-2xl flex gap-4 cursor-pointer">
          <input type="radio" name="pay" />
          Cash on Delivery
        </label>

      </div>

    </div>
  );
}

export default PaymentMethods;