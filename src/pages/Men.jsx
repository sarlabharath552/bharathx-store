import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";

function Men() {
  const men = products.filter(
    (item) => item.category === "men"
  );

  return (
    <>
      <Navbar />
      <div className="pt-24">
        <ProductGrid
          title="Men Collection"
          items={men}
        />
      </div>
    </>
  );
}

export default Men;