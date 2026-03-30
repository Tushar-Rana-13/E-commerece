import { useContext } from "react"
import axios from "axios"
import API from "../../api"
import { CartContext } from "../../context/CartContext"

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

<div style={{padding:"20px"}}>

<h2>Checkout</h2>

<button onClick={placeOrder}>
Place Order
</button>

</div>

)

}

export default Checkout