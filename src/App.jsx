import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
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
	const location = useLocation();
	const [guestData, setGuestData] = useState(null);

	useEffect(() => {
		const route = location.pathname.slice(1); // Obtiene la ruta sin "/"
		fetch(`https://invitation-landing.onrender.com/${route}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Invitado no encontrado");
				}
				return response.json();
			})
			.then((data) => setGuestData(data))
			.catch((error) => {
				console.error(error);
				setGuestData(null);
			});
	}, [location.pathname]);

	if (!guestData) {
		return <p>Cargando...</p>;
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
			<App />
		</Router>
	);
}
