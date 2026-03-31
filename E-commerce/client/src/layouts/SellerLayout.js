import { Outlet, Link } from "react-router-dom"

function SellerLayout(){

return(

<div>

{/* SIMPLE SELLER NAVBAR */}
<div style={{
background:"#232f3e",
color:"white",
padding:"10px",
display:"flex",
gap:"20px"
}}>

<Link to="/seller/dashboard" style={{color:"white"}}>Dashboard</Link>
<Link to="/seller/products" style={{color:"white"}}>My Products</Link>
<Link to="/seller/add-product" style={{color:"white"}}>Add Product</Link>
<Link to="/seller/orders" style={{color:"white"}}>Orders</Link>

</div>

<Outlet/>

</div>

)

}

export default SellerLayout