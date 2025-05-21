import { useEffect, useState } from "react";
// import data from "../../data/data";
import { NavLink } from "react-router-dom";
import axios from "axios";

import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

import "./product.css";

function Product() {
  const [onData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product");
        // console.log(response.data); // whatever is returned by your backend
        setData(response.data.product); // store it in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency

  function addToCart(pId, uId) {
    const res = axios.post(`http://localhost:5000/product/cart/${pId}/${uId}`);
  }

  console.log(onData);

  const dispData = onData.map((data) => (
    <div className="products" key={data.id}>
      <div className="product-img">
        <img src={data.image} alt={data.name} className="img" />
      </div>

      <div className="product-txt-content">
        <div className="product-details">
          <h3 className="details">{data.brand}</h3>
          <h4 className="details">{data.name}</h4>
        </div>

        <div className="product-description">
          <p>
            Category: <span>{data.category}</span>
          </p>
          <p className="description">{data.description}</p>
        </div>

        <div className="product-pricing">
          <p className="rating">ratng: {data.rating}</p>
          <h4 className="pricing">rupee:{data.price}</h4>
        </div>

        <div className="product-btns">
          <button className="buy-now" onClick={() => addToCart(data.id)}>
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
