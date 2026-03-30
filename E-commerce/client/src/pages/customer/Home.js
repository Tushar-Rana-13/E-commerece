import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"
import ProductCard from "../../components/product/ProductCard"

function Home(){

const [products,setProducts] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

const fetchProducts = async ()=>{

try{
const res = await axios.get(`${API}/products`)
setProducts(res.data)
}catch(err){
console.log("Error:", err)
}
finally{
setLoading(false)
}

}

fetchProducts()

},[])

if(loading) return <h2>Loading...</h2>

return(

<div style={{padding:"20px"}}>

<h2>All Products</h2>

{products.length === 0 ? (
<p>No products available</p>
) : (

<div style={{display:"flex",gap:"20px",flexWrap:"wrap"}}>

{products.map(p=>(
<ProductCard key={p._id} product={p}/>
))}

</div>

)}

</div>

)

}

export default Home