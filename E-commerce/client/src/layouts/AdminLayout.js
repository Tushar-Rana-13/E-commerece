import { Outlet, Link } from "react-router-dom"
import "./AdminLayout.css"

function AdminLayout(){

return(

<div className="adminContainer">

<div className="adminSidebar">

<h2>Admin Panel</h2>

<Link to="/admin/dashboard">Dashboard</Link>
<Link to="/admin/users">Users</Link>
<Link to="/admin/sellers">Sellers</Link>
<Link to="/admin/products">Products</Link>
<Link to="/admin/orders">Orders</Link>

</div>

<div className="adminContent">

<Outlet/>

</div>

</div>

)

}

export default AdminLayout