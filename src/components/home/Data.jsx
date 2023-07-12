import React from 'react'
import HandSVG from '../../assets/hand.svg'
import ContactSVG from '../../assets/send.svg'

const Data = () => {
  return (
    <div className="home__data"
      data-aos="fade-up"
      data-aos-duration="1500">

      {/* Nombre */}
      <h1 className="home__title">Jhonatan Mantilla
        <img src={HandSVG} className='home__hand' alt='handSVG' />
      </h1>

      {/* Desempeño */}
      <h3 className="home__subtitle">Dev en formación</h3>
      <p className="home__description">Hola, soy <strong>ingeniero de minas</strong> y <strong>estudiante de ingeniería de sistemas</strong>, apasionado por las nuevas tecnologías y la programación.</p>

      {/* Boton de contacto */}
      <a href="#contact" className="button button--flex"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"F>
        Contáctame
        <img src={ContactSVG} className='button__icon' alt='sendSVG' />
      </a>
    </div>
  )
}

export default Data