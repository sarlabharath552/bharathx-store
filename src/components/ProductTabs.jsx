import { useState } from "react";

function ProductTabs() {
  const [tab, setTab] = useState("details");

  return (
    <div className="mt-16">

      <div className="flex gap-6 border-b pb-4">

        <button
          onClick={() => setTab("details")}
          className={tab==="details" ? "font-bold" : ""}
        >
          Details
        </button>

        <button
          onClick={() => setTab("reviews")}
          className={tab==="reviews" ? "font-bold" : ""}
        >
          Reviews
        </button>

        <button
          onClick={() => setTab("shipping")}
          className={tab==="shipping" ? "font-bold" : ""}
        >
          Shipping
        </button>

      </div>

      <div className="pt-6 text-gray-600">

        {tab === "details" &&
          <p>
            Premium performance sneaker with lightweight cushioning and breathable comfort.
          </p>
        }

        {tab === "reviews" &&
          <div className="space-y-4">
            <p>⭐⭐⭐⭐⭐ Amazing comfort - Rahul</p>
            <p>⭐⭐⭐⭐ Great quality - Priya</p>
          </div>
        }

        {tab === "shipping" &&
          <p>
            Free delivery in 2-4 days. Easy 7 day returns.
          </p>
        }

      </div>

    </div>
  );
}

export default ProductTabs;