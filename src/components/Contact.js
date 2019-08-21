import React, { Component, Fragment } from 'react';
import icoPDF from '../assets/images/icoPdf.png';


class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentContact">
          <h2>¿Te gustaría que trabajáramos juntos?</h2>

          <p> Tan solo:</p>
          <ol className="contactMe">
            <li>Completa los datos del formulario.</li>
            <li>Da click en ENVIAR.</li>
            <li>Haz click en la validación de que no eres un robot.</li>
          </ol>

          <p> ¡Y listo! tratare de ponerme en contacto contigo lo antes posible, ya sea vía correo o e-mail según como tu me indiques en el mensaje.</p>

          <p><strong>Ó descarga mi CV y ponte en contacto conmigo directamente vía telefónica o Linkedin.</strong></p>

          <h3>¡HASTA PRONTO!</h3>

          {/* <a href="mailto:lexyfeer@hotmail.com?Subject=Vi%20tu%20portafolio%20y%20me%20interesa%20trabajar%20contigo" rel="noopener noreferrer">
              ENVÍAME UN CORREO AQUÍ
          </a> */}

          <form className="formContact" action="https://formspree.io/lexyfeer@hotmail.com" method="POST">
          {/* action="mailto:lexyfeer@hotmail.com" method="post" enctype="text/plain" */}
          {/* action="https://formspree.io/lexyfeer@hotmail.com" method="POST"> */}
            <p>¡Contáctame ahora mismo!</p>
            <div className="form-group">
              <label>Nombre</label>
              <input className="form-control form-control-sm" name="Nombre" type="text" placeholder="Nombre" />
            </div>
            <div className="form-group">
              <label>Tu email</label>
              <input type="email" className="form-control" name="correo" placeholder="Escribe tu correo electrónico" />
            </div>
            <div className="form-group">
              <label>Asunto</label>
              <input readOnly className="form-control form-control-sm"  value="Vi tu portafolio y me interesa trabajar contigo" name="asunto" type="text" placeholder="Asunto" />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea className="form-control" name="mensaje" rows="3"></textarea>
            </div>

            <button type="submit" className="btnSubmit btn btn-outline-success btn-lg">Enviar</button>

            <img className="iconPdf" src={icoPDF} alt="Archivo PDF" />

            <a href="https://res.cloudinary.com/lexyfeer/image/upload/v1564589758/Nancy_maria_de_la_luz_rodriguez_lopez.pdf" download="Curriculum CV-Nancy.pdf" rel="noopener noreferrer" target="_blank">
              DESCARGA MI CV AQUÍ
          </a>
          </form>
        </div>
      </Fragment>
    )
  }
}

export default Contact;