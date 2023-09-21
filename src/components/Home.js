
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faUserTie,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Home.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <div className="restaurant-name">
            <FontAwesomeIcon
              className="logo"
              icon={faUtensils}
              style={{ color: "#FEA116" }}
            />
            <h2>FAASOS</h2>
          </div>
          <ul>
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#service">SERVICE</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <button>Book A Table</button>
            </li>
          </ul>
        </nav>
        <div className="content">
          <div className="content-wrapper">
            <h2>Enjoy Our Delicious Meal</h2>
            <div className="sub-heading">
              Our restaurant offers a perfect blend of delectable cuisine,
              inviting ambiance, and exceptional service
            </div>
          </div>
          <div className="spinner">
            <img
              className="spinner-image"
              src={require("../img/hero.png")}
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#F1F8FF", alignItems: "center" }}>
        <div className="services-container">
          <div className="service">
            <FontAwesomeIcon className="service-logo" icon={faUserTie} />
            <h4 className="service-heading">Master Chefs</h4>
            <div className="service-about">
              Our chefs are dedicated experts who transform the finest
              ingredients into unforgettable dishes.
            </div>
          </div>
          <div className="service">
            <FontAwesomeIcon className="service-logo" icon={faUtensils} />
            <h4 className="service-heading">Quality Food</h4>
            <div className="service-about">
              Whether it's a late-night snack, an early morning breakfast, we're
              here to satisfy your appetite at any hour.
            </div>
          </div>
          <div className="service">
            <FontAwesomeIcon className="service-logo" icon={faCartShopping} />
            <h4 className="service-heading">Online Order</h4>
            <div className="service-about">
              With just a few clicks, you can indulge in your favorite dishes
              from the comfort of your own home.
            </div>
          </div>
          <div className="service">
            <FontAwesomeIcon className="service-logo" icon={faUserTie} />
            <h4 className="service-heading">24/7 Service</h4>
            <div className="service-about">
              Our commitment to excellence shines through in every dish we
              create.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Home;