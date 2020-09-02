import React from 'react';
import '../stylesheets/Contact.scss';


function Contact() {
  return (
    <div className="contact">
      <div className="contact__main">
        <h2 className="contact__principal">Contacto</h2>
          <p className="contact__question">
            ¿Quieres ponerte en contacto conmigo?
          </p>
          <p className="contact__text">  Escríbeme lo que necesites y te responderé en breve. </p>
        <form action="https://formspree.io/xnqgklry" method="post" className="contact__form">
          <label for="fullName">Nombre <span className="contact__icon-star"> *</span>
            <input type="text" id="fullName" name="fullName" placeholder="Tu nombre" required />
          </label>
          <label for="email">Email<span className="contact__icon-star"> *</span>
            <input type="email" id="email"
              name="email" placeholder="tuemail@mail.com" required />
          </label>
          <label for="message">Mensaje<span className="contact__icon-star"> *</span>
            <textarea className="contact__form textarea" id="message" name="message" placeholder="Escríbeme lo que necesites"
              required></textarea>
          </label>
          <input className="button_send" type="submit" value="Enviar" />
        </form>
        <p className="contact__text">También puedes hacerlo a través de mis Redes Sociales </p>
        <div className="rrss">
          <a className="linkedin" href="https://www.linkedin.com/in/marinacarbonellalvarez/"><i class="fab fa-linkedin-in"></i></a>
          <a className="twitter" href="https://twitter.com/tacooburritoo"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </div>
    );
  }

export default Contact;
