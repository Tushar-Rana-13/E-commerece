import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

function Cart(){

const {cart,removeFromCart,increaseQuantity,decreaseQuantity} = useContext(CartContext)

const totalPrice = cart.reduce((total , item) => total + item.price*item.quantity, 0)

return(

<div style={{padding:"40px"}}>

<h1>Your Cart</h1>

{cart.length===0 && <p>Your Cart is empty</p>}

{cart.map((item)=>(

<div key={item.id} style={{marginBottom:"20px"}}>

<img src={item.image} alt={item.title} width="80"/>

<h3>{item.title}</h3>

<p>${item.price}</p>

<div>
<button onClick={() => decreaseQuantity(item.id)}>-</button>
 
<span style={{margin: "0 10px"}}>{item.quantity}</span>

<button onClick={() => increaseQuantity(item.id)}>+</button>
</div>

<button onClick={()=>removeFromCart(item.id)}>
Remove
</button>

</div>

))}

<h2>Total: ₹{totalPrice}</h2>

</div>

)

}

export default Cart