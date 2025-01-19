import React, { useState } from 'react';
import { TbDeviceDesktopCode } from "react-icons/tb";
import { VscServerProcess } from "react-icons/vsc";
import { PiDatabaseLight } from "react-icons/pi";

// Iconos de lenguajes
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoFlutter } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import { DiMsqlServer } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiSqllite } from "react-icons/di";
import { RiFirebaseFill } from "react-icons/ri";


import './skills.css';

const Skills = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="skills section" id="habilidades">
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
            <TbDeviceDesktopCode className="skills__icon" />
            <div>
              <h1 className="skills__title">Desarrollo Frontend</h1>
              <span className="skills__subtitle">Más de 6 meses</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          {/* Desarrollo BackEnd */}
          <div className={toggleState === 2
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(2)}>
            <VscServerProcess className="skills__icon" />
            <div>
              <h1 className="skills__title">Desarrollo Backend</h1>
              <span className="skills__subtitle">Más de 2 años</span>
            </div>
            <i className="uil uil-angle-down skills__arrow"></i>
          </div>

          {/* Desarrollo  Bases de Datos */}
          <div className={toggleState === 3
            ? "skills__button skills__active button--flex"
            : "skills__button button--flex"
          } onClick={() => toggleTab(3)}>
            <PiDatabaseLight className="skills__icon" />
            <div>
              <h1 className="skills__title">Base de datos</h1>
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

              {/* HTML */}
              <div className="skills__data">
                <div className="skills__icon">
                  <FaHtml5 className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">HTML 5</div>
                    <div className="skills__level">70%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="html-bar"></div>
                  </div>
                </div>
              </div>

              {/* CSS */}
              <div className="skills__data">
                <div className="skills__icon">
                  <FaCss3Alt className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">CSS 3</div>
                    <div className="skills__level">60%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="css-bar"></div>
                  </div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="skills__data">
                <div className="skills__icon">
                  <IoLogoJavascript className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">JavaScript</div>
                    <div className="skills__level">40%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="js-bar"></div>
                  </div>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="skills__data">
                <div className="skills__icon">
                  <RiTailwindCssFill className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">Tailwind CSS</div>
                    <div className="skills__level">50%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="tailwind-bar"></div>
                  </div>
                </div>
              </div>

              {/* Flutter */}
              <div className="skills__data">
                <div className="skills__icon">
                  <BiLogoFlutter className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">Flutter</div>
                    <div className="skills__level">40%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="flutter-bar"></div>
                  </div>
                </div>
              </div>

              {/* REACT */}
              <div className="skills__data">
                <div className="skills__icon">
                  <FaReact className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">REACT</div>
                    <div className="skills__level">30%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="react-bar"></div>
                  </div>
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
                <div className="skills__icon">
                  <FaJava className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">Java</div>
                    <div className="skills__level">70%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="java-bar"></div>
                  </div>
                </div>
              </div>

              {/* Spring Boot */}
              <div className="skills__data">
                <div className="skills__icon">
                  <SiSpring className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">Spring Boot</div>
                    <div className="skills__level">30%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="springboot-bar"></div>
                  </div>
                </div>
              </div>

              {/* PHP */}
              <div className="skills__data">
                <div className="skills__icon">
                  <FaPhp className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">PHP</div>
                    <div className="skills__level">60%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="php-bar"></div>
                  </div>
                </div>
              </div>

              {/* Python */}
              <div className="skills__data">
                <div className="skills__icon">
                  <FaPython className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">Python</div>
                    <div className="skills__level">30%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="python-bar"></div>
                  </div>
                </div>
              </div>

              {/* Node.js */}
              <div className="skills__data">
                <div className="skills__icon">
                  <FaNodeJs className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
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

          {/* Tecnologias de Bases de Datos */}
          <div className={toggleState === 3
            ? "skills__content skills__content-active"
            : "skills__content"} >
            <div className="skills__list grid">

              {/* SQL Server */}
              <div className="skills__data">
                <div className="skills__icon">
                  <DiMsqlServer className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">SQL Server</div>
                    <div className="skills__level">70%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="sql-bar"></div>
                  </div>
                </div>
              </div>

              {/* MySQL */}
              <div className="skills__data">
                <div className="skills__icon">
                  <DiMysql className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">MySQL</div>
                    <div className="skills__level">60%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="mysql-bar"></div>
                  </div>
                </div>
              </div>

              {/* SQLite */}
              <div className="skills__data">
                <div className="skills__icon">
                  <DiSqllite className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">SQLite</div>
                    <div className="skills__level">10%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="sqlite-bar"></div>
                  </div>
                </div>
              </div>

              {/* Firebase */}
              <div className="skills__data">
                <div className="skills__icon">
                  <RiFirebaseFill className='icon__languajes' />
                </div>
                <div className="skills__info">
                  <div className="skills__name-level">
                    <div className="skills__name">Firebase</div>
                    <div className="skills__level">40%</div>
                  </div>
                  <div className="skills__bar">
                    <div id="firebase-bar"></div>
                  </div>
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