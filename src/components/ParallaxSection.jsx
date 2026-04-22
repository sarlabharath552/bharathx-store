function ParallaxSection() {
  return (
    <section
      className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400')",
      }}
    >
      <div className="bg-black/50 text-white p-10 rounded-3xl text-center">

        <h2 className="text-6xl font-bold mb-4">
          MOVE DIFFERENT
        </h2>

        <p className="text-xl">
          Premium streetwear built for champions.
        </p>

      </div>
    </section>
  );
}

export default ParallaxSection;