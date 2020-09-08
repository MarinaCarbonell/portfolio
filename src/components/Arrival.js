import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Arrival.scss';

function Arrival() {
    return (
        <div className="arrival">
            <button className="arrival__button" type="button">
                <Link to="/aboutme" >Hello, world!</Link>
            </button>
        </div>
    );
  }

export default Arrival;
