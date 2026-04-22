function StickyBuyBar({ price }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-2xl z-50 p-4 md:hidden">

      <div className="flex items-center justify-between max-w-xl mx-auto">

        <div>
          <p className="text-gray-500 text-sm">
            Price
          </p>
          <p className="font-bold text-xl">
            ₹{price}
          </p>
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-full">
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default StickyBuyBar;