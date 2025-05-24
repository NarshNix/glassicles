import { useEffect, useState } from "react";
import store from "../../store/store";
import axios from "axios";

function Cart() {
  const uId = store((state) => state.uId);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function fetchCart() {
      const response = await axios.get(
        `http://localhost:5000/product/cart/${uId}`
      );

      console.log(response);
    }

    fetchCart();
  }, []);
  return <div></div>;
}

export default Cart;
