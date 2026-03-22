import "../../styles/ProductCard.css";

function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p className="price">${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;