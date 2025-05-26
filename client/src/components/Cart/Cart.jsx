import { useEffect, useState } from "react";
import store from "../../store/store";
import axios from "axios";

import "./cart.css";
function Cart() {
  const uId = store((state) => state.uId);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      const response = await axios.get(
        `http://localhost:5000/product/cart/${uId}`
      );
      setCart(response.data);
    }

    fetchCart();
  }, []);

  // console.log(cart);

  const dispCart = cart.map((item) => (
    <>
      <div className="cart-content">
        <div className="cart-img">
          <img
            src={item.id.image}
            alt={item.id.name}
            className="product-cart"
          />
        </div>

        <div className="cart-txt-content">
          <div className="cart-details">
            <div className="cart-brand">
              <span>Brand: </span>
              <h4>{item.id.brand}</h4>
            </div>

            <div className="cart-model">
              <span>Model: </span>
              <h4>{item.id.name}</h4>
            </div>

            <div className="cart-quantity">
              <span>Quantity: </span>
              <h4>{item.quantity}</h4>
            </div>

            <div className="cart-price">
              <span>Price: </span>
              <h4>{item.id.price}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  const totalPrice = cart.reduce((acc, curValue) => {
    return acc + curValue.quantity * curValue.id.price;
  }, 0);

  console.log(totalPrice);
  return <div className="cart">{dispCart}</div>;
}

export default Cart;
