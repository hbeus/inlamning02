import React from "react";
import "./style.css";

export const Login = () => {
  return (
    <div className="login-view__center-container">
      <div className="login-view__container">
        <h1>Hello World!</h1>
        <form>
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
          ></input>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
          ></input>
          <button class="login-view__loginButton">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
