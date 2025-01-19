import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactSVG from '../../assets/send.svg';
import './contact.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const mostrarAlerta = () => {
    toast.success("Mensaje enviado", {
      position: "bottom-right",
      draggable: true,
      showDuration: 1000,
      hideDuration: 1000,
      showEasing: "linear",
      hideEasing: "swing",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    });
  };

  const mostrarToastrError = (message) => {
    toast.error(message, {
      position: "bottom-right",
      draggable: true,
      showDuration: 1000,
      hideDuration: 1000,
      showEasing: "linear",
      hideEasing: "swing",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, mensaje } = form.current;

    // Verificar si los campos están vacíos
    if (!name.value || !email.value || !mensaje.value) {
      mostrarToastrError("Por favor, complete todos los campos.", 'Mensaje de advertencia');
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value || !emailRegex.test(email.value)) {
      mostrarToastrError("Por favor, ingresa un correo electrónico válido.", 'Mensaje de advertencia');
      return;
    }

    // Enviar mensaje usando EmailJS
    emailjs
      .sendForm(
        'service_mhd3shs', // Service ID
        'template_fybhxnn', // Template ID
        form.current, // Referencia al formulario
        'MjGzsMMRjkZc7Tlyz' // Public Key de tu cuenta en EmailJS
      )
      .then((result) => {
        console.log(result.text);
        mostrarAlerta(); // Mostrar alerta de mensaje enviado
        e.target.reset(); // Limpiar el formulario después del envío
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje: ', error.text);
      });
  };

  return (
    <section className="contact section" id="contacto">
      {/* Titulo */}
      <h2 className="section__title">Contáctame</h2>
      <span className="section__subtitle">Ponte en contacto</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          {/* Panel izquierdo */}
          <div
            className="contact__info"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <div className="contact__card">
              <FaDiscord className="contact__card-icon" />
              <h3 className="contact__card-title">Discord</h3>
              <span className="contact__card-data">jhonatanmm.1995@gmail.com</span>
              <a
                href="mailto:jhonatanmm.1995@gmail.com"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensaje{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <IoLogoWhatsapp className="contact__card-icon" />
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(+51) 950 212 908</span>
              <a
                href="https://wa.link/bhbxb3"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar mensaje{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Panel del formulario */}
        <div
          className="contact__content"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            {/* Input Nombre */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Ingrese su nombre"
              />
            </div>

            {/* Input Email */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Ingrese su email"
              />
            </div>

            {/* Input Mensaje */}
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Mensaje</label>
              <textarea
                name="mensaje"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Escriba su mensaje"
              ></textarea>
            </div>

            {/* Botón Enviar mensaje */}
            <div className="button__container">
              <button className="button button--flex" id="contact__send">
                Enviar mensaje
                <img src={ContactSVG} className="button__icon" alt="sendSVG" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Toastr */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
