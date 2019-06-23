import React from 'react';
import PictureProfile from '../assets/images/PictureProfile.jpg'
import iconMusic from '../assets/images/icon-music.png';
import iconVideoGames from '../assets/images/icon-game.png';
import iconMovies from '../assets/images/icon-movies.png';
import iconPumpItUp from '../assets/images/tablero pump.jpg';

class Aboutme extends React.Component {
  // constructor () {
  //   super();
  // this.state = {name: 'Nancy'};
  // }
//   render() {
//     return <div>My Component {this.state.name}</div>;
//   }
// };

render() {
  return (
    <div className="mainContainer">
      <div className="contentAboutme">
        <h2>Algo sobre mi</h2> <br />
        <div className="containerProfilePicture">
          <img src={PictureProfile} className="profilePicture" alt="Foto de perfil" />
        </div>
        <p>Mi nombre completo es **Nancy María de la Luz Rodríguez López** soy de Guadalajara, Jalisco, antes de adentrarme en el mundo de la tecnologia, estudie Licenciatura en nutrcion y soy pasante de la misma, despues de eso mi campo laboral habia sido hasta ahora como recepcionista, secretaria o en ventas.</p> <br />
        <p>Agunos de mis pasatiempos son:</p>
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
    </div>
  )
}
}

export default Aboutme;