import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
      <nav id="main-nav" className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            <img
              src={require('./images/logo.png')}
              className="me-2"
              width="100"
              height="40"
              alt="Agri Logo"
              loading="lazy"
            />
            <b>Agri<span>Grow</span></b></a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home<i id="icon"className="fa fa-home"></i></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact<i id="icon" className="fa fa-phone"></i></Link> 
              </li>
              <li className="nav-item">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Learn More <i id="icon" className="fa fa-book"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                <Link className="dropdown-item" to="/Learnmore">Learn Here</Link>
                 </li>
                <li>
                  <Link className="dropdown-item" to="/Video">Videos</Link>
                </li>
              </ul>
  
              </li>
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Login/Register<i id="icon" className="fa fa-user"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/Buyerlogin">Buyer Login</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/BuyerRegistration">Buyer Registration</Link>
                </li>
                <li >
                <Link className="dropdown-item" to="/Sellerlogin">Seller Login</Link>
                 </li>
                <li>
                  <Link className="dropdown-item" to="/SellerRegistration">Seller Registration</Link>
                </li>
              </ul>
            </ul>
            <span className="navbar-text">
            <Link to="/Ebazar"><i className="fas fa-shopping-basket"></i><b>E-Bazar</b></Link>
          </span>
        </div>
    </div>
</nav >
    </div >
  )
}
