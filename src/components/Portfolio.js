import React, { Fragment } from 'react';
import dataProjects from '../data/projects.json';


export default function Portfolio() {
  return (
    <Fragment>
      <div className="contentPortfolio">
        <h2>Estos son algunos de mis proyectos:</h2>

        <div className="card-deck">
          {dataProjects.map((projectDetail, index) => {
            return (
              <div className="card" key={index}>
                <img className="imgProjects card-img-top" src={projectDetail.image} alt={projectDetail.name} title={projectDetail.name} />
                <div className="card-body">
                  <h5 className="card-title">{projectDetail.name}</h5>
                  <p className="card-text">{projectDetail.about}</p>
                  <p>Para más detalles pulsa el primer Link donde podras encontrar el README o el segundo link para ver el resultado final.</p>
                  <a href={projectDetail.linkProject} rel="noopener noreferrer" target="_blank">
                    Ir al proyecto
                </a>
                  <a href={projectDetail.linkReadme} rel="noopener noreferrer" target="_blank">
                    Ver más detalles del proyecto
                </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}