import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "../api/axios";
import WishlistButton from "./WishlistButton";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("/products/");
      setProducts(res.data);
    } catch (error) {
      console.log("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-white dark:bg-black dark:text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Trending Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-100 dark:bg-zinc-900 rounded-2xl h-[420px] animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-white dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Trending Products
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => navigate(`/product/${item.id}`)}
              className="bg-gray-100 dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <WishlistButton />

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.category}
                </p>

                <h3 className="text-xl font-semibold mb-2">
                  {item.name}
                </h3>

                <p className="text-2xl font-bold">
                  ₹{item.price}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/product/${item.id}`);
                  }}
                  className="mt-5 w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  View Product
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;