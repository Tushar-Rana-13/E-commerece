import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"

function Products(){

const [products,setProducts] = useState([])

useEffect(()=>{

const fetchProducts = async ()=>{

try{

const token = localStorage.getItem("token")

const res = await axios.get(`${API}/products/my`,{
headers:{
Authorization:`Bearer ${token}`
}
})

setProducts(res.data)

}catch(err){
console.log(err)
}

}

fetchProducts()

},[])

return(

<div style={{padding:"20px"}}>

<h2>My Products</h2>

{products.length === 0 ? (
<p>No products added</p>
) : (

products.map(p=>(
<div key={p._id} style={{border:"1px solid #ccc",margin:"10px",padding:"10px"}}>

<img 
src={`http://localhost:5000${p.image}`} 
width="150"
/>
<h3>{p.title}</h3>
<p>₹{p.price}</p>

</div>
))

)}

</div>

)

}

export default Products