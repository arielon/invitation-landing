import React from "react";

const InvitationSection = ({ guestData }) => (
	<section id="invitation" className="invitation-section">
		<div className="head-invitation">
			<img className="invitation-top-left-svg" width="7rem" src="/images/svg/invitado-left.svg" />
			<img className="invitation-top-right-svg" width="7rem" src="/images/svg/invitado-right.svg" />
		</div>
		<div className="invitation-content">
			<img className="invitation-top-leaf" height="1.5rem" src="/images/svg/hoja1.svg" />
			<span className="subtitle">¡{guestData.name}, te invitamos a nuestra boda!</span>
			<p className="special-text">
				Nos emociona compartir contigo este día tan especial. Te invitamos a acompañarnos en nuestra boda el 5 de Abril
				del 2025.
			</p>
			<div className="invitation-details">
				<span className="subtitle2">
					Pases: <p>{guestData.passes}</p>
				</span>
				<span className="subtitle2">
					Mesa: <p>{guestData.table}</p>
				</span>
			</div>
			<div className="invitation-buttons">
				{/* <button onClick={() => downloadQR(guestData)}>Descargar boleto</button> */}
				<button>
					<a href="#rsvp">Confirmar asistencia</a>
				</button>
			</div>
			<img className="invitation-bottom-leaf" height="1.5rem" src="/images/svg/hoja2.svg" />
		</div>
	</section>
);

function downloadQR(guestData) {
	// Mock download function for QR
	console.log(`Downloading QR for ${guestData.name}`);
}

export default InvitationSection;
