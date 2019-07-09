import React, { Component, Fragment } from 'react';
import cipher from '../assets/images/cipher.png';
import dataLovers from '../assets/images/dataLovers.png';
import redSocial from '../assets/images/redSocial.png';


class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentPortfolio">
          <h2>Estos son algunos de mis proyectos:</h2>
          
          <div className="card-deck">
            <div className="card">
              <img className="imgProjects card-img-top" src={cipher} alt="Cipher" />
              <div className="card-body">
                <h5 className="card-title">Cipher</h5>
                <p className="card-text">Este proyecto lo realice únicamente con JavaScript sin ningún tipo de framework para nada, el objetivo de este proyecto era poder codificar y decodificar cualquier mensaje por medio del cifrado Cesar.</p>
                <p>Para más detalles pulsa el primer Link donde podras encontrar el README o el segundo link para ver el resultado final.</p>
                <a href="https://lexyfeer.github.io/gdl-2019-01-bc-core-cipher/src/" rel="noopener noreferrer" target="_blank">
                  Ir al proyecto
                </a>
                <a href="https://github.com/Lexyfeer/gdl-2019-01-bc-core-cipher/blob/master/README.md" rel="noopener noreferrer" target="_blank">
                  Ver más detalles del proyecto
                </a>
              </div>
            </div>
            <div className="card">
              <img className="imgProjects card-img-top" src={dataLovers} alt="DataLovers" />
              <div className="card-body">
                <h5 className="card-title">DataLovers</h5>
                <p className="card-text">Este proyecto se realizo únicamente con JavaScript sin ningún tipo de framework para nada, el objetivo de este proyecto era poder manipular datos de arreglos y poder mostrarlos, incluyendo filtros para la información y estadisticas.</p>
                <p>Para más detalles pulsa el primer Link donde podras encontrar el README o el segundo link para ver el resultado final.</p>
                <a href="https://lexyfeer.github.io/GDL002-data-lovers/src/" rel="noopener noreferrer" target="_blank">
                  Ir al proyecto
                </a>
                <a href="https://github.com/Lexyfeer/GDL002-data-lovers/blob/master/README.md" rel="noopener noreferrer" target="_blank">
                  Ver más detalles del proyecto
                </a>
              </div>
            </div>
            <div className="card">
              <img className="imgProjects card-img-top" src={redSocial} alt="Red Social" />
              <div className="card-body">
                <h5 className="card-title">Red Social React</h5>
                <p className="card-text">El objetivo de este proyecto era realizar una red social utilizando el lenguaje de React, para esto fue necesario utilizar Firebase como base de datos y algunos frameworks como Bootstrap para el CSS y para la parte de responsive utilice los media queries.</p>
                <p>Para más detalles pulsa el primer Link donde podras encontrar el README o el segundo link para ver el resultado final.</p>
                <a href="https://lexyfeer.github.io/GDL002-Red-Social-React/#/" rel="noopener noreferrer" target="_blank">
                  Ir al proyecto
                </a>
                <a href="https://github.com/Lexyfeer/GDL002-Red-Social-React/blob/master/README.md" rel="noopener noreferrer" target="_blank">
                  Ver más detalles del proyecto
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Portfolio;