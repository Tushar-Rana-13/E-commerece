import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

// Customer
import CustomerLayout from "../layouts/CustomerLayout"
import Home from "../pages/customer/Home"
import ProductDetails from "../pages/customer/ProductDetails"
import Cart from "../pages/customer/Cart"
import Checkout from "../pages/customer/Checkout"
import Login from "../pages/customer/Login"
import Register from "../pages/customer/Register"
import Category from "../pages/customer/Category"
import SearchResults from "../pages/customer/SearchResults"
import Orders from "../pages/customer/Orders"
import Profile from "../pages/customer/Profile"

// Seller
import SellerLayout from "../layouts/SellerLayout"
import SellerLogin from "../pages/seller/SellerLogin"
import Dashboard from "../pages/seller/Dashboard"
import Products from "../pages/seller/Products"
import AddProduct from "../pages/seller/AddProduct"
import SellerOrders from "../pages/seller/Sellerorders"

// Admin
import AdminLayout from "../layouts/AdminLayout"
import AdminDashboard from "../pages/admin/AdminDashboard"
import Users from "../pages/admin/Users"
import Sellers from "../pages/admin/Sellers"
import AdminProducts from "../pages/admin/AdminProducts"
import AdminOrders from "../pages/admin/AdminOrders"

import NotFound from "../pages/NotFound"

function AppRoutes() {

    return (

        <Routes>

            {/* CUSTOMER */}
            <Route element={<CustomerLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>} />
                <Route path="/checkout" element={
                    <ProtectedRoute>
                        <Checkout />
                    </ProtectedRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/category/:name" element={<Category />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="/orders" element={
                    <ProtectedRoute>
                        <Orders />
                    </ProtectedRoute>} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            {/* SELLER */}
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/seller" element={<SellerLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="add-product" element={<AddProduct />} />
                <Route path="orders" element={<SellerOrders />} />
            </Route>

            {/* ADMIN */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="users" element={<Users />} />
                <Route path="sellers" element={<Sellers />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="orders" element={<AdminOrders />} />
            </Route>

            <Route path="*" element={<NotFound />} />

        </Routes>

    )

}

export default AppRoutes