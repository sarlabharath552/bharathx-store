import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import ImageGallery from "../components/ImageGallery";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";
import StickyBuyBar from "../components/StickyBuyBar";

import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("black");
  const [qty, setQty] = useState(1);

  const product =
    products.find(
      (item) => item.id === Number(id)
    ) || {
      id: 1,
      name: "Air Runner Max",
      price: 7999,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000",
    };

  const galleryImages = [
    product.image,
    product.image,
    product.image,
  ];

  useEffect(() => {
    const oldViewed =
      JSON.parse(
        localStorage.getItem("viewed")
      ) || [];

    const filtered = oldViewed.filter(
      (item) => item.id !== product.id
    );

    const updated = [
      product,
      ...filtered,
    ].slice(0, 4);

    localStorage.setItem(
      "viewed",
      JSON.stringify(updated)
    );
  }, [product]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select size");
      return;
    }

    addToCart({
      ...product,
      qty,
      size: selectedSize,
      color: selectedColor,
    });

    alert("Added to cart");
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 pb-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <div>
            <ImageGallery
              images={galleryImages}
            />
          </div>

          {/* RIGHT SIDE */}
          <div>

            <p className="text-gray-500 mb-2 capitalize">
              {product.category} Collection
            </p>

            <h1 className="text-5xl font-bold mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-3xl font-semibold mb-6">
              ₹{product.price}
            </p>

            <div className="mb-8">
              <p className="text-green-600 font-medium">
                In Stock
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Free delivery in 2-4 days
              </p>
            </div>

            {/* SIZE */}
            <div className="mb-8">

              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">
                  Select Size
                </h3>

                <button className="text-sm text-gray-500 hover:text-black">
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3">

                {[7, 8, 9, 10].map(
                  (size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(
                          size
                        )
                      }
                      className={`py-3 rounded-xl border transition ${
                        selectedSize ===
                        size
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-black"
                      }`}
                    >
                      {size}
                    </button>
                  )
                )}

              </div>

            </div>

            {/* COLORS */}
            <div className="mb-8">

              <h3 className="font-semibold mb-4">
                Select Color
              </h3>

              <div className="flex gap-3">

                {[
                  "black",
                  "white",
                  "red",
                  "blue",
                ].map((color) => (
                  <button
                    key={color}
                    onClick={() =>
                      setSelectedColor(
                        color
                      )
                    }
                    className={`h-10 w-10 rounded-full border-2 ${
                      selectedColor ===
                      color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor:
                        color,
                    }}
                  />
                ))}

              </div>

            </div>

            {/* QUANTITY */}
            <div className="mb-10">

              <h3 className="font-semibold mb-4">
                Quantity
              </h3>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    qty > 1 &&
                    setQty(
                      qty - 1
                    )
                  }
                  className="h-10 w-10 border rounded-full"
                >
                  -
                </button>

                <span className="text-xl font-semibold">
                  {qty}
                </span>

                <button
                  onClick={() =>
                    setQty(
                      qty + 1
                    )
                  }
                  className="h-10 w-10 border rounded-full"
                >
                  +
                </button>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="space-y-4 mb-10">

              <button
                onClick={
                  handleAddToCart
                }
                className="w-full bg-black text-white py-5 rounded-full text-lg font-semibold hover:bg-gray-800 transition"
              >
                Add To Cart
              </button>

              <button className="w-full border py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
                Buy Now
              </button>

            </div>

            {/* TRUST BADGES */}
            <div className="space-y-2 text-sm text-gray-600 mb-10">

              <p>
                ✔ Free Shipping
              </p>

              <p>
                ✔ Easy Returns
              </p>

              <p>
                ✔ Secure Payment
              </p>

            </div>

            {/* TABS */}
            <ProductTabs />

          </div>

        </div>

        {/* RELATED PRODUCTS */}
        <div className="max-w-7xl mx-auto mt-20">
          <RelatedProducts />
        </div>

      </section>

      {/* MOBILE STICKY BUY BAR */}
      <StickyBuyBar
        price={product.price}
      />
    </>
  );
}

export default ProductDetails;