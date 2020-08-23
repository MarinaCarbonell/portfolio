import React from 'react';
import '../stylesheets/Landing.scss';
import { Link } from 'react-router-dom';

function Landing() {
    return (
      <div className="landing">
        <p>Marina Carbonell Álvarez.</p>
        <div>
          <button className="button">
            <Link to="/hello">Hello!</Link>
          </button>
          <button className="button">
            <Link to="/hola">¡Hola!</Link>
          </button>
        </div>
      </div>
             
  
    );
  }

export default Landing;
