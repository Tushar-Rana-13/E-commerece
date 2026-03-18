function SellerLogin(){

return(

<div style={{padding:"40px"}}>

<h1>Seller Login</h1>

<form style={{maxWidth:"400px"}}>

<input
placeholder="Email"
style={{display:"block",marginBottom:"15px",width:"100%",padding:"10px"}}
/>

<input
type="password"
placeholder="Password"
style={{display:"block",marginBottom:"15px",width:"100%",padding:"10px"}}
/>

<button style={{padding:"10px 20px"}}>
Login
</button>

</form>

</div>

)

}

export default SellerLogin