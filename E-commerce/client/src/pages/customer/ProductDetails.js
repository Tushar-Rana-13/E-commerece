import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import API from "../../api"
import { CartContext } from "../../context/CartContext"

function ProductDetails(){

const {id} = useParams()
const [product,setProduct] = useState({})
const { addToCart } = useContext(CartContext)

useEffect(()=>{

const fetchProduct = async ()=>{
const res = await axios.get(`${API}/products/${id}`)
setProduct(res.data)
}

fetchProduct()

},[id])

return(

<div style={{padding:"20px"}}>

<h2>{product.title}</h2>

{product.image && (
<img src={product.image} width="300"/>
)}

<p>{product.description}</p>
<h3>₹{product.price}</h3>

<button onClick={()=>addToCart(product)}>
Add to Cart
</button>

</div>

)

}

export default ProductDetails