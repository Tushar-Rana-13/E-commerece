import { Navigate } from "react-router-dom"

function SellerRoute({ children }){

const user = JSON.parse(localStorage.getItem("user"))

if(!user || user.role !== "seller"){
  return <Navigate to="/login"/>
}

return children
}

export default SellerRoute