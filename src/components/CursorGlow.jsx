import { useEffect, useState } from "react";

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-black dark:bg-white transition-all duration-75"
      style={{
        left: pos.x - 120,
        top: pos.y - 120,
      }}
    />
  );
}

export default CursorGlow;