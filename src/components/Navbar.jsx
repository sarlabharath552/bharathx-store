import { motion } from "framer-motion";
import {
  FaSearch,
  FaShoppingBag,
  FaUser
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { totalItems } = useCart();
  const { isAuthenticated } = useAuth();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
            BharathX
          </h1>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-gray-500 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Men
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Women
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Kids
          </li>

          <li className="cursor-pointer hover:text-gray-500 transition">
            Sale
          </li>
        </ul>

        {/* Right Icons */}
        <div className="flex gap-5 text-xl items-center">

          {/* Search */}
          <FaSearch className="cursor-pointer hover:scale-110 transition" />

          {/* User */}
          {isAuthenticated ? (
            <Link to="/profile">
              <FaUser className="cursor-pointer hover:scale-110 transition" />
            </Link>
          ) : (
            <Link to="/login">
              <FaUser className="cursor-pointer hover:scale-110 transition" />
            </Link>
          )}

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer hover:scale-110 transition"
          >
            <FaShoppingBag />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;