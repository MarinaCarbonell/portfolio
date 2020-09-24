import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Landing.scss';

function Landing(props) {
    return (
      <div className="wrapper">
        <div className="landing-wrapper">
          <div className="text">
            <p className="p p1">¡Hola! Soy Marina y hasta ahora he trabajado en <em>Marketing Digital.</em></p> 
            <p className="p p2">Como el mundo de web y de la programación me ha encantado</p>
            <p className="p p3">decidí formarme como <em>Programadora Front-End</em> en <a href="https://adalab.es/">Adalab</a>.</p>
            <p className="p p4">Donde realicé los siguientes <Link to="/proyects">Proyectos</Link></p>  
            <p className="p p5">
              Soy <em>aprendiz</em> incansable, cotilla del <em>código ajeno</em> y <em>lectora</em> de todo lo que cae ante mis ojos.
            </p>
            <p className="p p6">
             Si quieres saber más sobre mí, no dudes en visitar mi <Link to="/curriculum">Curríulum</Link>.
            </p>
            <p className="p p7">
              Si quieres ponerte en <Link to="/contact">contacto</Link> conmigo hazlo a través del
            </p>
          </div>
        </div>  
      </div>
    );
  }

export default Landing;
