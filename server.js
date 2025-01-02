import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sendgrid from "@sendgrid/mail";
import { readFileSync } from "fs";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const port = process.env.PORT || 5000;

// Leer JSON manualmente usando fs
const guests = JSON.parse(readFileSync("./data/guests.json", "utf-8"));

app.use(cors());
app.use(bodyParser.json());

// Ruta para obtener datos de invitados
app.get("/guest/:name", (req, res) => {
	const { name } = req.params;
	const guest = guests.find((g) => g.name.toLowerCase() === name.toLowerCase());
	if (guest) {
		res.json(guest);
	} else {
		res.status(404).send("Invitado no encontrado");
	}
});

// Ruta para manejar datos del formulario y enviar correos
app.post("/send", async (req, res) => {
	const { name, email, phone, attendance } = req.body;

	const organizerEmail = {
		from: process.env.FROM_EMAIL,
		to: process.env.RECIPIENT_EMAIL,
		subject: "Nueva Confirmación de Asistencia",
		text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nAsistirá: ${attendance ? "Sí" : "No"}`,
	};

	const guestEmail = {
		from: process.env.FROM_EMAIL,
		to: email,
		subject: "Confirmación de tu Asistencia",
		text: `¡Hola ${name}!\n\nGracias por confirmar tu asistencia a nuestra boda. Estamos emocionados de compartir este día especial contigo.\n\nDetalles proporcionados:\n- Teléfono: ${phone}\n- Asistirá: ${
			attendance ? "Sí" : "No"
		}\n\nSi tienes preguntas, no dudes en contactarnos.\n\n¡Nos vemos pronto!\n\nFátima y Carlo`,
	};

	try {
		await sendgrid.send(organizerEmail);
		await sendgrid.send(guestEmail);
		res.status(200).send("Correos enviados correctamente.");
	} catch (error) {
		console.error("Error al enviar correos:", error);
		res.status(500).send("Error al enviar correos.");
	}
});

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
