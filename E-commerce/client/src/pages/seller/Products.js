function Products(){

const products = [

{ id:1, name:"Laptop", price:50000 },
{ id:2, name:"Headphones", price:2000 },
{ id:3, name:"Smart Watch", price:4000 }

]

return(

<div>

<h1>Your Products</h1>

<table border="1" cellPadding="10">

<thead>

<tr>
<th>Name</th>
<th>Price</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{products.map(product =>(

<tr key={product.id}>

<td>{product.name}</td>

<td>₹{product.price}</td>

<td>

<button>Edit</button>
<button>Delete</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default Products