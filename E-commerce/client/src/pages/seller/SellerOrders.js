import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"
import "../../styles/seller/SellerOrders.css"

function SellerOrders() {

    const [orders, setOrders] = useState([])

    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem("token")

            const res = await axios.get(`${API}/orders/seller`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            setOrders(res.data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    const updateStatus = async (id, status) => {
        try {

            const token = localStorage.getItem("token")

            await axios.put(`${API}/orders/seller/${id}`,
                { status: status },
                { headers: { Authorization: `Bearer ${token}` } }
            )

            fetchOrders()

        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div className="orders-container">

            <h2 className="orders-title">Seller Orders</h2>

            {orders.length === 0 ? (
                <p className="no-orders">No orders yet</p>
            ) : (

                <div className="orders-list">

                    {orders.map(order => (
                        <div key={order._id} className="order-card">

                            <div className="order-info">
                                <h3>Order ID</h3>
                                <p className="order-id">{order._id}</p>

                                <p><strong>Total:</strong> ₹{order.totalAmount}</p>

                                <p>
                                    <strong>Status:</strong>
                                    <span className={`status ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </p>
                            </div>

                            <div className="order-actions">
                                <select
                                    value={order.status}
                                    onChange={(e) => updateStatus(order._id, e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                            </div>

                        </div>
                    ))}

                </div>

            )}

        </div>
    )
}

export default SellerOrders