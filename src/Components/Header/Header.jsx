import React from 'react'
import "./Header.css"
import logo from "C:\\Users\\balas\\Documents\\scrimba_react\\chefclaude\\src\\assets\\cheflogo.png"

const Header = () => {
  return (
    <div className="header">
        <img src={logo} className="img-logo" alt="logo" />
        <p>Chef Claude</p>
    </div>
    )
}

export default Header