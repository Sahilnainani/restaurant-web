
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
    </div>
  );
};
export default Home;