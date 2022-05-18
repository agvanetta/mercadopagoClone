import React from 'react'
import DetalleCuenta from './DetalleCuenta';
import "./Inicio.css"
import Movements from './Movements.js';

function Inicio() {
  return (
    <div className='inicio'>
        <div className='inicio__left'>
            <DetalleCuenta/>
        </div>
            <Movements/>
    </div>
  )
}

export default Inicio