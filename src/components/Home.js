
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
      <div className="about-container">
        <div className="about-photos">
          <div className="img-container">
            <img
              className="about-img1"
              src={require("../img/about-1.jpg")}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              className="about-img2"
              src={require("../img/about-2.jpg")}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              className="about-img3"
              src={require("../img/about-3.jpg")}
              alt=""
            />
          </div>
          <div className="img-container">
            <img
              className="about-img4"
              src={require("../img/about-4.jpg")}
              alt=""
            />
          </div>
        </div>
        <div className="about-content">
          <div style={{ height: "auto" }}>
            <h5 className="heading">About Us-</h5>
            <h1>Welcome to Faasos</h1>
            <p>
              A culinary gem nestled in the heart of Udaipur. We pride ourselves
              on delivering an unforgettable dining experience that combines
              exquisite flavors, impeccable service, and a welcoming ambiance.
            </p>
            <p>
              Our restaurant's warm and inviting ambiance is the perfect
              backdrop for any occasion, creating a relaxed and memorable dining
              environment.
            </p>
            <div className="experience">
              <div className="experience1">
                <p className="number">15</p>
                <div>
                  <p>Years of</p>
                  <h6>EXPERIENCE</h6>
                </div>
              </div>
              <div className="experience1">
                <p className="number">50</p>
                <div>
                  <p>Popular</p>
                  <h6>MASTER CHEFS</h6>
                </div>
              </div>
            </div>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <h2>Food Menu</h2>
        <h1>Most Popular Items</h1>
        <div className="menu">
          <div className="menu1">
            <div className="item">
              <img src={require("../img/menu-1.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
            <div className="item">
              <img src={require("../img/menu-2.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
            <div className="item">
              <img src={require("../img/menu-3.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
            <div className="item">
              <img src={require("../img/menu-4.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
          </div>
          <div className="menu1">
            <div className="item">
              <img src={require("../img/menu-5.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
            <div className="item">
              <img src={require("../img/menu-6.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
            <div className="item">
              <img src={require("../img/menu-7.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
            <div className="item">
              <img src={require("../img/menu-8.jpg")} alt="" />
              <div className="details">
                <div className="price">
                  <h4>Chicken Burger</h4>
                  <h2>$115</h2>
                </div>
                <p>crispy chicken, sautéed mushrooms, or caramelized onions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="booking-container">
        <div className="video">
          <video src={require('../img/JunkFood1.mp4')} loop muted autoPlay={"autoplay"} controls=''></video>
        </div>
        <div className="booking">
          <div className="booking-content">
            <h2>Reservation</h2>
            <h1>Book A Table Online</h1>
            <div className="input-fields">
              <input type="name" placeholder="Your Name" />
              <select id="no-of-people">
                <option value="">No-Of-People</option>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
              <input type="datetime-local" />
              <button>Book</button>
            </div>
          </div>
        </div>
      </div>
      <div className="team-container">
        <h2>Team Members</h2>
        <h1>Our Master Chefs</h1>
        <div className="chefs">
          <div className="chef">
            <img src={require('../img/team-1.jpg')} alt="" />
            <h4 className="name">John Michael Smith</h4>
            <div className="designation">Head Chef</div>
          </div>
          <div className="chef">
            <img src={require('../img/team-2.jpg')} alt="" />
            <h4 className="name">Thomas Joseph Anderson</h4>
            <div className="designation">Sous Chef</div>
          </div>
          <div className="chef">
            <img src={require('../img/team-3.jpg')} alt="" />
            <h4 className="name">Michael James Roberts</h4>
            <div className="designation">Line Cook</div>
          </div>
          <div className="chef">
            <img src={require('../img/team-4.jpg')} alt="" />
            <h4 className="name">William Patrick Wilson</h4>
            <div className="designation">Pastry Chef</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <div className="section">
            <h4 className="name">Company</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Reservation</p>
            <p>Privacy Policy</p>
            <p>Terms And Condition</p>
          </div>
          <div className="section">
            <h4 className="name">Company</h4>
            <p>23, Ahok Nagar, Udaipur</p>
            <p>+91 79632 52368</p>
            <p>fasoos@gmail.com</p>
          </div>
          <div className="section">
            <h4 className="name">Opening</h4>
            <p>Monday-Saturday</p>
            <p>12AM-12PM</p>
            <p>Sunday</p>
            <p>12AM-11PM</p>
          </div>
          <div className="section">
            <h4 className="name">Newsletter</h4>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Reservation</p>
            <p>Privacy Policy</p>
            <p>Terms And Condition</p>
          </div>
        </div>
        <div className="footer2">
          <p>Copyright © 2021 Inferno - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
export default Home;