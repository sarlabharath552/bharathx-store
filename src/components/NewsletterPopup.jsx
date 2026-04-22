import { useEffect, useState } from "react";

function NewsletterPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center px-6">

      <div className="bg-white p-10 rounded-3xl max-w-md w-full text-center">

        <h2 className="text-3xl font-bold mb-4">
          Get 10% Off
        </h2>

        <p className="text-gray-500 mb-6">
          Join our newsletter for exclusive drops.
        </p>

        <input
          placeholder="Enter email"
          className="w-full border px-5 py-4 rounded-full mb-4"
        />

        <button className="w-full bg-black text-white py-4 rounded-full">
          Subscribe
        </button>

        <button
          onClick={() => setShow(false)}
          className="mt-4 text-gray-500"
        >
          Close
        </button>

      </div>

    </div>
  );
}

export default NewsletterPopup;