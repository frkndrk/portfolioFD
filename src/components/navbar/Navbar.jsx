import React, { useState } from 'react'
import "./navbar.scss"

const Navbar = () => {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className='navbar'>
      <div className="logo">
        Furkan Durak
      </div>
      <div className="menu1">
        <ul className='list'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <label>
        <input type="checkbox" checked={activeMenu} onChange={() => setActiveMenu(!activeMenu)} />
        <span class="menu"> <span class="hamburger"></span> </span>
      </label>
      <ul className={activeMenu ? 'mobileList activeUl' : 'mobileList'}>
        <li> <a onClick={() => setActiveMenu(false)} href="#Intro">Home</a> </li>
        <li> <a onClick={() => setActiveMenu(false)} href="#AboutMe">About</a> </li>
        <li> <a onClick={() => setActiveMenu(false)} href="#Projects">Projects</a> </li>
        <li> <a onClick={() => setActiveMenu(false)} href="#Footer">Contact</a> </li>

        <div className="shapes" /* style={{display: activeMenu ? "block" : "none", opacity: activeMenu && "1"}} */>
          <div className="shape1"></div>
          <div className="shape2"></div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar