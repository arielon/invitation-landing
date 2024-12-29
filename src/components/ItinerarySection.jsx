import React from "react";

const ItinerarySection = () => (
	<section id="itinerary" className="itinerary-section">
		<div className="itinerary-gap">
			<img src="src/assets/itinerary-deco.svg" alt="Itinerary Decoration" className="itinerary-svg" />
			<div className="itinerary-container">
				<h2>Itinerario</h2>
				<div className="itinerary-schedule">
					<div className="itinerary-item">
						<h3>Misa (o ceremonia)</h3>
						<p>La ceremonia religiosa tendrá lugar en la iglesia principal.</p>
						<span>12:00 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>Recepción/Cóctel de Bienvenida</h3>
						<p>¡Te esperamos con deliciosos aperitivos y música en vivo!</p>
						<span>1:30 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>Banquete</h3>
						<p>Disfrutemos juntos de un exquisito menú preparado para esta ocasión especial.</p>
						<span>3:00 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>Brindis</h3>
						<p>Levantemos nuestras copas para celebrar el amor de los novios.</p>
						<span>4:30 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>¡Todo mundo a bailar!</h3>
						<p>La pista está abierta para todos, ¡no te quedes sentado!</p>
						<span>5:00 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>Tornafiesta</h3>
						<p>Confirmar horario con el lugar del evento.</p>
						<span>7:00 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>Fin del evento</h3>
						<p>Gracias por acompañarnos en este día tan especial.</p>
						<span>11:00 PM</span>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default ItinerarySection;
