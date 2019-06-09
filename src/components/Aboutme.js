import React from 'react';
import PictureProfile from '../assets/images/PictureProfile.jpg'

class Aboutme extends React.Component {
  // constructor () {
  //   super()
  // }

  render() {
    return (
      <div className="contentAboutme">
        <h2>Algo sobre mi</h2> <br />
        <img src={PictureProfile} className="profilePicture" alt="Foto de perfil" />
        <p>Mi nombre completo es **Nancy María de la Luz Rodríguez López** soy de Guadalajara, Jalisco, antes de adentrarme en el mundo de la tecnologia, estudie Licenciatura en nutrcion y soy pasante de la misma, despues de eso mi campo laboral habia sido hasta ahora como recepcionista, secretaria o en ventas.</p> <br />
        <p>Agunos de mis pasatiempos son:</p>
        <div>
          <p>AQUI IMAGENES DE PASATIEMPOS</p>
        </div>
        <div>
          <p>AQUI ENLACES A MIS REDES SOCIALES</p>
        </div>

      </div>
    )
  }
}

export default Aboutme;