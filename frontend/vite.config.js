import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: "/", // Asegúrate de que este sea el valor correcto para tu aplicación
	server: {
		port: 3000, // Cambia según sea necesario
	},
	build: {
		outDir: "dist", // Asegúrate de que Render pueda encontrar esta carpeta
	},
});
