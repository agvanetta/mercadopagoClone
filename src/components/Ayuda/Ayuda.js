import "./Ayuda.css";
import React from "react";
import Blocks from "./Blocks";

function Ayuda() {
  return (
    <div className="ayuda">
      <div className="ayuda__container">
        <h2>¿Con qué podemos ayudarte?</h2>
        <div className="ayuda__search">
          <input placeholder="Buscá en Ayuda"></input>
          <button>Buscar</button>
        </div>
        <Blocks
          title="Cuenta Mercado Pago"
          subTitle="Ingresos, transferencias, extracciones, inversiones y tarjetas."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#009EE3" fill-rule="nonzero">
                  <g>
                    <path
                      d="M16.89 3.395c1.16 0 2.1.94 2.1 2.1l-.001 1.503h.001v1.2h-.001v3.603h.001v1.2h-.001l.001 1.492c0 1.16-.94 2.1-2.1 2.1h-.01L1 16.519V3.395h15.89zm0 1.2H2.2v10.73l14.686.068c.501 0 .904-.403.904-.9l-.001-1.494-4.292-.012c-1.593-.004-2.893-1.251-2.984-2.822l-.005-.175c0-1.652 1.34-2.991 2.991-2.991l4.29-.001.001-1.503c0-.497-.403-.9-.9-.9zm.899 3.603h-4.29c-.989 0-1.79.803-1.79 1.792 0 .99.801 1.794 1.792 1.797l4.288.012V8.198zM15.4 9.394v1.2H13v-1.2h2.4z"
                      transform="translate(-46 -194) translate(46 194)"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          }
        />
      </div>
    </div>
  );
}

export default Ayuda;
