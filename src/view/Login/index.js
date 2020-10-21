import React from 'react';
import './style.css';

export const Login = () => {
  const setUser = () => {
    let username = document.getElementById('username').value;
    let message = document.getElementById('message').value;
    localStorage.setItem('username', username);
    localStorage.setItem('message', message);
  };

  return (
    <div className="login-view__center-container">
      <div className="login-view__container">
        <h1>Enter your login credentials</h1>
        <form action="/profile">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            required
          ></input>
          <label htmlFor="message">Personalised message</label>
          <input
            type="test"
            id="message"
            placeholder="Enter personalised message"
            required
          ></input>
          <button
            onClick={() => {
              setUser();
            }}
            className="login-view__loginButton"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
