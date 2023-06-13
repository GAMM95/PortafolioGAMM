import React, { useState } from 'react';
import './skills.css';

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Habilidades</h2>
      <span className="section__subtitle">Tecnologías que manejo</span>

      <div className="skills__container container grid">
        <div className="skills__tabs">
          <div className={toggleState === 1
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(1)}>
            <i class="uil uil-brackets-curly skills__icon"></i>
            <div>
              <h1 class="skills__title">Desarrollo Frontend</h1>
              <span class="skills__subtitle">More than 4 years</span>
            </div>
            <i class="uil uil-angle-down skills__arrow"></i>
          </div>

          <div className={toggleState === 2
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(2)}>
            <i class="uil uil-database-alt skills__icon"></i>
            <div>
              <h1 class="skills__title">Desarrollo Backend</h1>
              <span class="skills__subtitle">More than 2 years</span>
            </div>
            <i class="uil uil-angle-down skills__arrow"></i>
          </div>
        </div>


        <div className="skills__sections">
          <div className={toggleState === 1
            ? "skills__content skills__content-active"
            : "skills__content"} >
            <div className="skills__list grid">

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">HTML 5</div>
                  <div className="skills__level">75%</div>
                </div>
                <div className="skills__bar">
                  <div id="html-bar"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">CSS 3</div>
                  <div className="skills__level">60%</div>
                </div>
                <div className="skills__bar">
                  <div id="css-bar"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">JAVASCRIPT</div>
                  <div className="skills__level">50%</div>
                </div>
                <div className="skills__bar">
                  <div id="js-bar"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">REACT</div>
                  <div className="skills__level">20%</div>
                </div>
                <div className="skills__bar">
                  <div id="react-bar"></div>
                </div>
              </div>

            </div>
          </div>

          <div className={toggleState === 2
            ? "skills__content skills__content-active"
            : "skills__content"} >
            <div className="skills__list grid">

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">Java</div>
                  <div className="skills__level">70%</div>
                </div>
                <div className="skills__bar">
                  <div id="html-bar"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">SQL Server</div>
                  <div className="skills__level">60%</div>
                </div>
                <div className="skills__bar">
                  <div id="css-bar"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">JAVASCRIPT</div>
                  <div className="skills__level">50%</div>
                </div>
                <div className="skills__bar">
                  <div id="js-bar"></div>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__languajes">
                  <div className="skills__name">REACT</div>
                  <div className="skills__level">20%</div>
                </div>
                <div className="skills__bar">
                  <div id="react-bar"></div>
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