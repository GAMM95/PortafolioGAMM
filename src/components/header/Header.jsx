import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/gamm-logo.ico'

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#inicio");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <a href="#inicio"
                onClick={() => setActiveNav('#inicio')}
                className={activeNav === "#inicio"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-estate nav__icon"></i>Inicio
              </a>
            </li>

            {/* About me Item */}
            {/* <li className="nav__item">
              <a href="#sobre-mi" onClick={() => setActiveNav('#sobre-mi')}
                className={activeNav === "#sobre-mi"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-user nav__icon"></i>Sobre mí
              </a>
            </li> */}

            {/* Skills Item */}
            <li className="nav__item">
              <a href="#habilidades" onClick={() => setActiveNav('#habilidades')}
                className={activeNav === "#habilidades"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i>Habilidades
              </a>
            </li>

            {/* Proyects Item */}
            <li className="nav__item">
              <a href="#proyectos" onClick={() => setActiveNav('#proyectos')}
                className={activeNav === "#proyectos"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i>Proyectos
              </a>
            </li>

            {/* Formacion Item */}
            <li className="nav__item">
              <a href="#formacion" onClick={() => setActiveNav('#formacion')}
                className={activeNav === "#formacion"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-graduation-cap nav__icon"></i>Formación
              </a>
            </li>

            {/* Services Item */}
            {/* <li className="nav__item">
              <a href="#servicios" onClick={() => setActiveNav('#servicios')}
                className={activeNav === "#servicios"
                  ? "nav__link active-link"
                  : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i>Servicios
              </a>
            </li> */}

            {/* Contact Item */}
            <li className="nav__item">
              <a href="#contacto" onClick={() => setActiveNav('#contacto')}
                className={activeNav === "#contacto"
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