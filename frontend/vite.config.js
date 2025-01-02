import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		port: process.env.PORT || 3000, // Usar el puerto asignado o 3000 por defecto
		host: true, // Permite la exposición de la aplicación
	},
	preview: {
		port: process.env.PORT || 3000, // Usar el puerto asignado o 3000 por defecto
		host: true, // Permite la exposición de la aplicación
	},
	base: process.env.NODE_ENV === "production" ? "/" : "/", // Ajusta la base para producción si es necesario
});
