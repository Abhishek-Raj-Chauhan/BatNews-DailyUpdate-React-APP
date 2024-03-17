import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50 ||
      document.body.scrollBottom > 50
    ) {
      document.getElementById("navb").classList.add("scrolled");
      document.querySelector(".navbar-brand").classList.add("scrolled");
      let navbars = document.querySelectorAll(".nav");
      navbars.forEach(function (navbar) {
        navbar.classList.add("scrolled");
      });
    } else {
      document.getElementById("navb").classList.remove("scrolled");
      document.querySelector(".navbar-brand").classList.add("scrolled");
      let navbars = document.querySelectorAll(".nav");
      navbars.forEach(function (navbar) {
        navbar.classList.remove("scrolled");
      });
    }
  }
  return (
    <nav className="navbar navbar-expand-lg" id="navb">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: "white", fontSize: "1.3rem" }}
        >
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img
            src="/logo512.png"
            style={{ height: "2rem", margin: "0rem 0.4rem 0rem 1.2rem" }}
            alt=""
          />
          <p style={{color:'#8ba2ff',fontSize:'1.9rem'}}>Bat</p><p style={{display:'contents'}}>News</p></div>
          
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/business" className="nav">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/general" className="nav">
                General
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/technology" className="nav">
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}