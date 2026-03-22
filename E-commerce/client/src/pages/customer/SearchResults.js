import { useLocation } from "react-router-dom"

function SearchResults(){

const query = new URLSearchParams(useLocation().search)

const searchTerm = query.get("q")

return(

<div style={{padding:"40px"}}>

<h1>Search Results</h1>

<p>Results for: {searchTerm}</p>

</div>

)

}

export default SearchResults