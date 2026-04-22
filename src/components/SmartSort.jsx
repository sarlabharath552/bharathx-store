function SmartSort() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex justify-end">

      <select className="border px-5 py-3 rounded-full">
        <option>Trending</option>
        <option>Price Low to High</option>
        <option>Newest</option>
        <option>Top Rated</option>
      </select>

    </div>
  );
}

export default SmartSort;