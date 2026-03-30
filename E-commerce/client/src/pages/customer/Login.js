import { useState } from "react"
import axios from "axios"
import API from "../../api"
import { useNavigate, Link } from "react-router-dom"

function Login(){

const [form,setForm] = useState({
email:"",
password:""
})

const navigate = useNavigate()

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async (e)=>{
e.preventDefault()

try{

const res = await axios.post(`${API}/auth/login`,form)

localStorage.setItem("token",res.data.token)
localStorage.setItem("user",JSON.stringify(res.data.user))

alert("Login successful")

navigate("/")

}catch(err){
alert(err.response?.data?.message || "Error")
}

}

return(

<div className="auth-container">

<form className="auth-form" onSubmit={handleSubmit}>

<h2>Login</h2>

<input name="email" placeholder="Email" onChange={handleChange} required/>
<input name="password" type="password" placeholder="Password" onChange={handleChange} required/>

<button type="submit">Login</button>

<p>
New user? <Link to="/register">Register here</Link>
</p>

</form>

</div>

)

}

export default Login