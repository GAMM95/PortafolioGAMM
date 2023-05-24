import React from 'react'

const WorksItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title}</h3>
      <div className="links">
        <a href={item.github} className="work__button" target="_blank" rel="noopener noreferrer">Github <i class="uil uil-github" id="work__button-github"></i></a>
        <a href={item.demo} className="work__button" target="_blank" rel="noopener noreferrer">Demo <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
      </div>

    </div>
  )
}

export default WorksItems