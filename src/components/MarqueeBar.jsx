import { motion } from "framer-motion";

function MarqueeBar() {
  const text = [
    "FREE SHIPPING",
    "NEW ARRIVALS",
    "LIMITED DROP",
    "PREMIUM COLLECTION",
    "SHOP NOW",
    "EXCLUSIVE DEALS",
  ];

  return (
    <section className="bg-black text-white overflow-hidden border-y border-gray-800">

      <div className="relative py-4">

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="flex gap-12 whitespace-nowrap text-sm md:text-base font-semibold tracking-widest uppercase"
        >
          {[...text, ...text, ...text].map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-3"
            >
              {item}
              <span className="text-gray-500 text-lg">•</span>
            </span>
          ))}
        </motion.div>

      </div>

    </section>
  );
}

export default MarqueeBar;