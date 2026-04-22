import { motion } from "framer-motion";

function Promo() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-widest text-gray-400 mb-3">
            New Collection
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            Built To Move.
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Discover performance sneakers and streetwear designed for speed,
            comfort, and everyday style.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Shop Collection
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200"
            alt="promo"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

      </div>

    </section>
  );
}

export default Promo;