import React, { Component, Fragment } from 'react';

import icoPDF from '../assets/images/icoPdf.png';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentContact">
          <h2 className="neon">¿Te gustaría que trabajáramos juntos?</h2>

          <div className="-contactMe">
            <p>Envíame un correo electrónico ¡Y listo! me pondré en contacto contigo lo antes posible, ya sea por e-mail o por llamada según me indiques.</p>

            <p>ó descarga mi CV y ponte en contacto conmigo directamente vía telefónica o <a href="https://www.linkedin.com/in/nancyrodriguezlopez/" rel="noopener noreferrer" target="_blank">Linkedin</a>.</p>
          </div>

          <div className="-linksContactMe">
            <a target="_blank" href="mailto:lexyfeer@hotmail.com?Subject=Vi%20tu%20portafolio%20y%20me%20interesa%20trabajar%20contigo" rel="noopener noreferrer">
              ENVÍAME UN CORREO AQUÍ
          </a>

            <a target="_blank" href="https://res.cloudinary.com/lexyfeer/image/upload/v1617315847/Nancy_maria_de_la_luz_rodriguez_lopez.pdf">
              <img className="iconPdf" src={icoPDF} alt="Archivo PDF" />
              DESCARGA MI CV AQUÍ
          </a>
          </div>

          <h3 className="neon">¡HASTA PRONTO!</h3>
        </div>
      </Fragment>
    )
  }
}

export default Contact;