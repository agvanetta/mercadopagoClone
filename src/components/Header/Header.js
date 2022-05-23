import React, { useState } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-regular-svg-icons"
import "./Header.css"
import img from './moreinfoimg.png'
import {BsCaretUpFill} from "react-icons/bs";


function Header() {

  const [clicked, setClicked] = useState("none");
  const [position, setPosition] = useState("none");


  function doClick() {
    setPosition("fixed");
    setClicked("unset");
    console.log(clicked)
    console.log("ejecutado")
  }

  function didClick() {
    setClicked("none");
    console.log(clicked)
    console.log("ejecutado")
  }

  return (
    <div className='header'>
        <div className='header__right'>
            <p>Inicio</p>

            <div onClick={clicked === "none" ? doClick : didClick} 
            style={{fontSize:"25px"}}><FontAwesomeIcon icon={faBell} /></div>

            <div className='header__right__moreinfo' style={{display:clicked, position:position}}>
             
              <div className='header__right__moreinfo__1'>
              <span><BsCaretUpFill/></span>
              </div>
            
              <div className='header__right__moreinfo__2'>
                <div>Notificaciones</div>
                <span>⚙</span>
              </div>

              <div className='header__right__moreinfo__3'>
                <div><img
                      className='header__right__moreinfo__img'
                      src={img}
                      alt='img_moreinfo'
                      />
                </div>
                <div>
                  <h2>¡Ya enviamos tu transferencia!</h2>
                  <p>A Agustin Vanetta. cuenta del Banco Santander Rio .</p>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Header