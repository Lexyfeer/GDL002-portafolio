import React, { Fragment } from 'react';

import PictureProfile from '../assets/images/profilePicture.jpg'
import iconGym from '../assets/images/iconGym.png';
import iconMovies from '../assets/images/icon-movies.png';
import iconMusic from '../assets/images/icon-music.png';
import iconPumpItUp from '../assets/images/tablero pump.jpg';
import iconVideoGames from '../assets/images/icon-game.png';

class Aboutme extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid contentAboutme">
          <h2 className="neon">Algo sobre mi</h2>

          <div className="-infoAboutMe">
            <div className="profilePicture">
              <img src={PictureProfile} alt="Foto de perfil" />
            </div>

            <div className="txtAboutMe">
              <p>Me llamo <b> Nancy </b>, soy egresada de la segunda generación en Guadalajara del Bootcamp de Desarrollo web con especialidad en Front End de <a target="_blank" rel="noopener noreferrer" href="https://www.laboratoria.la/">Laboratoria</a>. Aunque soy pasante de la Licenciatura en Nutrición, hasta antes de iniciarme en el mundo tecnológico mis experiencias laborales habían sido en atención a clientes, puestos administrativos o en ventas.</p>

              <p>Me gusta coleccionar encendedores, me encanta salir a tomar aire fresco en los parques, también me gusta el deporte desde andar en bicicleta, patinar, ir al gym o a veces hacer crossfit; otra de mis actividades favoritas es ir a bailar en la Pump It Up (video juegos); a veces veo anime, series de “moda”; también me fascina comer y descubrir nuevos sabores, trato de probar un poco de todo pa’que no me lo cuenten.</p>

              <p>Algunos de mis pasatiempos son:</p>

              <div className="containerHobbies">
                <img className="hobbies" src={iconMusic} alt="Escuchar música" />
                <img className="hobbies" src={iconVideoGames} alt="Videojuegos" />
                <img className="hobbies" src={iconMovies} alt="Películas" />
                <img className="hobbies" src={iconPumpItUp} alt="Pump it up" />
                <img className="hobbies" src={iconGym} alt="Ejercicio" />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Aboutme;