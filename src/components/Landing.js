import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Landing.scss";

function Landing(props) {
  return (
    <div className="wrapper">
      <div className="landing-wrapper">
        <div className="text">
          <p className="p p1">
            ¡Hola! Soy Marina y hasta ahora he trabajado en{" "}
            <em>Marketing Digital.</em>
          </p>
          <p className="p p2">
            Como el mundo web y de la programación siempre me ha encantado
          </p>
          <p className="p p3">
            decidí formarme como <em>Programadora Front-End</em> en{" "}
            <a href="https://adalab.es/">Adalab</a>,
          </p>
          <p className="p p4">
            donde realicé los siguientes{" "}
            <Link to="/proyects">
              <span className="underline">Proyectos</span>.
            </Link>
          </p>
          <p className="p p5">
            Soy <em>aprendiz</em> incansable, cotilla del <em>código ajeno</em>{" "}
            y <em>lectora</em> de todo lo
          </p>
          <p className="p p6">que cae ante mis ojos.</p>
          <p className="p p7">
            Si quieres saber más sobre mí, no dudes en visitar mi{" "}
            <Link to="/curriculum">
              <span className="underline">Currículum</span>.
            </Link>
          </p>
          <p className="p p8">
            Para ponerte en contacto conmigo, puedes hacerlo a través del
          </p>
          <p className="p p9">
            formulario que encontrarás haciendo click{" "}
            <Link to="/contact">
              <span className="underline">aquí</span>.
            </Link>
          </p>
          <p className="p p10">
            <i className="far fa-smile"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
