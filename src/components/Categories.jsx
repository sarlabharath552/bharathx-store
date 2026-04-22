import { motion } from "framer-motion";

const data = [
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  },
  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  {
    title: "Kids",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
  },
];

function Categories() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/35 flex items-end p-8">
                <h3 className="text-white text-3xl font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;