import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("/products/");
    setProducts(res.data);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Trending Products
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="bg-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-72 w-full object-cover hover:scale-110 transition"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Products;