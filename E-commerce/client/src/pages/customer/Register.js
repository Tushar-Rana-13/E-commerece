import { useState } from "react"
import axios from "axios"
import API from "../../api"
import { Link } from "react-router-dom"
import "../../styles/auth.css"

function Register(){

const [form,setForm] = useState({
name:"",
email:"",
password:"",
role:"customer"   // default
})

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async (e)=>{
e.preventDefault()

try{

await axios.post(`${API}/auth/register`,form)

alert("Registered Successfully")

}catch(err){
alert(err.response?.data?.message || "Error")
}

}

return(

<div className="authPage">

<form className="authCard" onSubmit={handleSubmit}>

<h2>Register</h2>

<input name="name" placeholder="Name" onChange={handleChange} required/>
<input name="email" placeholder="Email" onChange={handleChange} required/>
<input name="password" type="password" placeholder="Password" onChange={handleChange} required/>

{/* ROLE SELECT */}
<select name="role" onChange={handleChange} value={form.role}>
  <option value="customer">Customer</option>
  <option value="seller">Seller</option>
</select>

<button type="submit">Register</button>

<p>
Already have an account? <Link to="/login">Login</Link>
</p>

</form>

</div>

)

}

export default Register