import React from 'react'; 
import "../css_for_components/navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div className="navbar-items">
                            <div className="navbar-logo">
                                <p>LOGO PLACE HOLDER</p>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-items">
                            <ul className='navbar-options'>
                                <li><a href="">Home</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Articles</a></li>
                                <li><a href="">Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
