import { useNavigate } from "react-router-dom"

function Dashboard(){

const navigate = useNavigate()

return(

<div style={{padding:"20px"}}>

<h1>Seller Dashboard</h1>

<button onClick={()=>navigate("/seller/add-product")}>
Add Product
</button>

<button onClick={()=>navigate("/seller/products")}>
View Products
</button>

<button onClick={()=>navigate("/seller/orders")}>
View Orders
</button>

</div>

)

}

export default Dashboard