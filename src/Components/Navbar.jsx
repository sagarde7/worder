import React from 'react'
import "./Navbar.css"

function Navbar(props) {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            {props.logo}
        </div>
        <div className="right">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>More</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
