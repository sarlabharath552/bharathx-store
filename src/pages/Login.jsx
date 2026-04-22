import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/login", {
        email,
        password,
      });

      login(res.data.access_token);
      navigate("/profile");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex justify-center items-center pt-24">
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-xl p-10 rounded-3xl w-full max-w-md space-y-5"
        >
          <h1 className="text-4xl font-bold text-center">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-5 py-4 rounded-full"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border px-5 py-4 rounded-full"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-black text-white py-4 rounded-full">
            Login
          </button>

          <p className="text-center">
            <Link to="/register">Register</Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Login;