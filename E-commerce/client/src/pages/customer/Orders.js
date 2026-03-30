import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"

function Orders(){

const [orders,setOrders] = useState([])

useEffect(()=>{

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

</div>
))

)}

</div>

)

}

export default Orders