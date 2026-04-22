import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductSlider() {
  const items = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
  ];

  return (
    <section className="py-20 px-6 bg-black text-white">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Featured Drops
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="shoe"
                className="rounded-3xl h-96 w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default ProductSlider;