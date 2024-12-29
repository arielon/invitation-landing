const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000; // Para el puerto dinámico en el servidor

app.use(cors());
app.use(bodyParser.json());

// Configura tu correo
const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.EMAIL_USER, // Usa variables de entorno
		pass: process.env.EMAIL_PASS,
	},
});

app.post("/send", (req, res) => {
	const { name, email, phone, attendance } = req.body;

	const mailOptions = {
		from: email,
		to: process.env.RECIPIENT_EMAIL, // Correo destinatario
		subject: "Confirmación de Asistencia",
		text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nAsistirá: ${attendance}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).send(error.toString());
		}
		res.status(200).send("Correo enviado correctamente.");
	});
});

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
