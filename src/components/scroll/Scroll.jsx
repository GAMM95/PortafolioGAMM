// export default Scroll
import React, { useEffect } from 'react';
import './scroll.css';

const Scroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollUp = document.querySelector(".scrollup");
      if (window.scrollY >= 560) {
        scrollUp.classList.add("mostrar-scroll");
      } else {
        scrollUp.classList.remove("mostrar-scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a href="#inicio" className="scrollup" rel="noopener noreferrer">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scroll;
