import React from 'react';
import '../stylesheets/Landing.scss';

function Landing(props) {
    return (
      <div className="wrapper">
        <div className="landing-wrapper">
          <p className="text">
            ¡Hola! Soy Marina y soy especialista en <em>Marketing Digital.</em> Como el mundo de web y de la programación me ha encantado
            decidí formarme como <em>Programadora Front-End</em> en <a href="https://adalab.es/">Adalab</a>.
          </p>
          <p className="text">
          Soy <em>aprendiz</em> incansable, cotilla del <em>código ageno</em> y <em>lectora</em> de todo lo que cae ante mis ojos.
          </p>
          <p className="text">
            Y si tú has llegado hasta aquí es porque estás interesado en mi a si que, ¡gracias!.
          </p>
        </div>  
      </div>
    );
  }

export default Landing;
