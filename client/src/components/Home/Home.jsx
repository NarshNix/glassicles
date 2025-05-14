import { Link } from "react-router-dom";
import Testimonial from "../Testimonial/Testimonial";
import Services from "../services/Services";

import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-heading">
          <h1 className="head">Glassicles</h1>
        </div>
        <div className="home-para">
          <p className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            officiis. Sint labore exercitationem distinctio delectus provident?
            Aspernatur odit odio sed impedit, amet quae eveniet et magnam
            exercitationem sequi autem debitis assumenda tenetur ut totam,
            voluptas quasi velit? Culpa sapiente, nulla iste aliquam, soluta
            porro maiores, deserunt eveniet delectus quos ipsam? Repellat
            facilis dicta numquam facere distinctio aliquid corporis expedita
            quasi sunt architecto a maiores impedit quia, sed eaque ab maxime
            ducimus earum rem voluptatibus quo dolore. Dolorum mollitia,
            voluptate in maxime ad dolorem impedit qui fugiat et nobis placeat
            distinctio excepturi doloremque eveniet accusantium aliquam ducimus
            ea veniam numquam reprehenderit.
          </p>
        </div>

        <div className="home-btn">
          <Link to="/products" className="home-link">
            Go To Shop
          </Link>
        </div>
      </div>
      <Testimonial />
      <Services />
    </>
  );
}

export default Home;
