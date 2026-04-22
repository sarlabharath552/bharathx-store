function RecentlyViewed() {
  const viewed = JSON.parse(
    localStorage.getItem("viewed") || "[]"
  );

  if (viewed.length === 0) return null;

  return (
    <section className="py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Recently Viewed
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {viewed.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-2xl">
              <img
                src={item.image}
                className="h-48 w-full object-cover rounded-xl"
              />
              <p className="mt-3 font-semibold">{item.name}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default RecentlyViewed;