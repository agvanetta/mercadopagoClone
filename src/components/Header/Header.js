import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import "./Header.css"

function Header() {
  return (
    <div className='header'>
        
        <div className='header__right'>
            <p>Inicio</p>
            <div style={{fontSize:"25px"}}><FontAwesomeIcon icon={faBell} /></div>
        </div>
    </div>
  )
}

export default Header