import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactSVG from '../../assets/send.svg'
import './contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();


  const mostrarAlerta = (e) => {
    Swal.fire({
      icon: 'success',
      text: 'Mensaje enviado',
      timer: '3000'
    })

  }
  const sendEmail = (e) => {
    e.preventDefault();
    // Envio de mensaje
    emailjs.sendForm('service_a9sjabw', 'template_lb7pjxo', form.current, 'I95TsA84ROWVMaiGq')
    mostrarAlerta();
    e.target.reset()
  };
  return (
    <section className="contact section" id="contact">
      {/* {Titulo} */}
      <h2 className="section__title">Contáctame</h2>
      <span className="section__subtitle">Ponte en contacto</span>
      <div className="contact__container container grid">

        <div className="contact__content">

          {/* {Panel izquierdo} */}
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-discord-alt contact__card-icon"></i>

              <h3 className="contact__card-title">Discord</h3>
              <span className="contact__card-data">jhonatanmm.1995@gmail.com</span>

              <a href="mailto:jhonatanmm.1995@gmail.com" className="contact__button" target="_blank" rel="noopener noreferrer">Enviar mensaje{" "}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">(+51) 950 212 908</span>

              <a href="https://wa.link/bhbxb3" className="contact__button" target="_blank" rel="noopener noreferrer">Enviar mensaje{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
            </div>

          </div>
        </div>

        {/* {Panel de fomulario} */}
        <div className="contact__content">

          <form ref={form} onSubmit={sendEmail} className="contact__form">

            {/* Input Nombre */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Nombre</label>
              <input type="text" name='name' className='contact__form-input' placeholder='Ingrese su nombre' required />
            </div>

            {/* Input Email */}
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input type="email" name='email' className='contact__form-input' placeholder='Ingrese su email' required />
            </div>

            {/* Input Mensaje */}
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Mensaje</label>
              <textarea name="mensaje" cols="30" rows="10" className='contact__form-input' placeholder='Escriba su mensaje' required></textarea>
            </div>

            {/* Boton Enviar mensaje */}
            <button className="button button--flex" id='contact__send' >
              Enviar mensaje
              <img src={ContactSVG} className='button__icon' alt='sendSVG' />
            </button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact