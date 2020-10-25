import React from "react";
import "../stylesheets/Proyects.scss";
import { Link } from "react-router-dom";
import image from "../images/M.png";
import anonymous from "../images/anonymous-proxy.png";
import queens from "../images/queensofcode.png";
import awesome from "../images/awesomeprofilecards.png";
import rick from "../images/rickandmorty.png";
import html from "../images/html5.png";
import css from "../images/CSS.png";
import JS from "../images/JS.png";
import react from "../images/react.png";
import sass from "../images/sass.svg";
import api from "../images/api.png";

function Proyects() {
  return (
    <div className="wrapper_projects">
      <Link to="/">
        <img className="profile-img" src={image} alt="profile-img"></img>
      </Link>
      <div className="title">Mis Proyectos</div>
      <div className="proyect">
        <div className="proyect__list">
          <h2 className="proyect__title">Anonymous Proxy</h2>
          <a href="https://marinacarbonell.github.io/Anonymous-Proxy/">
            <img
              className="proyect__img"
              src={anonymous}
              alt="anonymous-img"
            ></img>
          </a>
          <div className="tech_list">
            <img className="tech_list__item" src={html} alt="html-img"></img>
            <img className="tech_list__item" src={css} alt="css-img"></img>
            <img className="tech_list__item" src={sass} alt="sass-img"></img>
          </div>
        </div>
        <div className="proyect__list">
          <h2 className="proyect__title">Queen of Code</h2>
          <a href="https://marinacarbonell.github.io/Queens-of-Code/">
            <img className="proyect__img" src={queens} alt="queens-img"></img>
          </a>
          <div className="tech_list">
            <img className="tech_list__item" src={html} alt="html-img"></img>
            <img className="tech_list__item" src={css} alt="css-img"></img>
            <img className="tech_list__item" src={sass} alt="sass-img"></img>
          </div>
        </div>
        <div className="proyect__list">
          <h2 className="proyect__title">Awesome Profile Cards</h2>
          <a href="https://marinacarbonell.github.io/awesome-profile-cards/">
            <img className="proyect__img" src={awesome} alt="awesome-img"></img>
          </a>
          <div className="tech_list">
            <img className="tech_list__item" src={html} alt="html-img"></img>
            <img className="tech_list__item" src={css} alt="css-img"></img>
            <img className="tech_list__item" src={JS} alt="js-img"></img>
            <img className="tech_list__item" src={sass} alt="sass-img"></img>
            <img className="tech_list__item" src={api} alt="api-img"></img>
          </div>
        </div>

        <div className="proyect__list">
          <h2 className="proyect__title">Rick and Morty</h2>
          <a href="https://marinacarbonell.github.io/Rick-and-Morty/#/">
            <img className="proyect__img" src={rick} alt="rick-img"></img>
            <div className="tech_list">
              <img className="tech_list__item" src={html} alt="html-img"></img>
              <img className="tech_list__item" src={css} alt="css-img"></img>
              <img className="tech_list__item" src={sass} alt="sass-img"></img>
              <img className="tech_list__item" src={api} alt="api-img"></img>
              <img
                className="tech_list__item"
                src={react}
                alt="react-img"
              ></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
