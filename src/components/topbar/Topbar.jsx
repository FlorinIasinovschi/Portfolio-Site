import { useState } from 'react'
import './topbar.scss'



export default function Topbar({ setIsMenu }) {


  return (
    <div className='topbar' id='topbar'>

      <div className='wrapper'>
        <div className='left'>
          <a href="#intro" id='logo'>Florin</a>
        </div>
        <div className='right'>
          <div className='nav-menu'>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className='smallMenu'>
            <span onClick={() => setIsMenu(true)}>Menu</span>
          </div>

        </div>
      </div>

    </div>
  )
}
