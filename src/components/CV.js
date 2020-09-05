import React from 'react';
import '../stylesheets/cv.scss';

function CV() {
    return (
    <div className="wrapper">
          <div className="cv__studies">
          <h3 className="cv__title">Breve resumen sobre mi</h3>
          <div className="cv__body">
            <p className="cv__paragraph">
              Estudié Turismo a través de una beca llamada CEURA otorgada en Viajes El Corte Inglés
              donde tenía que estudiar y trabajar a la vez y donde mi buen rendimiento, valorado a través de
              exámenes en el caso de las clases e informes en el caso de las horas de trabajo
              era esencial para poder mantenerla.
              Además de esto, los casi 9 años que estuve trabajando en Viajes El Corte Inglés me ayudaron
              a aprender a trabajar en equipo, a ser metódica y a tratar con clientes que se encontraban en 
              distintas situaciones.

              Al observar como avanzaban las tecnologías y el mercado electrónico, decidí dar un cambio
              a mi carrera estuando el Máster en SEO, SEM y Google Analytics en CICE, lo que me llevó a poder trabajar
              en distintas agencias de marketing y publicidad en el departamento de Paid Media.
              Esto me ayudó a despertar aún más mi interés por toda la parte del diseño y maquetación de páginas web,
              el crear páginas web interesantes para los usuarios y que llevaran a la conversión buscada por el cliente,
              el medir gracias a tags cada uno de los pasos del usuario, etc. Por lo que finalmente me animé a realizar
              el curso para conventirme en programadora Front-end de Adalab.

              Gracias a este curso he aprendido HTML5, CSS, JavaScript, React, llamadas a la API, test y un largo etc de cosas
              que me capacitan plenamente para trabajar en este maravilloso sector.
            </p>
            <div className="cv__work">
              <h3 className="cv__work-title">¿Dónde he trabajado?</h3>
              <ul>
              <li>2019-2020 La pequeña Fábrica</li>
              <li>2018-2019 Difunde Online</li>
              <li>2017-2018 Adtype Global</li>
              <li>2017 Relevnt Traffic</li>
              <li>2008-2014 Viajes el Corte Inglés</li>
              </ul>
            </div>
            <div className="cv__languages">
              <h3 className="cv__languages-title">Idiosmas</h3>
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
