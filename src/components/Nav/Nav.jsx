/* eslint-disable react/prop-types */
// npm modules
// import React from "react"
import { NavLink } from "react-router-dom"

// assets
import logo from '../../assets/logo/logo.png'

//css
import './Nav.css'

const Nav = (props) => {
  return (
    <nav>
      <div className="right-nav">
      <NavLink to="/" className="home">Bridgify</NavLink>
      <NavLink to="/about" id="about" className="nav-bar">
        About Us
      </NavLink>
      <NavLink to="/events" className="nav-bar">
        Upcoming Events
      </NavLink>
      <NavLink to="/members" className="nav-bar">
        Join Our Club
      </NavLink>
      <NavLink to="/contacts" className="nav-bar"
      onScroll={() =>props. handleScroll('contacts', '/contacts')}>
        Contact US
      </NavLink>
      </div>
      
    </nav>
  )
}

export default Nav