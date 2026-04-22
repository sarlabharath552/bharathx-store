import { useEffect, useState } from "react";

function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">

      <div className="text-center text-white">

        <div className="h-16 w-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

        <h1 className="text-4xl font-bold tracking-widest">
          BharathX
        </h1>

      </div>

    </div>
  );
}

export default Loader;