import { NavLink } from "react-router-dom";
import store from "../../store/store";

import { IoBag } from "react-icons/io5";

import "./navbar.css";

function NavBar() {
  const isLoggedIn = store((state) => state.isLoggedIn);
  const logout = store((state) => state.logout);

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

        <NavLink to="/cart" className="nav-links">
          <IoBag />
        </NavLink>

        {isLoggedIn ? (
          <div className="nav-links" onClick={logout}>
            LogOut
          </div>
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
