import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { useNavigate } from "react-router-dom"

function Cart(){

const { cart, removeFromCart } = useContext(CartContext)
const navigate = useNavigate()

return(

<div style={{padding:"20px"}}>

<h1>Your Cart</h1>

{cart.length === 0 ? (
<p>Cart is empty</p>
) : (

<>
{cart.map(item=>(
<div key={item._id} style={{marginBottom:"20px"}}>

<h3>{item.title}</h3>
<p>₹{item.price}</p>

<button onClick={()=>removeFromCart(item._id)}>
Remove
</button>

</div>
))}

<button onClick={()=>navigate("/checkout")}>
Proceed to Checkout
</button>

</>

)}

</div>

)

}

export default Cart