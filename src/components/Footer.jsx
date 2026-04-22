function Footer() {
  return (
    <footer className="bg-black text-white py-14 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">BharathX</h2>
          <p className="text-gray-400">
            Premium sneakers & streetwear built for modern creators.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-3 rounded-full text-black"
          />
          <button className="mt-3 w-full bg-white text-black py-3 rounded-full font-semibold">
            Subscribe
          </button>
        </div>

      </div>

      <p className="text-center text-gray-500 mt-12">
        © 2026 BharathX Store. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;