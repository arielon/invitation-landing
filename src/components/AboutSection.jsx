import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeIn, fadeInFromLeft, fadeInFromRight } from "../animations/animations";

const AboutUsSection = () => (
	<section id="about-us" className="about-us-section">
		<div className="about-us-title">
			<img className="about-us-left-svg" src="/images/svg/us-left-svg.svg" />
			<h2>Nosotros</h2>
			<img className="about-us-right-svg" src="/images/svg/us-right-svg.svg" />
		</div>
		<div className="about-us-images">
			<AnimatedComponent animation={fadeInFromLeft}>
				<div className="about-us-image-container">
					<img src="/images/bride.png" alt="Bride" className="about-us-image" />
					<h3>Fátima</h3>
				</div>
			</AnimatedComponent>
			<div className="about-us-ampersand">&</div>
			<AnimatedComponent animation={fadeInFromLeft}>
				<div className="about-us-image-container">
					<img src="/images/groom.png" alt="Groom" className="about-us-image" />
					<h3>Carlo</h3>
				</div>
			</AnimatedComponent>
		</div>
		<AnimatedComponent animation={fadeIn}>
			<div className="about-us-story">
				<p>
					Nuestro amor no es de esos a primera vista, nos conocimos hace 13 años y como muchos ya lo saben ni nos
					hablábamos, si en ese momento nos hubiesen dicho que nos casaremos definitivamente nos reiríamos y no lo
					creríamos pero el universo ya había conspirado a nuestro favor y volvió a cruzar nuestros caminos. Y si, ahí
					se convirtió en amor a ultima y a todas las vistas; encontramos nuestro lugar seguro y mágico, ese donde
					sabes que, aunque estés callado no necesitas más para ser inmensamente feliz. Quienes están destinados a ser
					siempre acaban siendo.
				</p>
			</div>
		</AnimatedComponent>
	</section>
);

export default AboutUsSection;
