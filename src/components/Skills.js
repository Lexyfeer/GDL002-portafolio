import React, { Component, Fragment } from 'react';

import agil from '../assets/images/agil2.png';
import bootstrap from '../assets/images/bootstrap1.png';
import css3 from '../assets/images/css3.png';
import git from '../assets/images/git1.png';
import github from '../assets/images/github.jpg';
import html5 from '../assets/images/html5.png';
import jest from '../assets/images/jest.jpg';
import js from '../assets/images/js.png';
import kanban from '../assets/images/kanban3.jpg';
import mongodb from '../assets/images/mongodb1.png';
import nodejs from '../assets/images/nodejs1.png';
import npm from '../assets/images/npmlogo.png';
import react from '../assets/images/react.png';
import responsiveWeb from '../assets/images/responsive1.png';
import scrum from '../assets/images/scrum3.png';

class Skills extends Component {
  render() {
    return (
      <Fragment>
        <div className="contentSkills">
          <h2 className="neon">Habilidades técnicas</h2>

          <div className="containerCardsTecSkills">
            <div className="cardTecSkills border-primary">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img className="skills" src={html5} alt="HTML 5" />
                  HTML 5</li>
                <li className="list-group-item">
                  <img className="skills" src={css3} alt="CSS 3" />
                  CSS 3</li>
                <li className="list-group-item">
                  <img className="skills" src={js} alt="JavaScript" />
                  JavaScript</li>
              </ul>
            </div>
            <div className="cardTecSkills border-danger">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img className="skills" src={react} alt="React" />
                  React</li>
                <li className="list-group-item">
                  <img className="skills" src={nodejs} alt="NodeJS" />
                  NodeJS</li>
                <li className="list-group-item">
                  <img className="skills" src={npm} alt="npm" />
                  NPM</li>
              </ul>
            </div>
            <div className="cardTecSkills border-warning">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img className="skills" src={mongodb} alt="Mongodb" />
                  MongoDB</li>
                <li className="list-group-item">
                  <img className="skills" src={jest} alt="Jest" />
                  Jest</li>
                <li className="list-group-item">
                  <img className="skills" src={github} alt="Github" />
                  Github</li>
              </ul>
            </div>
            <div className="cardTecSkills border-info">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img className="skills" src={git} alt="Git" />
                  Git</li>
                <li className="list-group-item">
                  <img className="skills" src={bootstrap} alt="Bootstrap" />
                  Bootstrap</li>
                <li className="list-group-item">
                  <img className="skills" src={responsiveWeb} alt="Responsive Web" />Responsive Web Design</li>
              </ul>
            </div>
            <div className="cardTecSkills border-success">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img className="skills" src={agil} alt="Metodología agil" />
                  Metodología Agil</li>
                <li className="list-group-item">
                  <img className="skills" src={kanban} alt="Metodo kanban" />
                  Manejo de Kanban</li>
                <li className="list-group-item">
                  <img className="skills" src={scrum} alt="Scrum" />
                  Scrum</li>
              </ul>
            </div>
          </div>


          <h2>Habilidades Blandas</h2>

          <div className="containerCardsSoftSkills">
            <div className="cardSoftSkills border-success">
              <ul className="list-group list-group-flush">
                <li className="list-group-item item">Auto aprendizaje</li>
                <li className="list-group-item item">Trabajo en equipo</li>
              </ul>
            </div>

            <div className="cardSoftSkills border-info">
              <ul className="list-group list-group-flush">
                <li className="list-group-item item">Manejo del estrés</li>
                <li className="list-group-item item">Capacidad para resolver problemas</li>
              </ul>
            </div>

            <div className="cardSoftSkills border-warning">
              <ul className="list-group list-group-flush">
                <li className="list-group-item item">Adaptabilidad</li>
                <li className="list-group-item item">Inteligencia emocional</li>
              </ul>
            </div>

            <div className="cardSoftSkills border-danger">
              <ul className="list-group list-group-flush">
                <li className="list-group-item item">Escucha activa</li>
                <li className="list-group-item item">Perserverante</li>
              </ul>
            </div>

            <div className="cardSoftSkills border-primary">
              <ul className="list-group list-group-flush">
                <li className="list-group-item item">Empatía</li>
                <li className="list-group-item item">Servicio al cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment >

    )
  }
}

export default Skills;