import React from 'react'
import './header.css'
import headerIMG from '../../assets/headerimg.png';

const Header = () => {
  return (
    <div className="slide__header">
        <div className="slide__header-text">
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, in provident! Consequuntur facere, qui repudiandae odit nihil officia, unde reprehenderit aut doloremque magnam labore, sed quo nulla itaque odio quas?</p>
        </div>
        <div className="slide__header-img">
          <img src={headerIMG} alt="bagr"></img>
        </div>
    </div>
  )
}

export default Header