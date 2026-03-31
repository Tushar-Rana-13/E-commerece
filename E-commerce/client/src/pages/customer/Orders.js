import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"

function Orders(){

const [orders,setOrders] = useState([])

// ✅ Fetch Orders
const fetchOrders = async ()=>{
try{

const token = localStorage.getItem("token")

const res = await axios.get(`${API}/orders/my`,{
headers:{
Authorization:`Bearer ${token}`
}
})

setOrders(res.data)

}catch(err){
console.log(err)
}
}

// ✅ Cancel Order
const cancelOrder = async (id)=>{
try{

const token = localStorage.getItem("token")

await axios.put(`${API}/orders/cancel/${id}`,{},{
headers:{ Authorization:`Bearer ${token}` }
})

alert("Order cancelled")

fetchOrders()  // refresh list

}catch(err){
console.log(err)
}
}

// ✅ Load on mount
useEffect(()=>{
fetchOrders()
},[])

return(

<div style={{padding:"20px"}}>

<h1>My Orders</h1>

{orders.length === 0 ? (
<p>No orders yet</p>
) : (

orders.map(order=>(
<div key={order._id} style={{border:"1px solid #ccc",margin:"10px",padding:"10px"}}>

<h3>Order ID: {order._id}</h3>
<p>Total: ₹{order.totalAmount}</p>
<p>Status: {order.status}</p>

{/* Disable cancel if delivered */}
{order.status !== "Delivered" && order.status !== "Cancelled" && (
<button onClick={()=>cancelOrder(order._id)}>
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