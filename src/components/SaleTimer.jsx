import { useEffect, useState } from "react";

function SaleTimer() {
  const [time, setTime] = useState(5400);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const h = String(Math.floor(time / 3600)).padStart(2,"0");
  const m = String(Math.floor((time % 3600)/60)).padStart(2,"0");
  const s = String(time % 60).padStart(2,"0");

  return (
    <section className="bg-red-500 text-white py-4 text-center font-bold text-xl">
      🔥 Flash Sale Ends In: {h}:{m}:{s}
    </section>
  );
}

export default SaleTimer;