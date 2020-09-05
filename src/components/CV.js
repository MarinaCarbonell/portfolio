import React from 'react';
import '../stylesheets/cv.scss';

function CV() {
    return (
    <div className="wrapper">
          <div className="cv__studies">
          <h3 className="title">Breve resumen sobre mi</h3>
          <div className="cv__body">
            <p className="cv__paragraph">
              Estudié Turismo a través de una beca llamada CEURA otorgada en Viajes El Corte Inglés
              donde tenía que estudiar y trabajar a la vez y donde mi buen rendimiento, valorado a través de
              exámenes en el caso de las clases e informes en el caso de las horas de trabajo
              era esencial para poder mantenerla.
              Además de esto, los casi 9 años que estuve trabajando en Viajes El Corte Inglés me ayudaron
              a aprender a trabajar en equipo, a ser metódica y a tratar con clientes que se encontraban en 
              distintas situaciones.
            </p>

            <p className="cv__paragraph">
              Al observar como avanzaban las tecnologías y el mercado electrónico, decidí dar un cambio
              a mi carrera estuando el Máster en SEO, SEM y Google Analytics en CICE, lo que me llevó a poder trabajar
              en distintas agencias de marketing y publicidad en el departamento de Paid Media.
              Esto me ayudó a despertar aún más mi interés por toda la parte del diseño y maquetación de páginas web,
              el crear páginas web interesantes para los usuarios y que llevaran a la conversión buscada por el cliente,
              el medir gracias a tags cada uno de los pasos del usuario, etc. Por lo que finalmente me animé a realizar
              el curso para conventirme en programadora Front-end de Adalab.
            </p>
            <p className="cv__paragraph">
              Gracias a este curso he aprendido HTML5, CSS, JavaScript, React, llamadas a la API, test y un largo etc de cosas
              que me capacitan plenamente para trabajar en este maravilloso sector.
            </p>
            <div className="cv__work">
              <h3 className="subtitle">¿Dónde he trabajado?</h3>
              <ul>
              <li className="experience">
                <span className="period">2019-PRESENTE</span>
                <span className="companie">La pequeña Fábrica</span>
              </li>
              <li className="experience">
                <span className="period">2018-2019</span>
                <span className="companie">Difunde Online</span>
              </li>
              <li className="experience">
                <span className="period">2017-2018</span>
                <span className="companie">Adtype Global</span>
              </li>
              <li className="experience">
                <span className="period">2017</span>
                <span className="companie">Relevant Traffic</span>
              </li>
              <li className="experience">
                <span className="period">2008-2014</span>
                <span className="companie">Viajes el Corte Inglés</span>
              </li>
              </ul>
            </div>
            <div className="cv__languages">
              <h3 className="subtitle">Idiomas</h3>
              <ul>
                <li>Inglés B2</li>
                <li>Francés B1</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
    );
  }

export default CV;
