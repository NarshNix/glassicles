import { Link } from "react-router-dom";

import testimonial1 from "../../assets/testimonial1.jpg";
import testimonial2 from "../../assets/testimonial2.jpg";
import testimonial3 from "../../assets/testimonial3.jpg";

import "./tesimonial.css";

function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="testimonial1">
          <div className="testimonial1-img">
            <img src={testimonial1} alt="" className="testimonial-img" />
          </div>

          <div className="testimonial-txt-content">
            <div className="testimonial-heading">
              <h2 className="testimonial-head">Best UV Protection</h2>
            </div>

            <div className="testimonial-paragraph">
              <p className="testimonial-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quod consequatur molestiae omnis similique officia saepe
                numquam. Aperiam, beatae ipsum voluptates eveniet delectus, modi
                ipsam quasi, repellendus tempora itaque incidunt! Nulla quam
                fugiat soluta porro commodi, optio ad ratione dolore animi id
                obcaecati, repellat asperiores, aliquam unde eaque! Labore odit
                voluptatum magnam illum ratione animi quisquam voluptates earum
                dolorum laborum.
              </p>
            </div>

            <div className="testimonial-button">
              <Link to="/product" className="testimonial-link">
                Explore Shop
              </Link>
            </div>
          </div>
        </div>

        <div className="testimonial2">
          <div className="testimonial-txt-content">
            <div className="testimonial-heading">
              <h2 className="testimonial-head">Best & Unique Shades</h2>
            </div>

            <div className="testimonial-paragraph">
              <p className="testimonial-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quod consequatur molestiae omnis similique officia saepe
                numquam. Aperiam, beatae ipsum voluptates eveniet delectus, modi
                ipsam quasi, repellendus tempora itaque incidunt! Nulla quam
                fugiat soluta porro commodi, optio ad ratione dolore animi id
                obcaecati, repellat asperiores, aliquam unde eaque! Labore odit
                voluptatum magnam illum ratione animi quisquam voluptates earum
                dolorum laborum.
              </p>
            </div>

            <div className="testimonial-button">
              <Link to="/product" className="testimonial-link">
                Explore Shop
              </Link>
            </div>
          </div>

          <div className="testimonial1-img">
            <img src={testimonial2} alt="" className="testimonial-img" />
          </div>
        </div>

        <div className="testimonial2">
          <div className="testimonial1-img">
            <img src={testimonial3} alt="" className="testimonial-img" />
          </div>

          <div className="testimonial-txt-content">
            <div className="testimonial-heading">
              <h2 className="testimonial-head">Best & Unique Designs</h2>
            </div>

            <div className="testimonial-paragraph">
              <p className="testimonial-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                quod consequatur molestiae omnis similique officia saepe
                numquam. Aperiam, beatae ipsum voluptates eveniet delectus, modi
                ipsam quasi, repellendus tempora itaque incidunt! Nulla quam
                fugiat soluta porro commodi, optio ad ratione dolore animi id
                obcaecati, repellat asperiores, aliquam unde eaque! Labore odit
                voluptatum magnam illum ratione animi quisquam voluptates earum
                dolorum laborum.
              </p>
            </div>

            <div className="testimonial-button">
              <Link to="/product" className="testimonial-link">
                Explore Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
