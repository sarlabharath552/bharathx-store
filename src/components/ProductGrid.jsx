import { useNavigate } from "react-router-dom";

function ProductGrid({ title, items }) {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          {title}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
              className="bg-gray-100 rounded-3xl overflow-hidden cursor-pointer shadow"
            >
              <img
                src={item.image}
                className="h-72 w-full object-cover hover:scale-110 transition"
              />

              <div className="p-5">
                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>

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

export default ProductGrid;