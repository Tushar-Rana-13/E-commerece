import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"
import "../../styles/Orders.css"

function Orders(){

const [orders,setOrders] = useState([])

const fetchOrders = async ()=>{
try{
const token = localStorage.getItem("token")

const res = await axios.get(`${API}/orders/my`,{
headers:{ Authorization:`Bearer ${token}` }
})

setOrders(res.data)

}catch(err){
console.log(err)
}
}

useEffect(()=>{
fetchOrders()
},[])

// ✅ CANCEL FUNCTION
const cancelOrder = async (id)=>{
try{

const token = localStorage.getItem("token")

await axios.put(`${API}/orders/cancel/${id}`,{},{
headers:{ Authorization:`Bearer ${token}` }
})

alert("Order cancelled")
fetchOrders()

}catch(err){
console.log(err)
}
}

return(

<div className="ordersPage">

<h2>My Orders</h2>

{orders.length === 0 ? (
<p>No orders yet</p>
) : (

orders.map(order=>(
<div key={order._id} className="orderCard">

<h4>Order ID: {order._id}</h4>
<p>Total: ₹{order.totalAmount}</p>

<span className={`status ${order.status}`}>
{order.status}
</span>

{/* ✅ SHOW BUTTON ONLY WHEN ALLOWED */}
{order.status !== "Delivered" && order.status !== "Cancelled" && (
<button 
className="cancelBtn"
onClick={()=>cancelOrder(order._id)}
>
Cancel Order
</button>
)}

</div>
))

)}

</div>

)

}

export default Orders