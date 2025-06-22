export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">
              ₹{(product.price_cents)}
            </p>
          </div>

          <div className="product-overlay">View Details</div>
        </div>
      ))}
    </div>
  );
}
