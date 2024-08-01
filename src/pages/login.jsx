import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./styles/register.css";
// import Add from "../assets/addAvatar.png"

export default function Login() {


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Log In</span>
        <form>
         
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          
          <button >Sign In</button>
          
        </form>
        <p>
          You don't have an account? 
        </p>
      </div>
    </div>
  );
}
