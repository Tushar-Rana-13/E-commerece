import { useContext } from "react"
import axios from "axios"
import API from "../../api"
import { CartContext } from "../../context/CartContext"
import "../../styles/Checkout.css"

function Checkout(){

const { cart, clearCart } = useContext(CartContext)

const placeOrder = async ()=>{

try{

const token = localStorage.getItem("token")

const products = cart.map(item => ({
product: item._id,
quantity: item.quantity || 1
}))

await axios.post(`${API}/orders`,
{ products },
{
headers:{
Authorization:`Bearer ${token}`
}
}
)

alert("Order placed successfully")

clearCart()

}catch(err){
alert(err.response?.data?.message || "Error placing order")
}

}

return(

<div className="checkout-container">

<h2 className="checkout-title">Checkout</h2>

<button className="place-order-btn" onClick={placeOrder}>
Place Order
</button>

</div>

)

}

export default Checkout