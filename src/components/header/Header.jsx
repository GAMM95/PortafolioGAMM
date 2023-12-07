import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/gamm-logo.ico'

const Header = () => {
  /* ========= Cambiar fondo del encabezado ========= */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    // Cuando el scroll se encuentra sobre los 200, se muestra el scroll del encabezado
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  })
  /* ========= Toggle Menu ========= */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
      <nav className="nav container">
        {/* Logo */}
        <a href="index.html" className="nav__logo">
          <img src={logo} className='logo' alt='logoG'></img>
        </a>

        {/* Menu de items */}
        <div className={Toggle ? "nav__menu show-menu" :
          "nav__menu"}>
          <ul className="nav__list grid">

            {/* Home item */}
            <li className="nav__item">
              <a href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === "#home"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>Inicio
              </a>
            </li>

            {/* About me Item */}
            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')}
                className={activeNav === "#about"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>Sobre mí
              </a>
            </li>

            {/* Skills Item */}
            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')}
                className={activeNav === "#skills"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>Habilidades
              </a>
            </li>

            {/* Services Item */}
            {/*}
            <li className="nav__item">
              <a href="#services" onClick={() => setActiveNav('#services')}
                className={activeNav === "#services"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Servicios
              </a>
            </li>
            */}

            {/* Proyects Item */}
            <li className="nav__item">
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
                className={activeNav === "#portfolio"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>Proyectos
              </a>
            </li>

            {/* Contact Item */}
            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav('#contact')}
                className={activeNav === "#contact"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-message nav__icon"></i>Contacto
              </a>
            </li>
          </ul>

          {/* Evento cerrar menu - Vista de dispositivos */}
          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        {/* Evento mostrar menu - Vista de dispositivos */}
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
export default Header