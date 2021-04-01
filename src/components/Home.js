import React, {Component, Fragment} from 'react';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentHome">
          <div className="post">
            <h2>Nancy Rodríguez López</h2>
            <p>Front-end Developer</p>

            <div className="txtHome">
              <p>El desarrollo de este proyecto esta inspirado en los años 80s, y el juego de Double Dragon, ¡los colores neon me encantan!.</p>
              <p>Esta es una Single Page Application, fue desarrollado desde 0 utilizando ReactJS, CSS3 y Bootstrap; cuenta con una interfaz responsiva programada para una adaptación fluida en cualquier tipo de pantalla con Media Queries y Flexbox (Responsive Web Design).</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home;