function StickyCheckoutBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl p-4 md:hidden z-50">

      <div className="flex justify-between items-center">

        <div>
          <p className="text-sm text-gray-500">
            Total
          </p>
          <p className="font-bold text-xl">
            ₹8,319
          </p>
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-full">
          Place Order
        </button>

      </div>

    </div>
  );
}

export default StickyCheckoutBar;