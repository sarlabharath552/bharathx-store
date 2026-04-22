import { useEffect, useState } from "react";
import axios from "../api/axios";

function AdminAI() {
  const [data, setData] = useState({});

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get("/ai/forecast");
    setData(res.data);
  };

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-10">
        AI Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-8 rounded-3xl shadow">
          <h2 className="text-2xl font-bold">
            Forecast Sales
          </h2>
          <p className="mt-4 text-xl">
            {data.next_month_sales}
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow">
          <h2 className="text-2xl font-bold">
            Growth
          </h2>
          <p className="mt-4 text-xl">
            {data.growth}
          </p>
        </div>

      </div>
    </div>
  );
}

export default AdminAI;