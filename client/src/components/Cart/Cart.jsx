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
        `${import.meta.env.VITE_API_URL}/product/cart/${uId}`
      );
      setCart(response.data);
    }

    fetchCart();
  }, []);

  async function removeFromCart(uId, pId) {
    console.log(uId, pId);
    const res = await axios.delete(
      `${import.meta.env.VITE_API_URL}/product/cart/${uId}/${pId}`
    );

    console.log(res);

    setCart(res.data.remainingProduct);
    console.log(cart);
  }

  const handlePayment = async (amt) => {
    const { data: order } = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/payment/create-order`,
      {
        amount: amt, // ₹500 in rupees
      }
    );

    const options = {
      key: "rzp_test_whDYJPc1YTAV31", // same as Razorpay dashboard
      amount: order.amount,
      currency: order.currency,
      name: "Glassicles",
      description: "Test Transaction",
      order_id: order.id,
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
        alert("Order ID: " + response.razorpay_order_id);
        alert("Signature: " + response.razorpay_signature);
        // TODO: verify this on backend
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

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
              <h4 className="cart-heading">{item.id.brand}</h4>
            </div>

            <div className="cart-model">
              <span>Model: </span>
              <h4 className="cart-heading">{item.id.name}</h4>
            </div>

            <div className="cart-quantity">
              <span>Quantity: </span>
              <h4 className="cart-heading">{item.quantity}</h4>
            </div>

            <div className="cart-price">
              <span>Price: </span>
              <h4 className="cart-heading">{item.id.price}</h4>
            </div>

            <div className="cart-total-price">
              <span>Total Price: </span>
              <h4 className="cart-heading">{item.id.price * item.quantity}</h4>
            </div>

            <div className="cart-button">
              <button
                className="buy-now"
                onClick={() => handlePayment(item.id.price * item.quantity)}
              >
                Buy Now
              </button>
              <button
                className="remove"
                onClick={() => removeFromCart(uId, item.id._id)}
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ));

  const totalPrice = cart.reduce((acc, curValue) => {
    return acc + curValue.quantity * curValue.id.price;
  }, 0);

  return (
    <>
      <div className="cart">
        <div className="bag">{dispCart}</div>
        <div className="cart-total">
          <span>Total:</span> <h4 className="total-price-cart">{totalPrice}</h4>
        </div>
      </div>
    </>
  );
}

export default Cart;
