import React from "react";

const RSVPSection = () => (
	<section id="rsvp" className="rsvp-section">
		<div className="rsvp-header">
			<h2>Confirma tu asistencia</h2>
			<p>
				Queremos compartir este día tan especial contigo. Por favor, confirma tu asistencia utilizando nuestro
				formulario o contactándonos directamente.
			</p>
		</div>
		<div className="rsvp-body">
			<div className="rsvp-content">
				<div className="rsvp-left">
					<img src="src/assets/rsvp-image.jpg" alt="Imagen RSVP" className="rsvp-image" />
				</div>
				<div className="rsvp-right">
					<h3>Confirma aquí:</h3>
					<form className="rsvp-form">
						<div className="form-group">
							<label htmlFor="name">Nombre Completo:</label>
							<input type="text" id="name" name="name" placeholder="Escribe tu nombre" required />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input type="email" id="email" name="email" placeholder="Escribe tu correo" required />
						</div>
						<div className="form-group">
							<label htmlFor="phone">Teléfono:</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								placeholder="Escribe tu número para contactarte"
								required
							/>
						</div>
						<div className="form-group radios">
							<p>¿Asistirás?</p>
							<label>
								<input type="radio" name="attendance" value="yes" required /> Sí, asistiré
							</label>
							<label>
								<input type="radio" name="attendance" value="no" required /> No, lo siento
							</label>
						</div>
						<button type="submit">Confirmar</button>
					</form>
				</div>
			</div>
			<div className="rsvp-confirm-options">
				<h3>También puedes confirmar por:</h3>
				<div className="rsvp-contact-method">
					<div className="contact-icon whatsapp">
						<img src="src/assets/whatsapp-icon.svg" alt="Whatsapp" />
					</div>
					<div className="contact-buttons">
						Whatsapp
						<div className="buttons">
							<button>
								<a href="https://wa.me/5530799417" target="_blank" rel="noopener noreferrer">
									Novia
								</a>
							</button>
							<button>
								<a href="https://wa.me/5523265193" target="_blank" rel="noopener noreferrer">
									Novio
								</a>
							</button>
						</div>
					</div>
				</div>
				<div className="rsvp-contact-method">
					<div className="contact-icon phone">
						<img src="src/assets/phone-icon.svg" alt="Teléfono" />
					</div>
					<div className="contact-buttons">
						Llamada
						<div className="buttons">
							<button>
								<a href="tel:5530799417" target="_blank" rel="noopener noreferrer">
									Novia
								</a>
							</button>
							<button>
								<a href="tel:5523265193" target="_blank" rel="noopener noreferrer">
									Novio
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default RSVPSection;
