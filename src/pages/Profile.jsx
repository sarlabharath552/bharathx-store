import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { logout } = useAuth();

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome User
        </h1>

        <button
          onClick={logout}
          className="bg-black text-white px-8 py-4 rounded-full"
        >
          Logout
        </button>
      </section>
    </>
  );
}

export default Profile;