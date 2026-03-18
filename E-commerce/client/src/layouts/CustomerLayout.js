import { Outlet } from "react-router-dom"
import Navbar from "../components/layout/Navbar/Navbar"
import CategoryBar from "../components/layout/CategoryBar/CategoryBar"

function CustomerLayout() {

  return (
    <>
      <Navbar />
      <CategoryBar />
      <Outlet />
    </>
  )

}

export default CustomerLayout