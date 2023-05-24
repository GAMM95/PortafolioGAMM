import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section">
			<h2 className='section__title'>Formación</h2>
			<span className='section__subtitle'>Mi trayectoria personal</span>

			<div className="qualification__container container">
				<div className="qualification__tabs">
					<div className={toggleState === 1
						? "qualification__button qualification__active button--flex"
						: "qualification__button button--flex"
					} onClick={() => toggleTab(1)}>
						<i className="uil uil-graduation-cap qualification__icon"></i>
						Educación
					</div>

					<div className={toggleState === 2
						? "qualification__button qualification__active button--flex"
						: "qualification__button button--flex"
					} onClick={() => toggleTab(2)}>
						<i className="uil uil-briefcase-alt qualification__icon"></i>
						Experiencia
					</div>
				</div>

				<div className="qualification__sections">
					<div className={toggleState === 1
						? "qualification__content qualification__content-active"
						: "qualification__content"} >
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Ingeniería de Sistemas</h3>
								<span className="qualification__subtitle">Universidad César Vallejo</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Set 2021 - Actualidad
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Ingeniería de Minas</h3>
								<span className="qualification__subtitle">Universidad Nacional de Trujillo</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Abr 2014 - Dic 2018
								</div>
							</div>


						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Inglés Americano</h3>
								<span className="qualification__subtitle">Centro Peruano Norteamericano "El Cultural"</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Ene 2007 - Nov 2011
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>
					</div>

					<div className={toggleState === 2
						? "qualification__content qualification__content-active"
						: "qualification__content"} >
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Practicante <br />Ingeniería de Sistemas</h3>
								<span className="qualification__subtitle">Municipalidad Distrital de La Esperanza</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Feb 2023 - Actualidad
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Supervisor de operaciones</h3>
								<span className="qualification__subtitle">Corporación e Inversiones Piscis S.A.C. <br />
									Cía. Minera SummaGold S.A.C.</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Ene 2021 - Mar 2021
								</div>
							</div>


						</div>

						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Practicante <br />Ingeniería de Minas</h3>
								<span className="qualification__subtitle">CIEMAM S.A.C. <br />
									Ex Unidad Minera Colquirrumi</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> 2019
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

					</div>
				</div>
			</div>

		</section>
	)
}

export default Qualification