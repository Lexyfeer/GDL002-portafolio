import React, { Component, Fragment } from 'react';
import html5 from '../assets/images/html5.png';
import css3 from '../assets/images/css3.png';
import js from '../assets/images/js.png';
import react from '../assets/images/react.png';
import nodejs from '../assets/images/nodejs1.png';
import npm from '../assets/images/npmlogo.png';
import mongodb from '../assets/images/mongodb1.png';
import jest from '../assets/images/jest.jpg';
import github from '../assets/images/github.jpg';
import git from '../assets/images/git1.png';
import bootstrap from '../assets/images/bootstrap1.png';
import responsiveWeb from '../assets/images/responsive1.png';
import agil from '../assets/images/agil2.png';
import kanban from '../assets/images/kanban3.jpg';
import scrum from '../assets/images/scrum3.png';


class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentSkills">
          <h2 className="h2tecSkills">Habilidades técnicas</h2>

          <div className="containerSkills">
            <img className="skills" src={html5} alt="HTML 5" />
            <img className="skills" src={css3} alt="CSS 3" />
            <img className="skills" src={js} alt="JavaScript" />
            <img className="skills" src={react} alt="React" />
            <img className="skills" src={nodejs} alt="NodeJS" />
            <img className="skills" src={npm} alt="npm" />
            <img className="skills" src={mongodb} alt="Mongodb" />
            <img className="skills" src={jest} alt="Jest" />
            <img className="skills" src={github} alt="Github" />
            <img className="skills" src={git} alt="Git" />
            <img className="skills" src={bootstrap} alt="Bootstrap" />
            <img className="skills" src={responsiveWeb} alt="Responsive Web" />
            <img className="skills" src={agil} alt="Metodología agil" />
            <img className="skills" src={kanban} alt="Metodo kanban" />
            <img className="skills" src={scrum} alt="Scrum" />
          </div>

          <div className="containerCardsTecSkills">
            <div className="cardTecSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML 5</li>
                <li className="list-group-item">CSS 3</li>
                <li className="list-group-item">JavaScript</li>
              </ul>
            </div>
            <div className="cardTecSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React</li>
                <li className="list-group-item">NodeJS</li>
                <li className="list-group-item">NPM</li>
              </ul>
            </div>
            <div className="cardTecSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">MongoDB</li>
                <li className="list-group-item">Jest</li>
                <li className="list-group-item">Github</li>
              </ul>
            </div>
            <div className="cardTecSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Git</li>
                <li className="list-group-item">Bootstrap</li>
                <li className="list-group-item">Responsive Web Design</li>
              </ul>
            </div>
            <div className="cardTecSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Metodología Agil</li>
                <li className="list-group-item">Manejo de Kanban</li>
                <li className="list-group-item">Scrum</li>
              </ul>
            </div>
          </div>


          <h2 className="h2softSkills">Habilidades Blandas</h2>

          <div className="containerCardsSoftSkills">
            <div className="cardSoftSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Auto aprendizaje</li>
                <li className="list-group-item">Trabajo en equipo</li>
              </ul>
            </div>

            <div className="cardSoftSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Manejo del estrés</li>
                <li className="list-group-item">Capacidad para resolver problemas</li>
              </ul>
            </div>

            <div className="cardSoftSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Adaptabilidad</li>
                <li className="list-group-item">Inteligencia emocional</li>
              </ul>
            </div>

            <div className="cardSoftSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Escucha activa</li>
                <li className="list-group-item">Perserverante</li>
              </ul>
            </div>
            
            <div className="cardSoftSkills">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Empatía</li>
                <li className="list-group-item">Servicio al cliente</li>
              </ul>
            </div>
          </div>
        </div>


      </Fragment >

    )
  }
}

export default Skills;