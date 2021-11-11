import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import faker from "faker";
import { cartReducer } from "./Reducers";

const Cart = createContext();

export default function Context({ children }) {
  const [listProduct, setProducts] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, {
    product: [],
    cart: [],
  });

  useEffect(() => {
    fetch("https://6188b1aad0821900178d74be.mockapi.io/IkanAirLaut")
      .then((Response) => Response.json())
      .then((result) => {
        setProducts(result);
        dispatch({ type: "FETCH_COMPLETE", payload: result });
      });
  }, []);

  console.log(listProduct);

  console.log(state.product);

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export function CartState() {
  return useContext(Cart);
}
