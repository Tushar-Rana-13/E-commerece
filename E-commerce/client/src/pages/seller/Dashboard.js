import { useNavigate } from "react-router-dom"
import "../../styles/seller/Dashboard.css"

function Dashboard(){

const navigate = useNavigate()

return(

<div className="dashboard-container">

  <h1 className="dashboard-title">Seller Dashboard</h1>

  <div className="dashboard-actions">
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

</div>

)

}

export default Dashboard