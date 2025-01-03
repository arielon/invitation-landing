import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeIn, fadeInFromLeft, fadeInFromRight } from "../animations/animations";

const ParentsSection = () => (
	<section id="parents" className="parents-section">
		<div className="parents-title">
			<h2>Nuestros Padres</h2>
			<p className="parent-intro">
				El amor trasciende distancias. Aunque algunos caminos hoy estén lejos o nos acompañen desde el cielo, sentimos
				su amor y su bendición en cada paso. Esta celebración es un homenaje a quienes nos han guiado con su ejemplo y
				cariño, recordándonos que el amor siempre nos une.
			</p>
		</div>
		<div className="parents-content">
			<AnimatedComponent animation={fadeInFromLeft} delay={0.2}>
				<div className="parent-card">
					<div className="parent-in">
						<img src="/images/parent1.png" alt="Parent 1" className="parent-image" />
						<h3>Guadalupe Rosano</h3>
						<p className="parent-text">Madre de la novia.</p>
					</div>
					<img src="/images/svg/parent-deco1.svg" alt="Decoration" className="parent-deco" />
				</div>
			</AnimatedComponent>
			<AnimatedComponent animation={fadeInFromRight} delay={0.2}>
				<div className="parent-card">
					<img src="/images/svg/parent-deco1.svg" alt="Decoration" className="parent-deco-top hide-mobile" />
					<div className="parent-in">
						<img src="/images/parent2.jpg" alt="Parent 2" className="parent-image" />
						<h3>Carlos Ávila</h3>
						<p className="parent-text">Padre de la novia.</p>
					</div>
				</div>
			</AnimatedComponent>
			<AnimatedComponent animation={fadeInFromLeft} delay={0.2}>
				<div className="parent-card">
					<div className="parent-in">
						<img src="/images/parent3.jpg" alt="Parent 3" className="parent-image" />
						<h3>Silvia Laura González</h3>
						<p className="parent-text">Madre del novio.</p>
					</div>
					<img src="/images/svg/parent-deco2.svg" alt="Decoration" className="parent-deco" />
				</div>
			</AnimatedComponent>
			<AnimatedComponent animation={fadeInFromRight} delay={0.2}>
				<div className="parent-card">
					<img src="/images/svg/parent-deco2.svg" alt="Decoration" className="parent-deco-top hide-mobile" />
					<div className="parent-in">
						<img src="/images/parent4.png" alt="Parent 4" className="parent-image" />
						<h3>Alberto Barajas</h3>
						<p className="parent-text">Padre del novio.</p>
					</div>
				</div>
			</AnimatedComponent>
		</div>
	</section>
);

export default ParentsSection;
