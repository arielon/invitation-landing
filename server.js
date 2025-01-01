import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

// Endpoint para manejar las solicitudes de confirmación
app.post("/send", (req, res) => {
	const { name, email, phone, attendance } = req.body;

	const mailOptions = {
		from: email,
		to: process.env.RECIPIENT_EMAIL,
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

// Sirve los archivos estáticos del frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Inicia el servidor
app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
