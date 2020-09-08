import React from 'react';
import '../stylesheets/Contact.scss';

function Contact() {
  return (
    <div className="wrapper">
      <div className="contact__main">
        <h2 className="title">Contacto</h2>
          <p className="contact__question">
            ¿Quieres ponerte en contacto conmigo?
          </p>
          <p className="contact__phrase">
            Puedes hacerlo rellenando el siguiente formulario
          </p>
          <form action="https://formspree.io/xnqgklry" method="post" className="contact__form">
            <label for="fullName" className="contact__form-label">Nombre</label>
            <input className="contact__form-input" type="text" id="fullName" name="fullName" placeholder="Tu nombre" required />
            <label for="email" className="contact__form-label">Email</label>
            <input className="contact__form-input" type="email" id="email" name="email" placeholder="tuemail@mail.com" required />
            <label for="message" className="contact__form-label">Mensaje</label>
            <textarea className="contact__form-input textarea" id="message" name="message" placeholder="Escríbeme lo que necesites"required></textarea>
            <input className="button_send" type="submit" value="Enviar" />         
          </form>
      </div>
    </div>
    );
  }

export default Contact;
