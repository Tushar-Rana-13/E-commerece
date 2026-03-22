import ProductCard from "./ProductCard";
import "../../styles/ProductRow.css";

function ProductRow({ title }) {

  const dummyProducts = Array(6).fill({
    title: "Sample Product",
    price: 99,
    image: "https://via.placeholder.com/200"
  });

  return (
    <div className="product-row">
      <h2>{title}</h2>

      <div className="row-products">
        {dummyProducts.map((item, index) => (
          <ProductCard
            key={index}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductRow;