import React from 'react'
import HandSVG from '../../assets/hand.svg'
import ContactSVG from '../../assets/send.svg'
import FileSVG from '../../assets/files.svg'
import CV_GAMM from "../../assets/CV_Mantilla_Miñano_Jhonatan.pdf"
import { Typewriter } from 'react-simple-typewriter'

const Data = () => {
  return (
    <div className="home__data"
      data-aos="fade-up"
      data-aos-duration="1500">

      {/* Titulo Nombre */}
      <h1 className="home__title">Jhonatan Mantilla
        <img src={HandSVG} className='home__hand' alt='handSVG' />
      </h1>

      {/* Desempeño */}
      <h3 className="home__subtitle">
        <Typewriter className='subtitle'
          words={['Ingeniero', 'Programador']}
          loop
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={60}
          delaySpeed={1000}
        />
      </h3>

      {/* Descripcion del inicio */}
      <p className="home__description">
        Hola, soy <strong>ingeniero de sistemas y de minas</strong> con un fuerte interés en la programación y las nuevas tecnologías.
      </p>
      <p className="home__description">
        Mi enfoque principal está en desarrollar soluciones innovadoras utilizando herramientas modernas como <i>PHP, Java, SQL Server, Flutter y Frameworks como Spring Boot, React, Tailwind CSS</i>. Me apasiona aprender constantemente y enfrentar nuevos desafíos tecnológicos, lo que me ha llevado a trabajar en proyectos diversos y mejorar mis habilidades tanto en desarrollo frontend como backend.
      </p>
      <p className="home__description">
        Mi objetivo es aplicar mi conocimiento en el desarrollo de software para resolver problemas del mundo real, combinando mi formación técnica con mi creatividad y enfoque analítico.
      </p>

      {/* Botón de contacto */}
      <div className="button__container">
        <a download="CV_Mantilla_Miñano_Jhonatan.pdf" href={CV_GAMM} className="button button--flex" id='about__download'
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000">
          Descargar CV
          <img src={FileSVG} className='button__icon' alt='files' />
        </a>

        <a href="#proyectos" className="button button--flex"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000">
          Ver proyectos
          <img src={ContactSVG} className='button__icon' alt='sendSVG' />
        </a>
      </div>

    </div>
  )
}

export default Data