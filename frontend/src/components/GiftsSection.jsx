import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeIn, fadeInFromLeft, fadeInFromRight } from "../animations/animations";

const GiftSection = () => (
	<section id="gifts" className="gift-section">
		<AnimatedComponent animation={fadeIn} delay={0.2}>
			<div className="gift-svg-top">
				<img src="/images/svg/gift-icon.svg" alt="Gift Icon" />
			</div>
			<div className="gift-title">
				<img className="gift-left-svg" src="/images/svg/left-decor.svg" alt="Left Decor" />
				<h2>Mesa de Regalos</h2>
				<img className="gift-right-svg" src="/images/svg/right-decor.svg" alt="Right Decor" />
			</div>
		</AnimatedComponent>
		<AnimatedComponent animation={fadeIn} delay={0.2}>
			<p className="gift-description">
				Lo más importante es tu presencia, pero si deseas hacernos un presente, te dejamos algunas sugerencias de
				regalos.
			</p>
		</AnimatedComponent>
		<div className="gift-button">
			<AnimatedComponent animation={fadeInFromRight} delay={0.2}>
				<button>
					<a
						href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51389282"
						target="_blank"
						rel="noopener noreferrer">
						Ir a la Mesa de Regalos
					</a>
				</button>
			</AnimatedComponent>
		</div>
	</section>
);

export default GiftSection;
