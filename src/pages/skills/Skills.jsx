import React, { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="skills">
      {/* Titulo de seccion */}
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Herramientas que manejo</span>

      <div className="skills__container container grid">

        {/* Seccion izquierdo */}
        <div className="skills__tabs"
          data-aos="zoom-in-right"
          data-aos-duration="1000">

          {/* Desarrollo FrontEnd */}
          <div className={toggleState === 1
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(1)}>
            <i className="uil uil-brackets-curly skills__icon"></i>
            <div>
              <h1 className="skills__title">Desarrollo Front-End</h1>
              <span className="skills__subtitle">Más de 6 meses</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          {/* Desarrollo BackEnd */}
          <div className={toggleState === 2
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(2)}>
            <i className="uil uil-database-alt skills__icon"></i>
            <div>
              <h1 className="skills__title">Desarrollo Back-End</h1>
              <span className="skills__subtitle">Más de 2 años</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>
        </div>

        {/* Seccion derecha */}
        <div className="skills__sections"
          data-aos="zoom-in-left"
          data-aos-duration="1000">

          {/* Tecnologias FrontEnd */}
          <div className={toggleState === 1
            ? "skills__content skills__content-active"
            : "skills__content"} >
            <div className="skills__list grid">

              {/* HTML*/}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">HTML 5</div>
                  <div className="skills__level">75%</div>
                </div>
                <div className="skills__bar">
                  <div id="html-bar"></div>
                </div>
              </div>

              {/* CSS */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">CSS 3</div>
                  <div className="skills__level">60%</div>
                </div>
                <div className="skills__bar">
                  <div id="css-bar"></div>
                </div>
              </div>

              {/* JAVASCRIPT */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">JavaScript</div>
                  <div className="skills__level">40%</div>
                </div>
                <div className="skills__bar">
                  <div id="js-bar"></div>
                </div>
              </div>

              {/* Tailwind */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">Tailwind</div>
                  <div className="skills__level">40%</div>
                </div>
                <div className="skills__bar">
                  <div id="js-bar"></div>
                </div>
              </div>

              {/* Flutter */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">Flutter</div>
                  <div className="skills__level">20%</div>
                </div>
                <div className="skills__bar">
                  <div id="flu-bar"></div>
                </div>
              </div>

              {/* REACT */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">REACT</div>
                  <div className="skills__level">15%</div>
                </div>
                <div className="skills__bar">
                  <div id="react-bar"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Tecnologias BackEnd */}
          <div className={toggleState === 2
            ? "skills__content skills__content-active"
            : "skills__content"} >
            <div className="skills__list grid">

              {/* JAVA */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">Java</div>
                  <div className="skills__level">80%</div>
                </div>
                <div className="skills__bar">
                  <div id="java-bar"></div>
                </div>
              </div>

              {/* SQL Server */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">SQL Server</div>
                  <div className="skills__level">60%</div>
                </div>
                <div className="skills__bar">
                  <div id="sql-bar"></div>
                </div>
              </div>

              {/* PHP */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">PHP</div>
                  <div className="skills__level">40%</div>
                </div>
                <div className="skills__bar">
                  <div id="php-bar"></div>
                </div>
              </div>

              {/* Python */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">Python</div>
                  <div className="skills__level">20%</div>
                </div>
                <div className="skills__bar">
                  <div id="py-bar"></div>
                </div>
              </div>

              {/* Node.js */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">Node.js</div>
                  <div className="skills__level">10%</div>
                </div>
                <div className="skills__bar">
                  <div id="node-bar"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Skills