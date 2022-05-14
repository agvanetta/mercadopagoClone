import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BsHouse, BsCash, BsGraphUp, BsPersonDash, BsNewspaper } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className='sidebar__left'>
            <div className='sidebar__left__img'> 
                <img
                className='sidebar__left__imgProfile'
                src='https://mla-s1-p.mlstatic.com/D_NQ_NP_743979-MLA26548716210_122017-R.jpg'
                alt='img_profile'
                />
            </div>
            <div className='sidebar__left__text'>
                <p>Hola Agustín!</p>
                <div>Nivel 4 - Mercado Puntos </div>
            </div>
        </div>
       <div className="sidebar__mainpanel">
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsHouse/></div><span >Inicio</span></div></Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsCash/></div><span >Tu perfil</span></div></Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsGraphUp/></div><span >Ayuda</span></div> </Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsNewspaper/></div><span >Tu dinero</span></div> </Link>
       <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsPersonDash/></div><span >Actividad</span></div> </Link>
       </div>
    </div>
  );
}

export default Sidebar;
