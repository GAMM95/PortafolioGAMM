import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
        
            <h3 className="about__title">Experiencia</h3>
            <span className="about__subtitle">8 años trabajando</span>
        </div>

        <div className="about__box">
        <i class='bx bxs-briefcase-alt-2 about__icon' ></i>

            <h3 className="about__title">Completados</h3>
            <span className="about__subtitle">3 proyectos</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>

            <h3 className="about__title">Soporte</h3>
            <span className="about__subtitle">24/7</span>
        </div>
    </div>
  )
}

export default Info