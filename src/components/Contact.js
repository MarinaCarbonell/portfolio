import React, { useState } from "react";
import "../stylesheets/Contact.scss";
import { Link } from "react-router-dom";
import m from "../images/M.png";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState(false);
  const handleInputName = (evt) => {
    setName(evt.target.value);
  };
  const handleInputMail = (evt) => {
    setMail(evt.target.value);
  };
  const handleInputMessage = (evt) => {
    setMessage(evt.target.value);
  };
  const handleClickSubmit = (evt) => {
    setSubmit(true);
  };
  return (
    <div className="wrapper_contact">
      <div className="contact">
        <Link to="/home">
          <img className="profile-img" src={m} alt="profile-img"></img>
        </Link>
        <h1 className="title">Formulario de contacto</h1>
        <form
          action="https://formspree.io/xnqgklry"
          method="post"
          className="contact__form"
        >
          <label for="fullName" className="contact__form-label">
            Nombre
            {submit && name.length === 0 && (
              <i class="far fa-times-circle icon"></i>
            )}
            {name.length > 0 && <i class="far fa-check-circle icon"></i>}
          </label>
          <input
            onChange={handleInputName}
            className="contact__form-input"
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Tu nombre"
            required
          />
          <label for="email" className="contact__form-label">
            Email
            {submit && mail.length === 0 && (
              <i class="far fa-times-circle icon"></i>
            )}
            {mail.length > 0 && <i class="far fa-check-circle icon"></i>}
          </label>
          <input
            onChange={handleInputMail}
            className="contact__form-input"
            type="email"
            id="email"
            name="email"
            placeholder="tuemail@mail.com"
            required
          />
          <label for="message" className="contact__form-label">
            Mensaje
            {submit && message.length === 0 && (
              <i class="far fa-times-circle icon"></i>
            )}
            {message.length > 0 && <i class="far fa-check-circle icon"></i>}
          </label>
          <textarea
            onChange={handleInputMessage}
            className="contact__form-input"
            id="message"
            name="message"
            placeholder="Escríbeme lo que necesites"
            required
          ></textarea>
          <input
            className="button_send"
            type="submit"
            value="Enviar"
            onClick={handleClickSubmit}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
