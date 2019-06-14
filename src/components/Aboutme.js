import React from 'react';
// import { Link } from 'react-router-dom';
import PictureProfile from '../assets/images/PictureProfile.jpg'
import iconLinkedin from '../assets/images/icon-linkedin-52.png';
import iconGithub from '../assets/images/icon-github.png';

class Aboutme extends React.Component {
  // constructor () {
  //   super()
  // }

  render() {
    return (
      <div className="mainContainer">
        <div className="contentAboutme">
          <h2>Algo sobre mi</h2> <br />
          <img src={PictureProfile} className="profilePicture" alt="Foto de perfil" />
          <p>Mi nombre completo es **Nancy María de la Luz Rodríguez López** soy de Guadalajara, Jalisco, antes de adentrarme en el mundo de la tecnologia, estudie Licenciatura en nutrcion y soy pasante de la misma, despues de eso mi campo laboral habia sido hasta ahora como recepcionista, secretaria o en ventas.</p> <br />
          <p>Agunos de mis pasatiempos son:</p>
          <div>
            <p>AQUI IMAGENES DE PASATIEMPOS</p>
          </div>
          <div className="social">
            <div>
              <p>¡Sigueme en mis redes sociales !</p>
            </div>

            <a href="https://www.linkedin.com/in/nancyrodriguezlopez/" rel="noopener noreferrer" target="_blank">
              <label>LinkedIn</label>
              <img className="" src={iconLinkedin} alt="linkedin" />
            </a>

            <a href="https://github.com/Lexyfeer" rel="noopener noreferrer" target="_blank">
              <label>Github</label>
              <img className="" src={iconGithub} alt="github" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Aboutme;