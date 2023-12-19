import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">GAMM</h1>

				<ul className="footer__list">
					<li>
						<a href="#sobre-mi" className="footer__link">Sobre mí</a>
					</li>

					<li>
						<a href="#proyectos" className="footer__link">Proyectos</a>
					</li>
				</ul>

				<div className="footer__social" 
				data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="1000">
					<a href="https://www.instagram.com/jhonatanmm1995/" className="footer__social-icon" target="_blank" rel="noopener noreferrer"><i className="uil uil-instagram"></i></a>
					<a href="https://www.linkedin.com/in/jhonatan-mantilla-jmm190395/" className="footer__social-icon" target="_blank" rel="noopener noreferrer"><i className="uil uil-linkedin-alt"></i></a>
					<a href="https://github.com/GAMM95" className="footer__social-icon" target="_blank" rel="noopener noreferrer"><i className="uil uil-github-alt"></i></a>
				</div>

				<span className='footer__copy' 
				data-aos="fade-up"
					data-aos-anchor-placement="center-bottom"
					data-aos-duration="2000"
					>&#169; Hecho por <strong>Jhonatan Mantilla</strong></span>
			</div>
		</footer>
	)
}

export default Footer