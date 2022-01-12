import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, auth } from "../../lib/firebase";
import logo from "../../assets/LogoTotallok.png";
const HeaderAdministrator = () => {
  console.log("user", auth.currentUser.email);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogout = async () => {
    console.log("clicking");
    try {
      await logout(auth);
      console.log("saliendo de app");
      navigate("/");
    } catch (error) {
      setError("Server Error");
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
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
            <div className="buttons ">
              <section onClick={handleLogout} className="btn btn-outline-dark">
                <i className="fa-solid fa-right-from-bracket me-1"></i>Sign-out
              </section>
              {error && <div className="error">{error}</div>}
              <section className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-bag me-1"></i>
              </section>
              
            </div>
          </div>
          
        </div>
       
      </nav>
      <section className="">Welcome {auth.currentUser.email} </section>
    </div>
  );
};

export default HeaderAdministrator;
