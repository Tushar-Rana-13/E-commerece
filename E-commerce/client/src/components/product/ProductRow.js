import ProductCard from "./ProductCard"
import "./ProductRow.css"

function ProductRow({ title }) {

const products = [

{
title:"Wireless Headphones",
price:99,
image:"https://via.placeholder.com/200"
},

{
title:"Smart Watch",
price:149,
image:"https://via.placeholder.com/200"
},

{
title:"Gaming Mouse",
price:59,
image:"https://via.placeholder.com/200"
},

{
title:"Laptop Stand",
price:39,
image:"https://via.placeholder.com/200"
},

]

return(

<div className="productRow">

<h2>{title}</h2>

<div className="rowProducts">

{products.map((product,index)=>(

<ProductCard
key={index}
title={product.title}
price={product.price}
image={product.image}
/>

))}

</div>

</div>

)

}

export default ProductRow