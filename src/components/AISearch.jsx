import { useState } from "react";
import axios from "../api/axios";

function AISearch() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const searchProduct = async () => {
    const res = await axios.get(
      `/ai/search?q=${query}`
    );

    setResult(res.data.result);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Smart Product Search 🔍
      </h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="lightweight running shoe under 7000"
        className="w-full border px-5 py-4 rounded-full"
      />

      <button
        onClick={searchProduct}
        className="mt-4 bg-black text-white px-6 py-3 rounded-full"
      >
        Search
      </button>

      {result && (
        <div className="mt-5 bg-gray-100 p-4 rounded-2xl">
          <h3 className="font-bold">{result.name}</h3>
          <p>{result.text}</p>
        </div>
      )}
    </div>
  );
}

export default AISearch;