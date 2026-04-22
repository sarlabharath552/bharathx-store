import { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const orderRes = await axios.get("/orders/user@gmail.com");
    const productRes = await axios.get("/products/");

    setOrders(orderRes.data);
    setProducts(productRes.data);
  };

  const totalRevenue = orders.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const chartData = orders.map((item) => ({
    name: `#${item.id}`,
    revenue: item.amount,
  }));

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6 pb-20 bg-gray-50 min-h-screen">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-5xl font-bold mb-10">
            Admin Dashboard
          </h1>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-white p-8 rounded-3xl shadow">
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-3xl font-bold mt-2">
                ₹{totalRevenue}
              </h2>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <p className="text-gray-500">Orders</p>
              <h2 className="text-3xl font-bold mt-2">
                {orders.length}
              </h2>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow">
              <p className="text-gray-500">Products</p>
              <h2 className="text-3xl font-bold mt-2">
                {products.length}
              </h2>
            </div>

          </div>

          {/* Chart */}
          <div className="bg-white p-8 rounded-3xl shadow mb-10">

            <h2 className="text-2xl font-bold mb-6">
              Revenue Analytics
            </h2>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" radius={[8,8,0,0]} />
              </BarChart>
            </ResponsiveContainer>

          </div>

          {/* Orders Table */}
          <div className="bg-white p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Recent Orders
            </h2>

            <div className="space-y-4">

              {orders.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border p-5 rounded-2xl"
                >
                  <div>
                    <p className="font-semibold">
                      Order #{item.id}
                    </p>
                    <p className="text-gray-500">
                      ₹{item.amount}
                    </p>
                  </div>

                  <span className="text-green-600 font-semibold">
                    {item.status}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default AdminDashboard;