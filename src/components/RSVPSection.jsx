import React, { useState } from "react";

const RSVPSection = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		attendance: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/send`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				alert("¡Gracias por confirmar tu asistencia!");
				setFormData({
					name: "",
					email: "",
					phone: "",
					attendance: "",
				});
			} else {
				alert("Hubo un problema al enviar tu confirmación. Por favor, inténtalo de nuevo.");
			}
		} catch (error) {
			console.error("Error al enviar el formulario:", error);
			alert("Error al enviar el formulario. Por favor, inténtalo más tarde.");
		}
	};

	return (
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
						<form className="rsvp-form" onSubmit={handleSubmit}>
							<div className="form-group">
								<label htmlFor="name">Nombre Completo:</label>
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Escribe tu nombre"
									value={formData.name}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email:</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Escribe tu correo"
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="phone">Teléfono:</label>
								<input
									type="tel"
									id="phone"
									name="phone"
									placeholder="Escribe tu número para contactarte"
									value={formData.phone}
									onChange={handleChange}
									required
								/>
							</div>
							<div className="form-group radios">
								<p>¿Asistirás?</p>
								<label>
									<input
										type="radio"
										name="attendance"
										value="yes"
										checked={formData.attendance === "yes"}
										onChange={handleChange}
										required
									/>{" "}
									Sí, asistiré
								</label>
								<label>
									<input
										type="radio"
										name="attendance"
										value="no"
										checked={formData.attendance === "no"}
										onChange={handleChange}
										required
									/>{" "}
									No, lo siento
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
};

export default RSVPSection;
