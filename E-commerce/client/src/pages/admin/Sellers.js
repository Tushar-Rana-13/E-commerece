function Sellers(){

const sellers = [
{ id:1, name:"Seller A" },
{ id:2, name:"Seller B" }
]

return(

<div>

<h1>Sellers</h1>

<ul>

{sellers.map(s=>(
<li key={s.id}>{s.name}</li>
))}

</ul>

</div>

)

}

export default Sellers