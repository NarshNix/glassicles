import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Product from "./components/Product/Product.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
