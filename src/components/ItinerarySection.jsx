import React from "react";

const ItinerarySection = () => (
	<section id="itinerary" className="itinerary-section">
		<div className="itinerary-gap">
			<img src="/images/svg/Itinerary-deco.svg" alt="Itinerary Decoration" className="itinerary-svg" />
			<div className="itinerary-container">
				<h2>Itinerario</h2>
				<div className="itinerary-schedule">
					<div className="itinerary-item">
						<h3>&#8226; Ceremonia Religiosa</h3>
						<span>15:45 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>&#8226; Cóctel de Bienvenida</h3>
						<span>17:00 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>&#8226; Banquete</h3>
						<span>19:00 PM</span>
					</div>
					<div className="itinerary-item">
						<h3>&#8226; Brindis</h3>
					</div>
					<div className="itinerary-item">
						<h3>&#8226; ¡Todo mundo a bailar!</h3>
					</div>
					<div className="itinerary-item">
						<h3>&#8226; Tornafiesta</h3>
					</div>
					<div className="itinerary-item">
						<h3>&#8226; Fin del evento</h3>
						<p>Gracias por acompañarnos en este día tan especial.</p>
						<span>01:00 AM</span>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default ItinerarySection;
