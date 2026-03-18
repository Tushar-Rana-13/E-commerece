import Hero from "../../components/hero/hero"
import ProductRow from "../../components/product/ProductRow" 

function Home(){

return(

<div>

<Hero/>
  
<div style={{padding:"0 5%"}}>

<ProductRow title="Best Deals"/>

<ProductRow title="Trending Fashion"/>

<ProductRow title="Electronics Sale"/>

</div>

</div>

)

}

export default Home