import { useNavigate } from "react-router-dom"

function ProductCard({product}){

const navigate = useNavigate()

return(

<div 
onClick={()=>navigate(`/product/${product._id}`)}
style={{
border:"1px solid #ccc",
padding:"10px",
cursor:"pointer",
width:"200px"
}}>

{product.image && (
<img src={product.image} alt="" style={{width:"100%"}}/>
)}

<h4>{product.title}</h4>
<p>₹{product.price}</p>

</div>

)

}

export default ProductCard