import React from 'react'
import "./Inicio.css"
import Movements from './Movements.js';

function Inicio() {
  return (
    <div className='inicio'>
        <div className='inicio__left'>
            <section>
                <div>
                    <div>Dinero Invertido Disponible</div> <div>Tu CVU</div>
                </div>
                <div>
                    <div>
                        <div>$ 7.062</div><div>97</div><div>👁</div>
                    </div>
                    <div>
                        <div>+</div>
                    </div>
                </div>
                <div>
                    <div>$0 a liquidar</div>
                </div>
                <div className="sidebar__border"/>
                <div>
                    <div><b>$ 24.403</b>generados en total</div>
                    <div>
                        <div>33.7%</div>
                        <div>+</div>
                    </div>
                </div>
                <div>
                    <div>Ingresar dinero</div>
                    <div>Transferir dinero</div>
                </div>
            </section>
        </div>
            <Movements/>
    </div>
  )
}

export default Inicio