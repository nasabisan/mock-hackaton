import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import SweetAlert from "sweetalert2";
import { login, auth } from "../../lib/firebase";
import logo from "../../assets/LogoTotallok.png";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const handleEmail = (e) => setState({ ...state, email: e.target.value });
  const handlePassword = (e) =>
    setState({ ...state, password: e.target.value });

  const { email, password } = state;

  const handleSubmit = async (email, password) => {
    const user = auth.currentUser;
    if (user) {
      navigate("/Categories");
    } else {
      try {
        await login(email, password);
        navigate("/Categories");
      } catch (error) {
        console.error(error);
        new SweetAlert({
          title: "Error",
          text: error.message,
          icon: "error",
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: "Ok",
          cancelButtonColor: "#000000",
          background: "#FFFFFF",
          border: "#000000",
        });
      }
    }
  };

  return (
    <div>
      <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div class="container">
          <img src={logo} alt="logo-banner" className="img-logo"></img>
          </div>
      </nav>
    </div>

      <p>SIGN IN</p>
      <form className="form">
        <input type="email" className="email" placeholder="Email" onChange={handleEmail} />
        <input
          type="password" className="password"
          placeholder="Password"
          onChange={handlePassword}
        />

        <button className="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(email, password);
          }}
        >
          LOGIN
        </button>
      </form>
      <footer> 2022 TOTAL LOOK all rights reserved.</footer>
    </div>
  );
};
export default Login;
