import React from 'react';
//import { useState } from "react";
// import { useNavigate } from "react-router";
// import SweetAlert from "sweetalert2";
// import { login, auth } from '../lib/firebase';


const Login= ()=> {
    // const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleSubmit = async ( email, password) => {
  
    //     const user = auth.currentUser;
    //     if (user) {
    //     navigate("/Categories");
    //     } else {
    //       try {
    //         await login(email, password);
    //         navigate("/Login");
    //       } catch (error) {
    //         console.error(error);
    //         new SweetAlert({
    //           title: "Error",
    //           text: error.message,
    //           icon: "error",
    //           showConfirmButton: false,
    //           showCancelButton: true,
    //           cancelButtonText: "Ok",
    //           cancelButtonColor: "#FF4848",
    //           background: "#FAEEE0",
    //         });
    //       }
    //     }
    //   };

    return (
        <div>
      {/* <form className="form">
      <input type="email" placeholder="Email" onChange={handleEmail} />
      <input type="password" placeholder="Password" onChange={handlePassword} />
      
      <button
        {...attrs}
        className="primary-button"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(email, password);
        }}
      >
        Login
      </button>
    </form> */}
        </div>
    )
}
export default Login

