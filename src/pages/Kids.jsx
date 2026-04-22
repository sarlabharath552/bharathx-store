// src/pages/Kids.jsx

import { useState } from "react";
import Navbar from "../components/Navbar";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

function Kids() {
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  let items = products.filter(
    (item) =>
      item.category === "kids" &&
      (!size || item.size == size) &&
      (!color || item.color === color) &&
      item.price <= maxPrice
  );

  if (sort === "low") {
    items.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    items.sort((a, b) => b.price - a.price);
  }

  const perPage = 8;
  const totalPages = Math.ceil(items.length / perPage);

  const start = (currentPage - 1) * perPage;
  const paginated = items.slice(start, start + perPage);

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10">

          {/* Sidebar */}
          <div>
            <Filters
              size={size}
              setSize={setSize}
              color={color}
              setColor={setColor}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>

          {/* Products */}
          <div className="lg:col-span-3">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

              <h1 className="text-4xl font-bold">
                Kids Collection
              </h1>

              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setCurrentPage(1);
                }}
                className="border px-5 py-3 rounded-full bg-white"
              >
                <option value="default">Sort By</option>
                <option value="low">Price Low to High</option>
                <option value="high">Price High to Low</option>
              </select>

            </div>

            <p className="text-gray-500 mb-8">
              Showing {items.length} products
            </p>

            <ProductGrid title="" items={paginated} />

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />

          </div>

        </div>
      </section>
    </>
  );
}

export default Kids;