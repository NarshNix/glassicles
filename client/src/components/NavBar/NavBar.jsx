import { NavLink } from "react-router-dom";
import store from "../../store/store";

import { IoBag } from "react-icons/io5";

import "./navbar.css";

function NavBar() {
  const isLoggedIn = store((state) => state.isLoggenIn);

  return (
    <nav>
      <div className="nav-left">
        <NavLink to="/" className="nav-links">
          Glassicles
        </NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/" className="nav-links">
          Home
        </NavLink>

        <NavLink to="/about" className="nav-links">
          About
        </NavLink>

        <NavLink to="/product" className="nav-links">
          Product
        </NavLink>

        <NavLink to="/wishlist" className="nav-links">
          Wishlist
        </NavLink>

        <NavLink to="/cart" className="nav-links">
          <IoBag />
        </NavLink>

        {isLoggedIn ? (
          <NavLink to="/logout" className="nav-links">
            LogOut
          </NavLink>
        ) : (
          <NavLink to="/login" className="nav-links">
            LogIn
          </NavLink>
        )}

        <NavLink to="/signup" className="nav-links">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
