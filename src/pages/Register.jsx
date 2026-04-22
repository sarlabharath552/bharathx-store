import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "../api/axios";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/register", {
        name,
        email,
        password,
      });

      alert(res.data.message);

      setName("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      alert("Registration Failed");
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center px-6 pt-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-md"
        >
          <h1 className="text-4xl font-bold mb-3 text-center">
            Create Account
          </h1>

          <p className="text-gray-500 text-center mb-8">
            Join BharathX today.
          </p>

          <form onSubmit={handleRegister} className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border px-5 py-4 rounded-full outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-5 py-4 rounded-full outline-none focus:border-black"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-5 py-4 rounded-full outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-semibold">
              Login
            </Link>
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default Register;