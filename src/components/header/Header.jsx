import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import img from '../../assets/img/me.jpeg'
import './header.css'
const Header = () => {
  return (
   <header className="header" id='home'>
<div className="container header-container">
  <h5 className='text-muted'>Hello I'm </h5>
  <h1 className='text-muted'>Shabnam Rashidova</h1>
  <h5 className="text-light">Front-end Developer</h5>
  <CTA/>
  <HeaderSocials/>
  <div className="header-img">
    <img src={img} alt="img" className='me '/>
  </div>
  <a href="#contact" className='scroll-down ' >scroll down</a>
</div>
   </header>
  )
}

export default Header