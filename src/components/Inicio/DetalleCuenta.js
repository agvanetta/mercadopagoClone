import React from 'react'
import "./DetalleCuenta.css"
import {BsChevronRight} from "react-icons/bs";


function DetalleCuenta() {
  return (
             <section className='detallecuenta'>
                <div className='detallecuenta__disponible'>
                    <div>Dinero Invertido Disponible</div> <span>Tu CVU</span>
                </div>
                <div className='detallecuenta__dinero'>
                    <div className='detallecuenta__dinero__numeros'>
                        <div className='detallecuenta__dinero__numeros__1'>$ 7.062</div>
                        <div className='detallecuenta__dinero__numeros__2'>97</div>
                        <div className='detallecuenta__dinero__numeros__icon'>👁</div>
                    </div>
                    <span>
                        <div style={{ fontSize:"11px"}}><BsChevronRight/></div>
                    </span>
                </div>
                <div className='detallecuenta__aliquidar'>
                    <div>$0 a liquidar</div>
                </div>
                <div className='detallecuenta__rendimientos'>
                    <div className='detallecuenta__rendimientos__detalle'><b>$ 24.403 </b>generados en total</div>
                    <div className='detallecuenta__rendimientos__numeros'>
                        <span>+ 33,7%</span>
                        <div><BsChevronRight/></div>
                    </div>
                </div>
                <div className='detallecuenta__barra'></div>
                <div className='detallecuenta__buttons'>
                    <div>Ingresar dinero</div>
                    <div>Transferir dinero</div>
                </div>
            </section>
  )
}

export default DetalleCuenta