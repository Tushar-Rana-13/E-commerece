import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"

function SellerOrders(){

const [orders,setOrders] = useState([])

const fetchOrders = async ()=>{
try{
const token = localStorage.getItem("token")

const res = await axios.get(`${API}/orders/seller`,{
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

const updateStatus = async (id,status)=>{
try{

const token = localStorage.getItem("token")

await axios.put(`${API}/orders/seller/${id}`,
{ status: status },
{ headers:{ Authorization:`Bearer ${token}` } }
)

fetchOrders()

}catch(err){
console.log(err)
}
}

return(

<div style={{padding:"20px"}}>

<h2>Seller Orders</h2>

{orders.map(order=>(
<div key={order._id} style={{border:"1px solid #ccc",margin:"10px",padding:"10px"}}>

<h3>Order ID: {order._id}</h3>
<p>Total: ₹{order.totalAmount}</p>
<p>Status: {order.status}</p>

<select 
value={order.status}
onChange={(e)=>updateStatus(order._id,e.target.value)}
>

<option value="Pending">Pending</option>
<option value="Shipped">Shipped</option>
<option value="Delivered">Delivered</option>

</select>

</div>
))}

</div>

)

}

export default SellerOrders