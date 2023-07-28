import React from 'react';
import "./projects.css";
import './modal.css'
import Work from './Work';

const Projects = () => {
  return (
    <section className="proyect section" id="portfolio">
      {/* Titulo */}
      <h2 className='section__title'>Proyectos</h2>
      <span className='section__subtitle'>Mi portafolio de proyectos realizados</span>

      <Work />
    </section>
  )
}

export default Projects