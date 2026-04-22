import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import ImageSearch from "./pages/ImageSearch";
import AdminAI from "./pages/AdminAI";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/checkout" element={<Checkout />} />
        
        <Route path="/orders" element={<Orders />} />

        <Route path="/dashboard" element={<AdminDashboard />} />

        <Route path="/men" element={<Men />} />
      
        <Route path="/women" element={<Women />} />
       
        <Route path="/kids" element={<Kids />} />

        <Route path="/image-search" element={<ImageSearch />} />

        <Route path="/admin-ai" element={<AdminAI />} />


        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;