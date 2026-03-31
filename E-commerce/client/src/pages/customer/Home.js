import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"
import ProductCard from "../../components/product/ProductCard"
import "../../styles/Home.css"

function Home(){

const [products,setProducts] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{

const fetchProducts = async ()=>{
try{
const res = await axios.get(`${API}/products`)
setProducts(res.data)
}catch(err){
console.log(err)
} finally{
setLoading(false)
}
}

fetchProducts()

},[])

if(loading) return <h2 style={{padding:"20px"}}>Loading...</h2>

return(

<div className="homeContainer">

<h2 className="homeTitle">All Products</h2>

{products.length === 0 ? (
<p>No products available</p>
) : (

<div className="productGrid">

{products.map(p=>(
<ProductCard key={p._id} product={p}/>
))}

</div>

)}

</div>

)

}

export default Home