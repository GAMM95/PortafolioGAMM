import React from 'react';
import './about.css';
import AboutImg from "../../assets/about-img.jpg";
import FileSVG from '../../assets/files.svg'
import CV from "../../assets/GAMM-CV.pdf"
import Info from './Info';

const About = () => {
	return (
		<section className="about section" id="about">
			<h2 className="section__title">Sobre mí</h2>
			<span className="section__subtitle">Mi información</span>

			<div className="about__container container grid">
				<img src={AboutImg} alt="" className="about__img" />

				<div className="about__data">
					<Info />

					<p className="about__description">Lorem ipsum dolor sit amet.</p>

					<a download="" href={CV} className="button button--flex" id='about__download'>
						Descargar CV
						<img src={FileSVG} className='button__icon' alt='files' />
					</a>
				</div>
			</div>
		</section>
	)
}

export default About