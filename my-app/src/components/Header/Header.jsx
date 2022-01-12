import React from "react";
import logo from "../../assets/LogoTotallok.png";
//import iconBag from "../assets/icons8-bolsa-de-compras-50.png";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/Login");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white  py-3 shadow-sm">
        <div class="container">
          <section className="logotipo">
            <img
              src={logo}
              alt="logo-banner"
              className="img-logo"
              onClick={handleHome}
            ></img>
          </section>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex mx-auto">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search Products"
                aria-label="Search"
              />
              <button class="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
            <div className="buttons ">
              <section onClick={handleLogin} className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </section>
              <section className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-bag me-1"></i>
              </section>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
