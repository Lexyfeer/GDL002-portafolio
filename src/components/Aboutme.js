import React , { Fragment } from 'react';
import PictureProfile from '../assets/images/PictureProfile.jpg'
import iconMusic from '../assets/images/icon-music.png';
import iconVideoGames from '../assets/images/icon-game.png';
import iconMovies from '../assets/images/icon-movies.png';
import iconPumpItUp from '../assets/images/tablero pump.jpg';

class Aboutme extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="contentAboutme">
          <h2>Algo sobre mi</h2> <br />
          <div className="containerProfilePicture">
            <img src={PictureProfile} className="profilePicture" alt="Foto de perfil" />
          </div>
          <p>Mi nombre completo es <strong> Nancy María de la Luz Rodríguez López</strong> soy de Guadalajara, Jalisco, antes de adentrarme en el mundo de la tecnología, estudié Licenciatura en nutrición y soy pasante de la misma, después de eso mi campo laboral había sido hasta ahora como recepcionista, secretaria o en ventas.</p> <br />
          <p>Algunos de mis pasatiempos son:</p>
          <div className="containerHobbies">
            <label>Música</label>
            <img className="hobbies" src={iconMusic} alt="Escuchar música" />
            <label>Videojuegos</label>
            <img className="hobbies" src={iconVideoGames} alt="Videojuegos" />
            <label>Películas</label>
            <img className="hobbies" src={iconMovies} alt="Películas" />
            <label>Pump it up</label>
            <img className="hobbies" src={iconPumpItUp} alt="Pump it up" />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Aboutme;