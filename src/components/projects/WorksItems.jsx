import React from 'react'

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id} 
    data-aos="zoom-in"
    data-aos-duration="1000">
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description"> {item.description}</p>
      <p className="work__tech" > {item.technologies}</p>
      
      <div className="links">
        {/* Boton Github */}
        <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">
          Github
          <i class="uil uil-github" id="work__button-github">
          </i>
        </a>

        {/* Boton Demo */}
        <a href={item.demo} className="work__button" target="_blank" rel="noopener noreferrer">
          Info
          <i className="bx bx-right-arrow-alt work__button-icon" >
          </i>
        </a>
      </div>

    </div>
  )
}

export default WorksItems