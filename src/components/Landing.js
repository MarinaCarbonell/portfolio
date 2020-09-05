import React from 'react';
import '../stylesheets/Landing.scss';

function Landing(props) {
    return (
      <div className="wrapper">
        <div className="cv-wrapper">
          <span className="text">
            ¡Hola! Soy Marina y soy especialista en
          </span>
          <span className="text">
            Marketing Digital.
          </span>
          <span className="text">
            Como el mundo de web y de la programación me ha encantado
          </span>
          <span className="text">
            decidí formarme como
          </span>
          <span className="text">
            Programadora Front-End en Adalab
          </span>
          <span className="text">
            Soy aprendiz incansable, cotilla del código ageno y lectora de todo lo que cae ante mis ojos.
          </span>
          <span className="text">
            Y si tú has llegado hasta aquí es porque estás interesado en mi a si que, ¡gracias!.
          </span>
        </div>  
      </div>
    );
  }

export default Landing;
