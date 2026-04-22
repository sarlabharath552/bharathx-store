import { useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

function Admin() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/products/", {
      ...form,
      price: Number(form.price),
    });

    alert("Product Added");
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6">
        <div className="max-w-xl mx-auto bg-white shadow-xl p-10 rounded-3xl">

          <h1 className="text-4xl font-bold mb-8">
            Add Product
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input name="name" placeholder="Name"
              onChange={handleChange}
              className="w-full border px-5 py-3 rounded-full"
            />

            <input name="price" placeholder="Price"
              onChange={handleChange}
              className="w-full border px-5 py-3 rounded-full"
            />

            <input name="image" placeholder="Image URL"
              onChange={handleChange}
              className="w-full border px-5 py-3 rounded-full"
            />

            <input name="category" placeholder="Category"
              onChange={handleChange}
              className="w-full border px-5 py-3 rounded-full"
            />

            <textarea name="description"
              placeholder="Description"
              onChange={handleChange}
              className="w-full border px-5 py-3 rounded-2xl"
            />

            <button className="w-full bg-black text-white py-4 rounded-full">
              Add Product
            </button>

          </form>

        </div>
      </section>
    </>
  );
}

export default Admin;