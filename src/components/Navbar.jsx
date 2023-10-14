import React from "react";
import "../css_for_components/navbar.css";

export default function Navbar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-left'>
            <div className='navbar-logo'>
              <img src='../src/assets/logo_svg.svg' alt='' />
            </div>
          </div>
          <div className='navbar-right'>
            <ul className='navbar-options'>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>About us</a>
              </li>
              <li>
                <a href=''>Articles</a>
              </li>
              <li>
                <a href='' id='signin_btn'>
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
