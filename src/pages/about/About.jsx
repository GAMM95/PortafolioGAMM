import React from 'react';
import './about.css';
import AboutImg from "../../assets/about-img.jpg";
import FileSVG from '../../assets/files.svg'
import CV from "../../assets/GAMM-CV.pdf"
//import Info from './Info';

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section__title">Sobre mí</h2>
			<span className="section__subtitle">Mi información</span>

			<div className="about__container container grid">

				<img src={AboutImg} alt="" className="about__img"
					data-aos="fade-down"
					data-aos-duration="1000" />

				<div className="about__data">
					{/*<Info />*/}

					<p className="about__description" data-aos="fade-up">
						Como estudiante de ingeniería de sistemas, me he sentido atraído por la programación, empezando mis primeras líneas de código con el lenguaje Java y practicando a través de proyectos universitarios y personales. <br /><br />
						Soy una persona de rápido aprendizaje, autodidacta y considero cada proyecto un nuevo reto para aprender y crecer profesionalmente.<br /><br />
						Vivo en Trujillo, Perú. mi banda favorita es Soda Stereo y soy fanático del rock de por vida.
					</p>

					<button download="" href={CV} className="button button--flex" id='about__download'
						data-aos="fade-up"
						data-aos-anchor-placement="center-bottom"
						data-aos-duration="1000">
						Descargar CV
						<img src={FileSVG} className='button__icon' alt='files' />
					</button>
				</div>
			</div>
		</section>
	)
}

export default About