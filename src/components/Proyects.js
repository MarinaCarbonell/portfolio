import React from 'react';
import '../stylesheets/Proyects.scss';
import anonymous from '../docs/images/anonymous-proxy.png';
import queens from '../docs/images/queensofcode.png';
import awesome from '../docs/images/awesomeprofilecards.png';
import rick from '../docs/images/rickandmorty.png';
import html from '../docs/images/html5.png';
import css from '../docs/images/CSS.png';
import JS from '../docs/images/JS.png';
import react from '../docs/images/react.png';
import api from '../docs/images/api.png';
import sass from '../docs/images/sass.png';



function Proyects() {
    return (
      <div className="wrapper">
        <div className="title">
          Mis Proyectos
        </div>
        <div className="proyects__list">
          <div className="proyect">
            <h2>Anonymous Proxy</h2>
            <a href="https://marinacarbonell.github.io/Anonymous-Proxy/">
            <img className="proyect-img" src={anonymous} alt="anonymous-img"></img>
            </a>
            <img className="tech" src={html} alt="html-img"></img>
            <img className="tech" src={css} alt="css-img"></img>

          </div>
          <div className="proyect">
            <h2>Queen of Code</h2>
            <a href="https://marinacarbonell.github.io/Queens-of-Code/">
            <img className="proyect-img" src={queens} alt="queens-img"></img>
            </a>
            <img className="tech" src={html} alt="html-img"></img>
            <img className="tech" src={css} alt="css-img"></img>

          </div>
          <div className="proyect">
            <h2>Awesome Profile Cards</h2>
            <a href="https://marinacarbonell.github.io/awesome-profile-cards/">
            <img className="proyect-img" src={awesome} alt="awesome-img"></img>
            </a>
            <img className="tech" src={html} alt="html-img"></img>
            <img className="tech" src={css} alt="css-img"></img>

          </div>
          <div className="proyect">
            <h2>Rick and Morty</h2>
            <a href="https://marinacarbonell.github.io/Rick-and-Morty/#/">
            <img className="proyect-img" src={rick} alt="rick-img"></img>
            <img className="tech" src={html} alt="html-img"></img>
            <img className="tech" src={css} alt="css-img"></img>

            </a>
          </div>
        </div>
      </div>
             
  
    );
  }

export default Proyects;
