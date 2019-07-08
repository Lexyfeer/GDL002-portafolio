import React, { Component, Fragment } from 'react';


class Contact extends Component {
  // constructor () {
  //   super()
  // }

  render() {
    return (
      <Fragment>
        <div className="contentContact">
          <h2>¿Te gustaría que trabajemos juntos?</h2>
          <p>¡Contáctame ahora mismo!</p>

          <form className="formContact">
            <div className="form-group">
              <label>Tu email</label>
              <input type="email" className="form-control" id="email" placeholder="Escribe tu correo electrónico" />
            </div>
            <div className="form-group">
              <label>Asunto</label>
              <input className="form-control form-control-sm" id="subject" type="text" placeholder="Asunto" />
            </div>
            <div className="form-group">
              <label>Mensaje</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
          </form>

          <a href="https://res.cloudinary.com/lexyfeer/image/upload/v1562606922/CV_Nancy_2.pdf" download="Curriculum CV-Nancy.pdf" rel="noopener noreferrer" target="_blank">
            DESCARGA MI CV AQUÍ
          </a>
        </div>
      </Fragment>
    )
  }
}

export default Contact;