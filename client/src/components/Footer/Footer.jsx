import { Link } from "react-router-dom";

import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-link">
            <Link to="/" className="footer-links">
              Glassicles
            </Link>
          </div>
        </div>

        <div className="footer-middle">
          <p>
            Efforts put with love from{" "}
            <Link
              to="https://dribbble.com/NarshNix_Webworks"
              className="footer-links"
            >
              NarshNix Webworks
            </Link>
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-right-link">
            <Link to="/" className="footer-links">
              Home
            </Link>
          </div>

          <div className="footer-right-link">
            <Link to="/about" className="footer-links">
              About
            </Link>
          </div>

          <div className="footer-right-link">
            <Link to="https://instagram.com" className="footer-links">
              Insta
            </Link>
          </div>

          <div className="footer-right-link">
            <Link to="https://instagram.com" className="footer-links">
              FaceBook
            </Link>
          </div>

          <div className="footer-right-link">
            <Link to="https://instagram.com" className="footer-links">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
