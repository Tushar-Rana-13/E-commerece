import { useEffect, useState } from "react"
import axios from "axios"
import API from "../../api"
import "../../styles/seller/Products.css"

function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const token = localStorage.getItem("token")

                const res = await axios.get(`${API}/products/my`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setProducts(res.data)

            } catch (err) {
                console.log(err)
            }

        }

        fetchProducts()

    }, [])

    return (

        <div className="products-container">

            <h2 className="products-title">My Products</h2>

            {products.length === 0 ? (
                <p className="no-products">No products added</p>
            ) : (

                <div className="products-grid">

                    {products.map(p => (
                        <div key={p._id} className="product-card">

                            <img
                                src={`http://localhost:5000${p.image}`}
                                alt={p.title}
                            />

                            <h3>{p.title}</h3>
                            <p className="price">₹{p.price}</p>

                        </div>
                    ))}

                </div>

            )}

        </div>

    )
}

export default Products