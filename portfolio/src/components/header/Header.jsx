import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>
     <div className="container header__container">
       <h5>Hello I'm</h5>
       <h1>Ethan Doan</h1>
       <h5 className='text-light'>Fullstack Developer</h5>
       <CTA/>
       <HeaderSocials/>
       
       <div className="me">
         <img src={ME} alt="me"/>
       </div>
       
       <a href="#contact" className='scroll__down'>Keep It Moving</a>
     </div>
   </header>
  )
}

export default Header