import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Arrival.scss';

function Arrival() {
    return (
        <div className="arrival">
            <div>{`<div className=welcome>`}</div>
            <div className="paragrah">{`<p>`}</div>
            <div className="paragrah">{`Hello, world!`}</div>
            <Link to="/aboutme" className="paragrah">{`Haz click aquí para visitar mi portfolio`}</Link>
            <div className="paragrah">{`</p>`}</div>
            <div>{`<\div>`}</div>
        </div>
    );
  }

export default Arrival;
