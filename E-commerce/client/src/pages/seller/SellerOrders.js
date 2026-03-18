function SellerOrders(){

const orders = [

{ id:1 , product:"Laptop" , status:"Shipped" },

{ id:2 , product:"Headphones" , status:"Processing" }

]

return(

<div>

<h1>Orders</h1>

<table border="1" cellPadding="10">

<thead>

<tr>
<th>Order ID</th>
<th>Product</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{orders.map(order =>(

<tr key={order.id}>

<td>{order.id}</td>

<td>{order.product}</td>

<td>{order.status}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default SellerOrders