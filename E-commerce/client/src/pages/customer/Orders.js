function Orders(){

const dummyOrders = [

{
id:1,
product:"Wireless Headphones",
price:2500,
status:"Delivered"
},

{
id:2,
product:"Running Shoes",
price:3200,
status:"Shipped"
},

{
id:3,
product:"Laptop Backpack",
price:1200,
status:"Processing"
}

]

return(

<div style={{padding:"40px"}}>

<h1>My Orders</h1>

{dummyOrders.map(order => (

<div
key={order.id}
style={{
border:"1px solid #ccc",
padding:"15px",
marginBottom:"15px"
}}
>

<h3>{order.product}</h3>

<p>Price: ₹{order.price}</p>

<p>Status: <strong>{order.status}</strong></p>

</div>

))}

</div>

)

}

export default Orders