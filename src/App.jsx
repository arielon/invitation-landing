import React from "react";
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
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";

function App() {
	// Temporary hardcoded data for development
	const guestData = {
		name: "Juan Pérez",
		passes: 4,
		table: 4,
	};

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

export default App;
