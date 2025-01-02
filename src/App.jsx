import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
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

function MainApp({ guestData }) {
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

function App() {
	const location = useLocation();
	const [guestData, setGuestData] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const route = location.pathname.slice(1); // Obtiene la ruta sin "/"
		if (route) {
			fetch(`https://invitation-landing.onrender.com/${route}`)
				.then((response) => {
					if (!response.ok) {
						throw new Error("Invitado no encontrado");
					}
					return response.json();
				})
				.then((data) => {
					setGuestData(data);
					setError(false);
				})
				.catch(() => {
					setGuestData(null);
					setError(true);
				});
		}
	}, [location.pathname]);

	if (error) {
		return <p>Invitado no encontrado. Verifica tu URL personalizada.</p>;
	}

	if (!guestData) {
		return <p>Cargando...</p>;
	}

	return <MainApp guestData={guestData} />;
}

export default function AppWrapper() {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<App />} />
			</Routes>
		</Router>
	);
}
