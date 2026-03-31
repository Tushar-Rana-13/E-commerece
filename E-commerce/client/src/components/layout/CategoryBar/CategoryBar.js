import { Link } from "react-router-dom"
import "./CategoryBar.css"

function CategoryBar() {

    const categories = [
        "All",
        "electronics",
        "fashion",
        "home",
        "clothes",
        "mobiles",
        "books"
    ]

    return (

        <div className="categoryBar">

            {categories.map(cat => (
                <Link key={cat} to={`/category/${cat}`} className="categoryItem">
                    {cat.toUpperCase()}
                </Link>
            ))}

        </div>

    )

}

export default CategoryBar