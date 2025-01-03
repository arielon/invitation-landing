import React from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeIn, fadeInFromLeft, fadeInFromRight } from "../animations/animations";

const InvitationSection = ({ guestData }) => (
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
					<span className="subtitle">¡{guestData.name}, te invitamos a nuestra boda!</span>
					<p className="special-text">
						Nos emociona compartir contigo este día tan especial. Te invitamos a nuestra boda el 5 de Abril del
						2025.
					</p>
					<div className="invitation-details">
						<span className="subtitle2">
							Pases: <p>{guestData.passes}</p>
						</span>
						{/* <span className="subtitle2">
					Mesa: <p>{guestData.table}</p>
				</span> */}
					</div>
				</div>
			</AnimatedComponent>
			<AnimatedComponent animation={fadeInFromRight} delay={0.2}>
				<div className="dress-code">
					<h4>Código de vestimenta</h4>
					<div className="dress-content">
						<img src="/images/svg/women-dress.svg" className="dress" alt="" srcset="" />
						<p>
							<b>Mujeres:</b> Formal, Vestido largo o 3/4
							<br />
							(evitar color blanco).
						</p>
					</div>
					<div className="dress-content">
						<img src="/images/svg/men-dress.svg" className="suit" alt="" srcset="" />
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

function downloadQR(guestData) {
	// Mock download function for QR
	console.log(`Downloading QR for ${guestData.name}`);
}

export default InvitationSection;
