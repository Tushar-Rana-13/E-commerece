import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"
import "../../styles/Cart.css"

function Cart(){

const { cart, removeFromCart } = useContext(CartContext)
const navigate = useNavigate()

const total = cart.reduce((acc,item)=> acc + item.price,0)

return(

<div className="cartPage">

<h2>Your Cart</h2>

{cart.length === 0 ? (
<p>Your cart is empty</p>
) : (

<div className="cartContainer">

{/* LEFT */}
<div className="cartItems">

{cart.map((item,index)=>(
<div key={index} className="cartItem">

<img src={item.image} alt="" />

<div className="cartInfo">
<h4>{item.title}</h4>
<p>₹{item.price}</p>
</div>

<button onClick={()=>removeFromCart(item._id)}>
Remove
</button>

</div>
))}

</div>

{/* RIGHT */}
<div className="cartSummary">

<h3>Order Summary</h3>

<p>Total Items: {cart.length}</p>
<h2>Total: ₹{total}</h2>

<button onClick={()=>navigate("/checkout")}>
Proceed to Checkout
</button>

</div>

</div>

)}

</div>

)

}

export default Cart