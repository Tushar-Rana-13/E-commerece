import { useNavigate } from "react-router-dom"
import "./productCard.css"

function ProductCard({ product }) {

  const navigate = useNavigate()

  return (

    <div className="productCard">

      <div 
        className="productImage"
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <img src={product.image} alt={product.title}/>
      </div>

      <div className="productInfo">

        <h4 onClick={() => navigate(`/product/${product._id}`)}>
          {product.title}
        </h4>

        <p>₹{product.price}</p>

        

      </div>

    </div>
  )
}

export default ProductCard