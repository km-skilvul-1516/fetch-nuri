import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct";
import "../style/style.css"

export default function Home () {
    const {state : {product} } = CartState();
    console.log(product);
    return (
        <div className = "home">
            <div className='productContainer'>
                {product.map((prod) => {
                  return  <SingleProduct prod = {prod} key={prod.id}/>
                })}
            </div>
        </div>
    )
}