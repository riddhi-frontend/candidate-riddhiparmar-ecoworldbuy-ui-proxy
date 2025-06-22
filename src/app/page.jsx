'use client'
import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);

        // Stretch Goal: POST credits
        fetch("/api/credits/event", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: "test@demo.io", credits: 5 }),
        }).then(() => console.log("Credits sent"));
      });
  }, []);

  return (
    <main className="px-4 py-10 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-[var(--primary-color)]">
          EcoWorldBuy –{" "}
          <span>Shop Sustainably, Live Consciously</span>
        </h1>
        <button className="bg-[var(--primary-color)]">
          Browse Products
        </button>

      </section>

      {/* Product Grid */}
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <div className="text-center text-gray-500">Loading products...</div>
      )}
    </main>
  );
}
