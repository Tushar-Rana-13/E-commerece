import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

function Navbar(){

const { cart } = useContext(CartContext)

const [searchTerm,setSearchTerm] = useState("")

const navigate = useNavigate()

const totalItems = cart.reduce(
(total,item)=> total + item.quantity ,0
)

const handleSearch = ()=>{

if(searchTerm.trim() !== ""){
navigate(`/search?q=${searchTerm}`)
}

}

return(

<nav className="navbar">

{/* LOGO */}

<div className="logo">

<Link to="/" style={{textDecoration:"none",color:"white"}}>

<h2>ShopSphere</h2>

</Link>

</div>

{/* SEARCH BAR */}

<div className="searchBar">

<input
placeholder="Search products"
value={searchTerm}
onChange={(e)=>setSearchTerm(e.target.value)}
/>

<button onClick={handleSearch}>Search</button>

</div>

{/* RIGHT SIDE */}

<div className="navRight">

<Link to="/login" style={{textDecoration:"none",color:"white"}}>

<div className="navItem">
<p>Hello, Sign in</p>
<strong>Account</strong>
</div>

</Link>

<Link to="/orders" style={{textDecoration:"none",color:"white"}}>

<div className="navItem">
<p>Returns</p>
<strong>& Orders</strong>
</div>

</Link>

<Link to="/cart" style={{textDecoration:"none",color:"white"}}>

<div className="cart">

<FaShoppingCart/>

<span>Cart ({totalItems})</span>

</div>

</Link>

</div>

</nav>

)

}

export default Navbar