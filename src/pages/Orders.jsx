import { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await axios.get("/orders/user@gmail.com");
    setOrders(res.data);
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6 max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          My Orders
        </h1>

        <div className="space-y-5">

          {orders.map((item) => (
            <div
              key={item.id}
              className="border p-6 rounded-2xl"
            >
              <p>Order ID: {item.id}</p>
              <p>Amount: ₹{item.amount}</p>
              <p>Status: {item.status}</p>
            </div>
          ))}

        </div>

      </section>
    </>
  );
}

export default Orders;