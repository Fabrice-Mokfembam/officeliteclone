import React from 'react'
import logo from '../../assets/images/logo.2b9872ab.svg'
import './header.css'

function Header() {
  return (
    <div className='main-header-component'>
          <div className="logo"><img src={logo} alt="logo image" /></div>
    </div>
  )
}

export default Header
