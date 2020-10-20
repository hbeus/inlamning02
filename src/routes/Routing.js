import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Profile from "../view/Profile";
import Login from "../view/Login";


const Routing = () => {
  return (
    <Router>
      <Login path="/" />
      <Profile path="profile" />
    </Router>
  );
};

export default Routing;