import { useState } from "react";
import axios from "../api/axios";

function SizeAdvisor() {
  const [cm, setCm] = useState("");
  const [size, setSize] = useState("");

  const getSize = async () => {
    const res = await axios.post("/ai/size", {
      foot_cm: Number(cm),
    });

    setSize(res.data.recommended_size);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        AI Size Finder 📏
      </h2>

      <input
        value={cm}
        onChange={(e) => setCm(e.target.value)}
        placeholder="Enter foot length in cm"
        className="w-full border px-5 py-4 rounded-full"
      />

      <button
        onClick={getSize}
        className="mt-4 bg-black text-white px-6 py-3 rounded-full"
      >
        Find Size
      </button>

      {size && (
        <p className="mt-4 font-bold text-xl">
          Recommended Size: UK {size}
        </p>
      )}
    </div>
  );
}

export default SizeAdvisor;