/* eslint-disable react/prop-types */
// npm modules
// import React from "react"
import { NavLink } from "react-router-dom"

// assets
import logo from '../../assets/logo/logo.png'

const Nav = (props) => {
  return (
    <nav>
      <NavLink to="/"><img src={logo} alt="Bridgify" /></NavLink>
      <NavLink to="/about"
      onScroll={() => props.handleScroll('about', '/about')}>
        About Us
      </NavLink>
      <NavLink to="/events"
      onScroll={() =>props. handleScroll('about', '/events')}>
        Upcoming Events
      </NavLink>
      <NavLink to="/newMember"
      onScroll={() => props.handleScroll('about', '/newMember')}>
        Join Our Club
      </NavLink>
      <NavLink to="/newBlogs"
      onScroll={() =>props. handleScroll('about', '/newBlogs')}>
        Blogs
      </NavLink>
      <NavLink to="/contacts"
      onScroll={() =>props. handleScroll('about', '/contacts')}>
        Contact US
      </NavLink>
      
    </nav>
  )
}

export default Nav