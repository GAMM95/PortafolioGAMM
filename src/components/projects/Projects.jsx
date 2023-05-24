import React from 'react';
import "./projects.css";
import Work from './Work';

const Projects = () => {
  return (
    <section className="proyect section" id="portfolio">
      <h2 className='section__title'>Portafolio</h2>
      <span className='section__subtitle'>Mis proyectos</span>

      <Work />
    </section>
  )
}

export default Projects