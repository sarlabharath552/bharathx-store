import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-running-on-a-track-1560704502472?download=1080p"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/45 flex items-center justify-center px-6">

        <div className="text-center text-white max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-bold mb-6"
          >
            JUST MOVE
          </motion.h1>

          <p className="text-xl md:text-2xl mb-8">
            Engineered for speed. Designed for greatness.
          </p>

          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;