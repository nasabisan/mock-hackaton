import React from 'react'
import logo from "../assets/Agregar un subtítulo.png";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div class="container">
          <img src={logo} alt="logo-banner" className="img-logo"></img>

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
            <ul class="navbar-nav  mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  See all promotions
                </a>
              </li>
            </ul>
            <div className="buttons ">
              <a href="/" className="btn btn-outline-dark">
                <i className="fa fa-sign-in"></i>Login
              </a>
              <a href="/" className="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i>Cart (0)
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
