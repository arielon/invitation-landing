import React from "react";

const LocationsSection = () => (
	<section id="locations" className="locations-section">
		<h2>Ubicaciones</h2>
		<div className="location-body">
			<div className="location-card">
				<div className="location-image">
					<img src="/images/church.jpg" alt="Iglesia" className="church-img" />
					<div className="location-overlay">
						<div className="location-content-box">
							<img src="/images/svg/church-icon.svg" alt="Church Icon" className="location-svg" />
							<h3>Parroquia de San Pedro Apóstol de Atocpan</h3>
							<span className="location-time">Dirección:</span>
							<p>Francisco I Madero, San Pedro Atocpan, Panchimalco, Milpa Alta, 12200 Ciudad de México, CDMX</p>
							<span className="location-time">
								Hora:<br></br> 10:00 AM
							</span>
							<button>
								<a href="https://maps.app.goo.gl/imsbSa2oS7QXinwKA" target="_blank" rel="noopener noreferrer">
									Abrir en Maps
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="location-card">
				<div className="location-image">
					<img src="/images/venue.jpg" alt="Salón de Eventos" className="venue-img" />
					<div className="location-overlay">
						<div className="location-content-box">
							<img src="/images/svg/venue-icon.svg" alt="Venue Icon" className="location-svg" />
							<h3>Hacienda Carmen</h3>
							<span className="location-time">Dirección:</span>
							<p>
								Carretera Xochimilco - Oaxtepec KM 18.5, San Pedro Atocpan, Milpa Alta, 12200 Ciudad de México,
								CDMX
							</p>
							<span className="location-time">
								Hora:<br></br> 6:30 PM
							</span>
							<button>
								<a href="https://maps.app.goo.gl/X3GtHjtNWhRT3gAp6" target="_blank" rel="noopener noreferrer">
									Abrir en Maps
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default LocationsSection;
