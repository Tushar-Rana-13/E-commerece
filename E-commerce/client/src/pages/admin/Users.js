function Users(){

const users = [
{ id:1, name:"Rahul" },
{ id:2, name:"Amit" }
]

return(

<div>

<h1>Users</h1>

<ul>

{users.map(user=>(
<li key={user.id}>{user.name}</li>
))}

</ul>

</div>

)

}

export default Users