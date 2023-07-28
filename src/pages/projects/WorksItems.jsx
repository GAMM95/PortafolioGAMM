import React, { useState } from 'react'
import { TfiClose } from 'react-icons/tfi'
import { TfiInfoAlt } from 'react-icons/tfi'
import { BsGithub } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

const WorksItems = ({ item }) => {

  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <div className="work__card" key={item.id}
        data-aos="zoom-in"
        data-aos-duration="1000">
        <img src={item.image} alt="" className='work__img' onClick={toggleModal} />
        <h3 className="work__title">{item.title}</h3>

        <div className="links">
          {/* Boton abrir Popup */}
          <a href={toggleModal} className="work__button" onClick={toggleModal}>
            Info <TfiInfoAlt />
          </a>

        </div>
      </div >


      {/* Popup modal */}
      {modal && (
        <div className="modal__container container grid">
          <div onClick={toggleModal} className='overlay'></div>

          {/* contenido del popup */}
          <div className="modal__content grid">

            {/* Lado Izquierdo del modal */}
            <div className="modal__img left"
              data-aos="fade-right"
              data-aos-offset="1500"
              data-aos-easing="ease-in-sine"
            >
              <img src={item.image} alt="" className='modal_img' />
            </div>

            {/* Lado derecho del modal */}
            <div className="modal__text right"
              data-aos="fade-left"
              data-aos-offset="1500"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="modal__title">{item.title}</h3>
              <p className="modal__description"> {item.description}</p>
              <p className="modal__tech" > {item.technologies}</p>

              <div className="button-modal grid mtop">

                {/* botones de enlace */}
                <div className="modal__links">
                  {/* Boton Github */}
                  <a href={item.github} className="modal__button" target="_blank" rel="noopener noreferrer">
                    Github<BsGithub id="modal__button-github" />
                  </a>

                  {/* Boton Demo */}
                  <a href={item.demo} className="modal__button" target="_blank" rel="noopener noreferrer">
                    Info <FaPlay className='modal__button-icon' />
                  </a>
                </div>

              </div>

            </div>

            {/* boton cerrar Modal */}
            <button className='close-modal btn_shadow' onClick={toggleModal}>
              <TfiClose />
            </button>

          </div>
        </div >
      )}
    </>

  )
}

export default WorksItems