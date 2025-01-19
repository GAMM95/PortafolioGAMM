import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<section className="qualification section" id='formacion'>
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
						{/* Ingenieria de sistemas */}
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Ingeniería de Sistemas</h3>
								<span className="qualification__subtitle">Ingeniero de sistemas</span>
								<span className="qualification__subtitle_2">Universidad César Vallejo</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Set 2021 - Jul 2024
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						{/* Cursos de programación */}
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Cursos de programación</h3>
								<span className="qualification__subtitle">Programacion backend</span>
								<span className="qualification__subtitle_2">ONE - Oracle Next Education</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Abr 2023 - Dic 2023
								</div>
							</div>
						</div>

						{/* Ingeniería de minas */}
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Ingeniería de Minas</h3>
								<span className="qualification__subtitle">Bachiller en ingeniería de minas</span>
								<span className="qualification__subtitle_2">Universidad Nacional de Trujillo</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Abr 2014 - Dic 2018
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
						{/* Programador de rentas */}
						<div className="qualification__data">
							<div className="justify-end">
								<h3 className="qualification__title">Programador de sistemas informaticos</h3>
								<span className="qualification__subtitle">Subgerencia de Informática y Sistemas</span>
								<span className="qualification__subtitle_2"> Municipalidad Distrital de La Esperanza</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Oct 2024 - Actualidad
								</div>
							</div>

							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						{/* Locador de soporte técnico */}
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Locador de soporte técnico</h3>
								<span className="qualification__subtitle">Subgerencia de Informática y Sistemas</span>
								<span className="qualification__subtitle_2"> Municipalidad Distrital de La Esperanza</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Feb 2024 - Set 2024
								</div>
							</div>

						</div>

						{/* Practicante de sistemas */}
						<div className="qualification__data">
							<div>
								<h3 className="qualification__title">Practicante</h3>
								<span className="qualification__subtitle">Subgerencia de Informática y Sistemas</span>
								<span className="qualification__subtitle_2"> Municipalidad Distrital de La Esperanza</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Feb 2023 - Dic 2023
								</div>
							</div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
						</div>

						{/* Supervisor de operaciones */}
						<div className="qualification__data">
							<div></div>
							<div>
								<span className="qualification__rounder"></span>
								<span className="qualification__line"></span>
							</div>
							<div>
								<h3 className="qualification__title">Supervisor de operaciones</h3>
								<span className="qualification__subtitle">Corporación e Inversiones Piscis S.A.C.</span>
								<span className="qualification__subtitle_2">Cía. Minera SummaGold S.A.C.</span>
								<div className="qualification__calender">
									<i className="uil uil-calendar-alt"></i> Ene 2021 - Dic 2021
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

		</section>
	)
}

export default Qualification