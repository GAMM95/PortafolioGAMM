import React from 'react';
import './scroll.css';

const Scroll = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    // Cuando el scroll se encuentra sobre los 560, se muestra el scroll
    if (this.scrollY >= 560) scrollUp.classList.add("mostrar-scroll");
    else scrollUp.classList.remove("mostrar-scroll");
  })
  return (
    <a href="#home" className="scrollup" rel="noopener noreferrer">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}

export default Scroll