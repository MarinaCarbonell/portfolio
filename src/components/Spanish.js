import React from 'react';
import '../stylesheets/Cv.scss';

function Spanish() {
    return (
      <div className="cv-wrapper">
        <div className="name">
          <span>Marina</span>
          <span>Carbonell</span>
          <span>Álvarez</span>
        </div>
        <div className="burguer-menu">
          <div>Sobre Mí</div>
          <div>Mi Currículum</div>
          <div>Proyetos</div>
          <div>Contacto</div>
          <div className="text">
        </div>
          <p>
            ¡Hola! Soy Marina y soy especialista en Marketing Digital en la parte de SEM, Google Analytics, Tag Manager y Social Media y me he reconvertido en
            programadora Front-end gracias a Adalab y busco poder dedicarme a ello.
          </p>
          <p>
            Y si tú has llegado hasta aquí es porque estás interesado en mi CV a si que, ¡gracias!
          </p>
        </div>
      </div>
    );
  }

export default Spanish;
