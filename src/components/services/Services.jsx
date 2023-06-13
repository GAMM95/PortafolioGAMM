import React, { useState } from 'react'
import './services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
      {/* Titulo */}
      <h2 className='section__title'>Servicios</h2>
      <span className='section__subtitle'>Lo que ofrezco</span>

      <div className="services__container container grid">

        {/* 1° contenedor */}
        <div className="services__content">
          {/* Descripcion */}
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          {/* Evento para abrir nueva ventana */}
          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver más
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>

          {/* Ventana contenedor 1 */}
          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">

              {/* Evento para cerrar ventana */}
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              {/* Titulo Contenedor */}
              
              <h3 className="services__modal-title">Product Designer</h3>
              {/* Subtitulo Contenedor */}
              <p className="services__modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquid ratione porro repudiandae suscipit commodi!</p>
              {/* Lista de descripcion del contenedor */}
              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* 2° contenedor */}
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              UI/UX <br /> Desginer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            Ver más
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>


          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">

              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquid ratione porro repudiandae suscipit commodi!</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* 3° contenedor */}
        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Desginer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            Ver más
            <i className="bx bx-right-arrow-alt services__button-icon"></i>
          </span>


          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">

              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aliquid ratione porro repudiandae suscipit commodi!</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, iure?</p>
                </li>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services