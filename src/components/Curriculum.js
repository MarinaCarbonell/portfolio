import React from "react";
import "../stylesheets/Curriculum.scss";
import m from "../images/M.png";
import { Link } from "react-router-dom";

function curriculum() {
  return (
    <div className="wrapper">
      <div className="cv">
        <Link to="/home">
          <img className="profile-img" src={m} alt="profile-img"></img>
        </Link>
        <h3 className="cv__title">Breve resumen sobre mi</h3>
        <div className="cv__body">
          <p className="cv__paragraph">
            <span class="first-letter">E</span>studié Turismo a través de una
            beca llamada CEURA otorgada en Viajes El Corte Inglés donde tenía
            que estudiar y trabajar a la vez y donde mi buen rendimiento,
            valorado a través de exámenes en el caso de las clases e informes en
            el caso de las horas de trabajo era esencial para poder mantenerla.
            Además de esto, los casi 9 años que estuve trabajando en Viajes El
            Corte Inglés me ayudaron a aprender a trabajar en equipo, a ser
            metódica y a tratar con clientes que se encontraban en distintas
            situaciones.
          </p>

          <p className="cv__paragraph">
            <span class="first-letter">A</span>l observar como avanzaban las
            tecnologías y el mercado electrónico, decidí dar un cambio a mi
            carrera estuando el Máster en SEO, SEM y Google Analytics en CICE,
            lo que me llevó a poder trabajar en distintas agencias de marketing
            y publicidad en el departamento de Paid Media. Esto me ayudó a
            despertar aún más mi interés por toda la parte del diseño y
            maquetación de páginas web, el crear páginas web interesantes para
            los usuarios y que llevaran a la conversión buscada por el cliente,
            el medir gracias a tags cada uno de los pasos del usuario, etc.
          </p>
          <p className="cv__paragraph">
            <span class="first-letter">P</span>or lo que finalmente me animé a
            realizar el curso para conventirme en programadora Front-end de
            Adalab. Gracias a este curso he aprendido HTML5, CSS, JavaScript,
            React, llamadas a la API, test y un largo etc de cosas que me
            capacitan plenamente para trabajar en este maravilloso sector.
          </p>
          <div className="cv__work">
            <h3 className="subtitle">¿Dónde he trabajado?</h3>
            <ul>
              <li className="experience appear-right">
                <span className="period">
                  <b>
                    <u>2019-PRESENTE</u>
                  </b>
                </span>
                <span className="company">La pequeña Fábrica</span>
              </li>
              <li className="experience appear-right">
                <span className="period">
                  <u>2018-2019</u>
                </span>
                <span className="company">Difunde Online</span>
              </li>
              <li className="experience appear-right">
                <span className="period">
                  <u>2017-2018</u>
                </span>
                <span className="company">Adtype Global</span>
              </li>
              <li className="experience appear-left">
                <span className="period">
                  <u>2017</u>
                </span>
                <span className="company">Relevant Traffic</span>
              </li>
              <li className="experience appear-left">
                <span className="period">
                  <u>2008-2014</u>
                </span>
                <span className="company">Viajes el Corte Inglés</span>
              </li>
            </ul>
          </div>
          <div className="cv__languages">
            <h3 className="subtitle">Idiomas</h3>
            <ul>
              <li className="cv__languages-level english">Inglés - B2</li>
              <li className="cv__languages-level french">Francés - B1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default curriculum;
