import React from "react";
import "./style.css";

export const Profile = () => {
  const username = localStorage.getItem("username");
  const message = localStorage.getItem("message");

  return (
    <div className="profile-view__center-container">
      <div className="profile-view__container">
        <h1>Hello {username}</h1>
        <p>Personalised message:</p>
        <p>
          <span className="profile-view__message">{message}</span>
        </p>
        <form action="/">
          <button className="profile-view__logoutbutton">Log out</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
