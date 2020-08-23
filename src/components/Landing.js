import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
    return (
      <div className="landing">
        <p>Marina Carbonell</p>
        <button className="english-button">
            <Link to="/hello">Hello!</Link>
        </button>
        <button className="spanish-button">
            <Link to="/hola">¡Hola!</Link>
        </button>
      </div>
             
  
    );
  }

export default Landing;
