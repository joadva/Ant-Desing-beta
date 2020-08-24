import React from "react";

import logo from "../img/logo-urgegas.png";
import "./Login.scss";

export default function Login(props) {
  return (
    <div className="container" id="container">
      <div className="form-container sign-in-container">
        <form onSubmit="">
          <h1 className="pow" color="#1E1E2F">
            Sign in
          </h1>

          <input type="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Enter Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <img src={logo} />
            <p>
              Urgegas is the solution to know the gas level of any type of tank,
              both stationary and cylindrical, in the most comfortable and
              simple way, seeking to save on consumption by monitoring the
              filling and selecting the most convenient supplier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
