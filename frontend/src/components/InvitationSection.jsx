import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeIn, fadeInFromLeft, fadeInFromRight } from "../animations/animations";

const InvitationSection = ({ guestData }) => {
	// Determinar si el invitado es una familia o un individuo
	const isFamily = guestData.isFamily;

	// Textos dinámicos
	const invitationText = isFamily
		? `¡${guestData.name}, los invitamos a nuestra boda!`
		: `¡${guestData.name}, te invitamos a nuestra boda!`;
	const specialText = isFamily
		? "Nos emociona compartir este día tan especial con ustedes. La boda será el 5 de Abril del 2025."
		: "Nos emociona compartir este día tan especial contigo. La boda será el 5 de Abril del 2025.";

	return (
		<section id="invitation" className="invitation-section">
			<div className="head-invitation">
				<img className="invitation-top-left-svg" width="7rem" src="/images/svg/invitado-left.svg" />
				<img className="invitation-top-right-svg" width="7rem" src="/images/svg/invitado-right.svg" />
			</div>
			<div className="invitation-content">
				<AnimatedComponent animation={fadeIn} delay={0.2}>
					<img className="invitation-top-leaf" height="1.5rem" src="/images/svg/hoja1.svg" />
				</AnimatedComponent>
				<AnimatedComponent animation={fadeInFromLeft} delay={0.2}>
					<div className="invitation-name">
						<span className="subtitle">{invitationText}</span>
						<p className="special-text">{specialText}</p>
						<div className="invitation-details">
							<span className="subtitle2">
								Pases: <p>{guestData.passes}</p>
							</span>
						</div>
					</div>
				</AnimatedComponent>
				<AnimatedComponent animation={fadeInFromRight} delay={0.2}>
					<div className="dress-code">
						<h4>Código de vestimenta</h4>
						<div className="dress-content">
							<img src="/images/svg/women-dress.svg" className="dress" alt="" />
							<p>
								<b>Mujeres:</b> Formal, Vestido largo o 3/4
								<br />
								(evitar color blanco).
							</p>
						</div>
						<div className="dress-content">
							<img src="/images/svg/men-dress.svg" className="suit" alt="" />
							<p>
								<b>Hombres:</b> Traje.
								<br />
								Opción de zapatos o tenis.
							</p>
						</div>
					</div>
				</AnimatedComponent>
				<img className="invitation-bottom-leaf" height="1.5rem" src="/images/svg/hoja2.svg" />
			</div>
		</section>
	);
};

export default InvitationSection;
