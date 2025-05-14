import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </div>
    </>
  );
}

export default App;
