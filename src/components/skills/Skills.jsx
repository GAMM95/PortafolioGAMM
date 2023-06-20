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
        <div className="skills__tabs">

          {/* Desarrollo FrontEnd */}
          <div className={toggleState === 1
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(1)}>
            <i class="uil uil-brackets-curly skills__icon"></i>
            <div>
              <h1 class="skills__title">Desarrollo Front-End</h1>
              <span class="skills__subtitle">Más de 6 meses</span>
            </div>
            <i class="uil uil-angle-down skills__arrow"></i>
          </div>

          {/* Desarrollo BackEnd */}
          <div className={toggleState === 2
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(2)}>
            <i class="uil uil-database-alt skills__icon"></i>
            <div>
              <h1 class="skills__title">Desarrollo Back-End</h1>
              <span class="skills__subtitle">Más de 2 años</span>
            </div>
            <i class="uil uil-angle-down skills__arrow"></i>
          </div>
        </div>

        {/* Seccion derecha */}
        <div className="skills__sections">

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
                  <div className="skills__name">JAVASCRIPT</div>
                  <div className="skills__level">40%</div>
                </div>
                <div className="skills__bar">
                  <div id="js-bar"></div>
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

              {/* MySQL Workbench */}
              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">MySQL Workbench</div>
                  <div className="skills__level">65%</div>
                </div>
                <div className="skills__bar">
                  <div id="mysql-bar"></div>
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