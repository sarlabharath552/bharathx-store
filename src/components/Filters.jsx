function Filters({
  size,
  setSize,
  color,
  setColor,
  maxPrice,
  setMaxPrice
}) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow sticky top-28">

      <h2 className="text-2xl font-bold mb-6">
        Filters
      </h2>

      <div className="mb-6">
        <label className="font-semibold">Size</label>

        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border px-4 py-3 rounded-xl mt-2"
        >
          <option value="">All</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="font-semibold">Color</label>

        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full border px-4 py-3 rounded-xl mt-2"
        >
          <option value="">All</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div>
        <label className="font-semibold">
          Max Price ₹{maxPrice}
        </label>

        <input
          type="range"
          min="1000"
          max="10000"
          step="500"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="w-full mt-3"
        />
      </div>

    </div>
  );
}

export default Filters;