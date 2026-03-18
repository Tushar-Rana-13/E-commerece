import { useParams } from "react-router-dom"

function Category(){

const {name} = useParams()

return(

<div style={{padding:"40px"}}>

<h1>{name} Products</h1>

<p>Products filtered by category</p>

</div>

)

}

export default Category