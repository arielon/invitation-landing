import React from "react";

const AboutUsSection = () => (
	<section id="about-us" className="about-us-section">
		<div className="about-us-title">
			<img className="about-us-left-svg" src="src/assets/us-left-svg.svg" />
			<h2>Nosotros</h2>
			<img className="about-us-right-svg" src="src/assets/us-right-svg.svg" />
		</div>
		<div className="about-us-images">
			<div className="about-us-image-container">
				<img src="src/assets/bride.png" alt="Bride" className="about-us-image" />
				<h3>Fátima</h3>
			</div>
			<div className="about-us-ampersand">&</div>
			<div className="about-us-image-container">
				<img src="src/assets/groom.png" alt="Groom" className="about-us-image" />
				<h3>Carlo</h3>
			</div>
		</div>
		<div className="about-us-story">
			<p>
				Nos conocimos hace años, y desde entonces hemos compartido una historia llena de momentos inolvidables. ¡Gracias
				por ser parte de este día tan especial!
			</p>
		</div>
		<div className="about-us-confirm-button">
			<button>
				<a href="#rsvp">Confirmar asistencia</a>
			</button>
		</div>
	</section>
);

export default AboutUsSection;
