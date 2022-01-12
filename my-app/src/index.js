import React from "react";
import ReactDOM from "react-dom";
import App from "../src/routes/App";
import * as bootstrap from "bootstrap";
//import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/main.css";
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
