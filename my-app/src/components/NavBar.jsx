import React from "react";
import { useNavigate } from "react-router-dom";
import iconNext from "../assets/iconNext.png";
const NavBar = () => {
  const navigate = useNavigate();
  const handleCategories = () => {
    navigate("/PromotionsAll");
  };
  return (
    <div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={handleCategories}>
          <section className="nav-link">
            <img src={iconNext} alt="icon-next" className="icon-navBar"></img>
            See all promotions
          </section>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
