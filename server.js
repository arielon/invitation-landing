import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sendgrid from "@sendgrid/mail";
const guests = require("./data/guests.json");

// Inicializar Express
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurar SendGrid API Key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// Ruta para obtener datos de un invitado
app.get("/guest/:route", (req, res) => {
	const { route } = req.params;
	const guest = guests.find((g) => g.route.toLowerCase() === route.toLowerCase());

	if (guest) {
		res.json(guest);
	} else {
		res.status(404).send("Invitado no encontrado");
	}
});

// Ruta para manejar los datos del formulario
app.post("/send", async (req, res) => {
	const { name, email, phone, attendance } = req.body;

	// Correo de confirmación al organizador
	const organizerEmail = {
		from: process.env.FROM_EMAIL, // Autenticado en SendGrid
		to: process.env.RECIPIENT_EMAIL, // Correo del organizador
		subject: "Nueva Confirmación de Asistencia",
		text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nAsistirá: ${attendance === "yes" ? "Sí" : "No"}`,
	};

	// Correo de confirmación al invitado
	const guestEmail = {
		from: process.env.FROM_EMAIL, // Autenticado en SendGrid
		to: email, // Correo del invitado
		subject: "Confirmación de tu Asistencia",
		text: `¡Hola ${name}!\n\nGracias por confirmar tu asistencia a nuestra boda. Estamos emocionados de compartir este día especial contigo.\n\nDetalles proporcionados:\n- Teléfono: ${phone}\n- Asistirá: ${
			attendance === "yes" ? "Sí" : "No"
		}\n\nSi tienes preguntas, no dudes en contactarnos.\n\n¡Nos vemos pronto!\n\nFátima y Carlo`,
	};

	try {
		// Enviar correos
		await sendgrid.send(organizerEmail);
		await sendgrid.send(guestEmail);
		res.status(200).send("Correos enviados correctamente.");
	} catch (error) {
		console.error("Error al enviar correos:", error);
		res.status(500).send("Error al enviar correos.");
	}
});

// Iniciar el servidor
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
