import React, { Fragment } from 'react';

import dataProjects from '../data/projects.json';

export default function Portfolio() {
  window.watsonAssistantChatOptions = {
    integrationID: 'bdaa381a-5cae-4cbd-9a7b-96a5d0ab42a9', // The ID of this integration.
    region: 'us-south', // The region your integration is hosted in.
    serviceInstanceID: '029c25be-e3c4-47d1-89a6-96c50a536d46', // The ID of your service instance.

    // Config option to change Carbon themes.
    carbonTheme: 'g90',
    onLoad: function (instance) {
      // Select the button element from the page.
      const button = document.querySelector('.chatLauncher');

      // Add the event listener to open your web chat.
      button.addEventListener('click', function clickListener() {
        instance.openWindow();
      });

      // Instance method to adjust specific CSS variables
      instance.updateCSSVariables({
        'BASE-font-family': 'Sans-serif',
        '$interactive-01': '#d5ea00',
        '$hover-primary': '#ffd400',
      });
      instance.render();
    },
  };
  setTimeout(function () {
    const t = document.createElement('script');
    t.src =
      'https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js';
    document.head.appendChild(t);
  });

  return (
    <Fragment>
      <div className='contentPortfolio'>
        <h2 className="neon">Estos son algunos de mis proyectos:</h2>

        <div className='card-deck'>
          {dataProjects.map((projectDetail, index) => {
            return (
              <div className='card' key={index}>
                <img
                  className='imgProjects card-img-top'
                  src={projectDetail.image}
                  alt={projectDetail.name}
                  title={projectDetail.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{projectDetail.name}</h5>
                  <p className='card-text'>{projectDetail.about}</p>
                  <ul>
                    <li className='card-note'>
                      Para más detalles pulsa el primer Link donde podras encontrar el README o el segundo link para ver el resultado final.
                    </li>
                  </ul>
                  <a
                    href={projectDetail.linkProject}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Ir al proyecto
                  </a>
                  <a
                    href={projectDetail.linkReadme}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    Ver más detalles del proyecto
                  </a>
                </div>
              </div>
            );
          })}

          <div className='card'>
            <img
              className='imgProjects card-img-top imgChatBot'
              src='https://res.cloudinary.com/lexyfeer/image/upload/v1616612647/Screen_Shot_2021-03-24_at_1.03.47_p.m..png'
              alt='Chatbot de Mixologia'
              title='Chatbot de Mixologia'
            />
            <div className='card-body'>
              <h5 className='card-title'>Chatbot de Mixologia</h5>
              <p className='card-text'>
                Este proyecto fue realizado con IBM Watson ,el objetivo de este
                chat es que brinde recetas de bebidas preparados de cocteleria
              </p>

              <button type='button' className='chatLauncher'>
                Ir al proyecto
              </button>
            </div>
          </div>


        </div>
      </div>
    </Fragment>
  );
}
