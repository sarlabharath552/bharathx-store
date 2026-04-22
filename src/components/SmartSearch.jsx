import { useState } from "react";

const data = [
  "Air Max",
  "Air Jordan",
  "Street Force",
  "Neo Runner",
  "Urban Motion"
];

function SmartSearch() {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative max-w-md mx-auto">

      <input
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border px-5 py-4 rounded-full"
      />

      {query && (
        <div className="absolute top-16 w-full bg-white shadow-xl rounded-2xl p-3 z-50">
          {filtered.map((item, index) => (
            <p
              key={index}
              className="p-2 hover:bg-gray-100 rounded-xl cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      )}

    </div>
  );
}

export default SmartSearch;