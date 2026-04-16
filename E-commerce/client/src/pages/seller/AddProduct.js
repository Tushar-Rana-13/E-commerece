import { useState } from "react"
import axios from "axios"
import API from "../../api"
import "../../styles/seller/AddProduct.css"

function AddProduct() {

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: ""
    })

    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleFile = (e) => {
        setImage(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const token = localStorage.getItem("token")

            const data = new FormData()

            data.append("title", form.title)
            data.append("description", form.description)
            data.append("price", form.price)
            data.append("category", form.category)
            data.append("image", image)

            await axios.post(`${API}/products`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            alert("Product added successfully")

        } catch (err) {
            alert("Error uploading")
        }

    }

    return (

        <div className="addproduct-container">

            <div className="addproduct-card">

                <h2>Add New Product</h2>

                <form onSubmit={handleSubmit}>

                    <input name="title" placeholder="Product Title" onChange={handleChange} required />
                    <input name="description" placeholder="Description" onChange={handleChange} required />
                    <input name="price" placeholder="Price" onChange={handleChange} required />
                    <input name="category" placeholder="Category" onChange={handleChange} required />

                    <input type="file" onChange={handleFile} required />

                    <button type="submit">Add Product</button>

                </form>

            </div>

        </div>

    )
}
export default AddProduct