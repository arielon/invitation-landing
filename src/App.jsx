import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import InvitationSection from "./components/InvitationSection";
import AboutSection from "./components/AboutSection";
import ParentsSection from "./components/ParentsSection";
import SponsorsSection from "./components/SponsorsSection";
import CountdownSection from "./components/CountdownSection";
import ItinerarySection from "./components/ItinerarySection";
import GallerySection from "./components/GallerySection";
import GiftsSection from "./components/GiftsSection";
import LocationsSection from "./components/LocationsSection";
import RSVPSection from "./components/RSVPSection";
import BackToTop from "./components/BackToTop";
import MusicPlayer from "./components/MusicPlayer";
import "./App.css";

function App() {
	const { guestName } = useParams(); // Captura el nombre desde la URL
	const [guestData, setGuestData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (guestName) {
			// Codifica el nombre del invitado antes de enviarlo
			const encodedName = encodeURIComponent(guestName);

			fetch(`https://invitation-landing.onrender.com/guest/${encodedName}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Invitado no encontrado");
					}
					return response.json();
				})
				.then((data) => {
					setGuestData(data);
					setLoading(false);
				})
				.catch((error) => {
					console.error(error);
					setGuestData(null);
					setLoading(false);
				});
		}
	}, [guestName]);

	if (loading) {
		return <p>Cargando datos del invitado...</p>;
	}

	if (!guestData) {
		return <p>Invitado no encontrado. Verifica tu enlace.</p>;
	}

	return (
		<div className="app-container">
			<HeroSection />
			<InvitationSection guestData={guestData} />
			<AboutSection />
			<ParentsSection />
			<SponsorsSection />
			<CountdownSection />
			<ItinerarySection />
			<GallerySection />
			<GiftsSection />
			<LocationsSection />
			<RSVPSection />
			<BackToTop />
			<MusicPlayer />
		</div>
	);
}

export default function AppWrapper() {
	return (
		<Router>
			<Routes>
				<Route path="/invitado/:guestName" element={<App />} />
				<Route path="*" element={<p>Página no encontrada.</p>} />
			</Routes>
		</Router>
	);
}
