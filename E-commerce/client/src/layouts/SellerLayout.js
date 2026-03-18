import { Outlet, Link } from "react-router-dom"
import "./SellerLayout.css"

function SellerLayout(){

return(

<div className="sellerContainer">

<div className="sellerSidebar">

<h2>Seller Panel</h2>

<Link to="/seller/dashboard">Dashboard</Link>

<Link to="/seller/products">Products</Link>

<Link to="/seller/add-product">Add Product</Link>

<Link to="/seller/orders">Orders</Link>

</div>

<div className="sellerContent">

<Outlet/>

</div>

</div>

)

}

export default SellerLayout