import { useEffect, useState } from "react";

const names = ["Rahul", "Priya", "Arjun", "Sneha"];
const cities = ["Hyderabad", "Bangalore", "Mumbai", "Delhi"];
const items = ["Air Max Pro", "Neo Runner", "Street Force"];

function PurchasePopup() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const msg = `${names[Math.floor(Math.random()*4)]} from ${
        cities[Math.floor(Math.random()*4)]
      } bought ${
        items[Math.floor(Math.random()*3)]
      }`;

      setText(msg);
      setShow(true);

      setTimeout(() => setShow(false), 4000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 bg-white shadow-2xl rounded-2xl px-5 py-4 z-50">
      🛒 {text}
    </div>
  );
}

export default PurchasePopup;