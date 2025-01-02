import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
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

function GuestPage() {
	const { guestName } = useParams();
	const [guestData, setGuestData] = useState(null);

	useEffect(() => {
		const encodedName = encodeURIComponent(guestName);
		fetch(`https://invitation-landing.onrender.com/guest/${encodedName}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Invitado no encontrado");
				}
				return response.json();
			})
			.then((data) => setGuestData(data))
			.catch((error) => {
				console.error("Error al obtener datos del invitado:", error);
				setGuestData(null);
			});
	}, [guestName]);

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

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/guest/:guestName" element={<GuestPage />} />
				<Route path="/" element={<GuestPage />} />
			</Routes>
		</Router>
	);
}
