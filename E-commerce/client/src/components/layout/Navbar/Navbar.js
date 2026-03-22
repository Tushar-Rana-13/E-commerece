import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa"

function Navbar(){

return(

<nav className="navbar">

<div className="logo">
<h2>ShopSphere</h2>
</div>

<div className="searchBar">

<input placeholder="Search products"/>

<button>Search</button>

</div>

<div className="navRight">

<div className="navItem">
<p>Hello, Sign in</p>
<strong>Account</strong>
</div>

<div className="navItem">
<p>Returns</p>
<strong>& Orders</strong>
</div>

<div className="cart">
<FaShoppingCart/>
<span>Cart</span>
</div>

</div>

</nav>

)

}

export default Navbar