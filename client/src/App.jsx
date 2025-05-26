import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Product from "./components/Product/Product.jsx";

import "./App.css";
import store from "./store/store.js";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login/Login.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    const uId = localStorage.getItem("uId");

    if (token && uId) {
      store.getState().login(token, uId); // rehydrate Zustand
    }
  }, []);
  return (
    <>
      <div className="main">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
