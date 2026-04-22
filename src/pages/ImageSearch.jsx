import { useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

function ImageSearch() {
  const [image, setImage] = useState(null);
  const [results, setResults] = useState([]);

  const handleUpload = async () => {
    const form = new FormData();
    form.append("file", image);

    const res = await axios.post(
      "/ai/image-search",
      form
    );

    setResults(res.data.matches);
  };

  return (
    <>
      <Navbar />

      <section className="pt-32 px-6 text-center">

        <h1 className="text-5xl font-bold mb-8">
          Search by Image
        </h1>

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
        />

        <button
          onClick={handleUpload}
          className="bg-black text-white px-8 py-4 rounded-full ml-4"
        >
          Upload
        </button>

        <div className="mt-10 space-y-3">
          {results.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

      </section>
    </>
  );
}

export default ImageSearch;