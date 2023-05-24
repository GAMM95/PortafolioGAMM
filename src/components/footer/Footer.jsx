import React from 'react';
import './footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">GAMM</h1>

				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">Sobre mí</a>
					</li>

					<li>
						<a href="#portfolio" className="footer__link">Proyectos</a>
					</li>
				</ul>

				<div className="footer__social">
					<a href="https://www.instagram.com/jhonatanmm1995/" className="footer__social-icon" target="_blank" rel="noopener noreferrer"><i class="uil uil-instagram"></i></a>
					<a href="https://www.linkedin.com/in/jhonatan-mantilla-jmm190395/" className="footer__social-icon" target="_blank" rel="noopener noreferrer"><i class="uil uil-linkedin-alt"></i></a>
					<a href="https://github.com/GAMM95" className="footer__social-icon" target="_blank" rel="noopener noreferrer"><i class="uil uil-github-alt"></i></a>
				</div>

				<span className='footer__copy'>&#169; Hecho por GAMM95</span>
			</div>
		</footer>
	)
}

export default Footer