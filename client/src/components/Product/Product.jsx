import { useEffect, useState } from "react";
// import data from "../../data/data";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

import "./product.css";
import store from "../../store/store";

function Product() {
  const [onData, setData] = useState([]);
  const navigate = useNavigate();
  // const isLoggedIn = store((state) => state.isLoggedIn);
  const id = store((state) => state.uId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/product`
        );
        // console.log(response.data); // whatever is returned by your backend
        setData(response.data.product); // store it in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency

  async function addToCart(pId, uId) {
    if (!uId) {
      console.log("User is Not logged In");
      navigate("/login");
      return;
    }

    console.log(uId);
    console.log(pId);

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/${pId}/${uId}`
    );

    console.log(res);
  }

  // console.log(onData);

  const dispData = onData.map((data) => (
    <div className="products" key={data.id}>
      <div className="product-img">
        <img src={data.image} alt={data.name} className="img" />
      </div>

      <div className="product-txt-content">
        <div className="product-details">
          <span>Brand:</span> <h3>{data.brand}</h3>
        </div>

        <div className="product-details">
          <span>Model:</span> <h3>{data.name}</h3>
        </div>

        <div className="product-description">
          <span>Category: </span> <h3>{data.category}</h3>
        </div>

        <div className="product-description">
          <p className="description">{data.description}</p>
        </div>

        <div className="product-rating">
          <span className="rating">rating: {data.rating} / 5</span>
        </div>

        <div className="product-pricing">
          <span className="pricing">rupee:{data.price}</span>
        </div>

        <div className="product-btns">
          <button className="buy-now" onClick={() => addToCart(data._id, id)}>
            Buy Now
          </button>
          <FaRegHeart />
          <NavLink to="/cart">
            <IoBag />
          </NavLink>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {onData.length == 0 ? (
        <p>Loading....</p>
      ) : (
        <div className="product">{dispData}</div>
      )}
    </>
  );
}

export default Product;
