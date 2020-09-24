import React from 'react';
import '../stylesheets/Contact.scss';
import { Link } from 'react-router-dom';
import image from '../docs/images/M.png';


function Contact() {

  return (
    <div className="wrapper">
      <div className="contact">
      <Link to="/">
        <img className="profile-img" src={image} alt="profile-img"></img>
      </Link>
        <h2 className="title">¿Quieres ponerte en contacto conmigo?</h2>
          <p className="contact__phrase">
            Puedes hacerlo rellenando el siguiente formulario
          </p>
          <form action="https://formspree.io/xnqgklry" method="post" className="contact__form">
            <label for="fullName" className="contact__form-label">Nombre</label>
            <input className="contact__form-input" type="text" id="fullName" name="fullName" placeholder="Tu nombre" required />
            <label for="email" className="contact__form-label">Email</label>
            <input className="contact__form-input" type="email" id="email" name="email" placeholder="tuemail@mail.com" required />
            <label for="message" className="contact__form-label">Mensaje</label>
            <textarea className="contact__form-input" id="message" name="message" placeholder="Escríbeme lo que necesites"required></textarea>
            <input className="button_send" type="submit" value="Enviar"/>
            <input className="button_thanks" type="submit" value="¡Gracias!"/>          
          </form>
      </div>
    </div>
    );
  }

export default Contact;
