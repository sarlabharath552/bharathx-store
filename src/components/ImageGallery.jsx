import { useState } from "react";

function ImageGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="grid md:grid-cols-5 gap-4">

      <div className="md:col-span-1 space-y-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className="h-24 w-full object-cover rounded-2xl cursor-pointer border"
          />
        ))}
      </div>

      <div className="md:col-span-4 overflow-hidden rounded-3xl bg-gray-100">
        <img
          src={selected}
          className="w-full h-[600px] object-cover hover:scale-110 transition duration-500"
        />
      </div>

    </div>
  );
}

export default ImageGallery;