import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"
import ProductCard from "../../components/product/ProductCard"

function Category(){

const {name} = useParams()
const [products,setProducts] = useState([])

useEffect(()=>{

const fetchProducts = async ()=>{
try{
const categoryname = name.toUpperCase()

let url = `${API}/products`

// ✅ Only filter if NOT "all"
if(categoryname !== "ALL"){
url = `${API}/products?category=${categoryname}`
}

const res = await axios.get(url)
setProducts(res.data)

}catch(err){
console.log(err)
}
}

fetchProducts()

},[name])

return(

<div style={{padding:"20px"}}>

<h2>{name.toUpperCase()} PRODUCTS</h2>

{products.length === 0 ? (
<p>No products found</p>
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

export default Category