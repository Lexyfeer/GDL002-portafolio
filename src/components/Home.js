import React, { Component, Fragment } from 'react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentHome">

          <h2>Nancy Rodríguez López</h2>
          <p>Front-end Developer</p>

          <div className="-txtHome">
            <p>El desarrollo de este proyecto esta inspirado en los años 80s, y el juego de <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=mnhZ19G_2YI">Double Dragon ( No lo conoces, haz click aquí )</a>, ¡los colores neon me encantan!.</p>
            <p>Esta es una Single Page Application, fue desarrollado desde cero utilizando ReactJS, CSS3 y un mínimo de Bootstrap; cuenta con una interfaz responsiva programada para una adaptación fluida en cualquier tipo de pantalla con Media Queries y Flexbox (Responsive Web Design).</p>
          </div>
          
        </div>
      </Fragment>
    )
  }
}

export default Home;