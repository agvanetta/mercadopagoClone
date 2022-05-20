import React from 'react'
import DescubriMas from './DescubriMas';
import DetalleCuenta from './DetalleCuenta';
import "./Inicio.css"
import Movements from './Movements.js';

function Inicio() {
  return (
    <div className='inicio'>
        <div className='inicio__left'>
            <DetalleCuenta/>
            <DescubriMas/>
        </div>
            <Movements/>
    </div>
  )
}

export default Inicio