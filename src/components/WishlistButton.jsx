import { useState } from "react";
import { FaHeart } from "react-icons/fa";

function WishlistButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="absolute top-4 right-4 bg-white h-10 w-10 rounded-full shadow flex items-center justify-center"
    >
      <FaHeart
        className={`transition ${
          liked
            ? "text-red-500 scale-125"
            : "text-gray-400"
        }`}
      />
    </button>
  );
}

export default WishlistButton;