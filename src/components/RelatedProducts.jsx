function RelatedProducts() {
  const items = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
  ];

  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold mb-10">
        You May Also Like
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {items.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-3xl h-80 w-full object-cover"
          />
        ))}

      </div>

    </section>
  );
}

export default RelatedProducts;