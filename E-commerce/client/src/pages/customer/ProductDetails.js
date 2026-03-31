import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import API from "../../api"
import { CartContext } from "../../context/CartContext"
import "../../styles/ProductDetails.css"

function ProductDetails(){

const {id} = useParams()
const [product,setProduct] = useState(null)

// ✅ THIS WAS MISSING
const { addToCart } = useContext(CartContext)

useEffect(()=>{

const fetchProduct = async ()=>{
try{
const res = await axios.get(`${API}/products/${id}`)
setProduct(res.data)
}catch(err){
console.log(err)
}
}

fetchProduct()

},[id])

if(!product) return <h2 style={{padding:"20px"}}>Loading...</h2>

return(

<div className="productDetails">

<div className="imageSection">
<img src={product.image} alt={product.title}/>
</div>

<div className="infoSection">

<h2>{product.title}</h2>

<p className="price">₹{product.price}</p>

<p className="desc">{product.description}</p>

<button onClick={() => addToCart(product)}>
Add to Cart
</button>

</div>

</div>

)

}

export default ProductDetails 