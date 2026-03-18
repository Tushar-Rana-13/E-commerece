import "./CategoryBar.css"

function CategoryBar(){

const categories=[
"All",
"Electronics",
"Fashion",
"Mobiles",
"Home",
"Beauty",
"Sports"
]

return(

<div className="categoryBar">

{categories.map((cat,index)=>(
<span key={index}>{cat}</span>
))}

</div>

)

}

export default CategoryBar