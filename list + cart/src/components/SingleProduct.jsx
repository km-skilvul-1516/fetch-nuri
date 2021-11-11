import { Card, Button } from "react-bootstrap"
import { CartState } from "../context/Context";
import "../style/style.css"


export default function SingleProduct ({prod}) {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    
    console.log(prod)
    return (
        <div className ="products">
           <Card>
               <Card.Img variant = 'top' src ={prod.Img} alt= {prod.Nama}/>
               <Card.Body>
                   <Card.Title>{prod.Nama}</Card.Title>
                   <Card.Subtitle style = {{paddingBottom : 30}}>
                        <span>Rp {prod.Harga}</span>
                   </Card.Subtitle>
                   {cart.some(p=>p.id===prod.id)?(
                     <Button  onClick = {()=> {
                        dispatch ({
                            type: 'REMOVE_FROM_CART',
                            payload: prod
                        })
                    }}
                     
                     variant ="danger">
                        Remove from Cart
                    </Button>
                   ):(
                    <Button onClick = {()=> {
                        dispatch ({
                            type: 'ADD_TO_CART',
                            payload: prod
                        })
                    }} >
                        Add to Cart dafdas
                    </Button>
                   )}
                  
                  
               </Card.Body>
           </Card>
        </div>
    )
}