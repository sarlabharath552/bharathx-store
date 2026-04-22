import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function FloatingCart() {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <button
      onClick={() => navigate("/cart")}
      className="fixed bottom-24 right-6 z-50 h-16 w-16 rounded-full bg-black text-white dark:bg-white dark:text-black shadow-2xl flex items-center justify-center"
    >
      <FaShoppingBag />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white h-6 w-6 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
}

export default FloatingCart;