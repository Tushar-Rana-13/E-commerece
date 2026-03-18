import "./productCard.css"
import { FaShoppingCart } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function ProductCard({ id, title, price, image }) {

const navigate = useNavigate()
const { addToCart } = useContext(CartContext)

const handleAddToCart = (e) => {
    e.stopPropagation() 

    addToCart({ id, title, price, image })
}

return (

<div className="productCard" onClick={()=>navigate(`/product/${id}`)}>

<img src={image} alt={title} />

<h3 className="productTitle">{title}</h3>

<p className="productPrice">${price}</p>

<button className="addCartBtn" onClick={handleAddToCart}>

<FaShoppingCart /> Add to Cart

</button>

</div>

)
}

export default ProductCard