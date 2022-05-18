import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { BsHouse, BsPersonCircle, BsHeadset, BsCashCoin,
  BsBoxArrowRight, BsWallet2, BsCardList, BsArrowLeftRight, BsBasket,
    BsLink45Deg, BsClipboardData, BsShop, BsPhone, BsChevronRight } from "react-icons/bs";


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
                <p>Hola Agustín</p>
                <div>Nivel 4 - Mercado Puntos <div className="sidebar__left__text__icon"><BsChevronRight/></div></div>
            </div>
      </div>
        <div className="sidebar__mainpanel__container">
          <div className="sidebar__mainpanel">
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" style={{color:"#008ad6" , borderLeft:"4.5px solid #008ad6"}} > <div className="sidebar__icons"><BsHouse/></div><span >Inicio</span></div></Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsPersonCircle/></div><span >Tu perfil</span></div></Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsHeadset/></div><span >Ayuda</span></div> </Link>
          </div>
          <div className="sidebar__border"/>
          <div className="sidebar__mainpanel">
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsWallet2/></div><span >Tu dinero</span></div></Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsCardList/></div><span >Actividad</span></div></Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsArrowLeftRight/></div><span >Enviar dinero</span></div> </Link>
          </div>
          <div className="sidebar__border"/>
          <div className="sidebar__mainpanel">
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsBasket/></div><span >Cobrar en tu local</span></div></Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsLink45Deg/></div><span >Link de pago</span></div></Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsClipboardData/></div><span >Informes y facturacion</span></div> </Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsCashCoin/></div><span >Planes de suscripción</span></div> </Link>
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsShop/></div><span >Tu negocio</span></div> </Link>
          </div>
          <div className="sidebar__border"/>

          <div className="sidebar__mainpanel">
            <Link to="/" className="links"><div className="sidebar__mainpanel__options" > <div className="sidebar__icons"><BsBoxArrowRight/></div><span >Salir</span></div></Link>
          </div>
          <div className="sidebar__border"/>

          <div className="sidebar__mainpanel">
            <Link to="/" className="links"><div className="sidebar__mainpanel__options"  > <div className="sidebar__icons"><BsPhone/></div><span id="sidebar__mainpanel__lastOption"><span>Tu celular es tu nueva billetera</span> <p>Descargá la app</p> </span></div></Link>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;
