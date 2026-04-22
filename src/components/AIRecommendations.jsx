function AIRecommendations() {
  const items = [
    {
      name: "Air Zoom X",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    },
    {
      name: "Street Neo",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    },
    {
      name: "Urban Elite",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Recommended For You
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-3xl shadow"
            >
              <img
                src={item.image}
                className="h-72 w-full object-cover rounded-2xl"
              />
              <p className="mt-4 text-xl font-semibold">
                {item.name}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AIRecommendations;