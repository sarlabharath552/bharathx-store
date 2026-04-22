function Testimonials() {
  const data = [
    {
      name: "Rahul",
      text: "Best sneakers I've ever bought.",
    },
    {
      name: "Priya",
      text: "Premium quality and fast delivery.",
    },
    {
      name: "Arjun",
      text: "Looks like Nike. Feels better.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          What Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-3xl shadow"
            >
              <p className="text-xl mb-5">⭐⭐⭐⭐⭐</p>
              <p className="text-gray-700 mb-5">
                "{item.text}"
              </p>
              <h3 className="font-bold">{item.name}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;