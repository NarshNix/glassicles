import { Link } from "react-router-dom";
import store from "../../store/store";

import "./navbar.css";

function NavBar() {
  const isLoggedIn = store((state) => state.isLoggenIn);

  return (
    <nav>
      <div className="nav-left">
        <Link to="/" className="nav-links">
          Glassicles
        </Link>
      </div>

      <div className="nav-right">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/about" className="nav-links">
          About
        </Link>
        <Link to="/product" className="nav-links">
          Product
        </Link>
        {isLoggedIn ? (
          <Link to="/logut" className="nav-links">
            LogOut
          </Link>
        ) : (
          <Link to="/login" className="nav-links">
            LogIn
          </Link>
        )}

        <Link to="/signup" className="nav-links">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
