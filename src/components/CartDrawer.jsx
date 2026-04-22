import { useCart } from "../context/CartContext";

function CartDrawer({ open, setOpen }) {
  const { cartItems } = useCart();

  return (
    <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 transition-all ${
      open ? "translate-x-0" : "translate-x-full"
    }`}>

      <div className="p-6 flex justify-between">
        <h2 className="text-2xl font-bold">Cart</h2>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>

      <div className="p-6 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-2xl">
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default CartDrawer;