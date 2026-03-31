import "./Navbar.css"
import { FaShoppingCart } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

function Navbar(){

  const { cart } = useContext(CartContext)
  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const user = JSON.parse(localStorage.getItem("user"))

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity, 0
  )

  const handleLogout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/")
    window.location.reload()
  }

  const handleSearch = ()=>{
    if(search.trim()){
      navigate(`/search?q=${search}`)
    }
  }

  return(

    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo" style={{textDecoration:"none", color:"white"}}>
        <h2>ShopSphere</h2>
      </Link>

      {/* SEARCH */}
      <div className="searchBar">
        <input 
          placeholder="Search products"
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* RIGHT */}
      <div className="navRight">

        {/* USER */}
        {user ? (

          <div className="navItem">
            <p>Hello, {user.name}</p>
            <strong 
              onClick={handleLogout} 
              style={{cursor:"pointer"}}
            >
              Logout
            </strong>
          </div>

        ) : (

          <Link to="/login" style={{textDecoration:"none", color:"white"}}>
            <div className="navItem">
              <p>Hello, Sign in</p>
              <strong>Account</strong>
            </div>
          </Link>

        )}

        {/* ORDERS */}
        <Link to="/orders" style={{textDecoration:"none", color:"white"}}>
          <div className="navItem">
            <p>Returns</p>
            <strong>& Orders</strong>
          </div>
        </Link>

        {/* CART */}
        <Link to="/cart" className="cart" style={{textDecoration:"none", color:"white"}}>
          <div className="cart">
          <FaShoppingCart/>
          <span>Cart</span>
          <span className="cart_count">{totalItems}</span>
        </div>
        </Link>

      </div>

    </nav>

  )

}

export default Navbar