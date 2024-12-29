import React, { useState, useEffect } from "react";

const MusicPlayer = () => {
	const [playing, setPlaying] = useState(false); // Estado de reproducción
	const [scrolled, setScrolled] = useState(false); // Estado del scroll inicial

	useEffect(() => {
		const handleScroll = () => {
			if (!scrolled) {
				setScrolled(true);
				setPlaying(true); // Activar reproducción en el primer scroll
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [scrolled]);

	const togglePlay = () => {
		const audio = document.getElementById("background-music");
		if (playing) {
			audio.pause();
		} else {
			audio.play();
		}
		setPlaying(!playing);
	};

	return (
		<>
			<audio id="background-music" loop>
				<source src="/music/para-siempre.mp3" type="audio/mp3" />
				Tu navegador no soporta el elemento de audio.
			</audio>
			<div
				style={{
					position: "fixed",
					bottom: "2rem",
					right: "5rem",
					zIndex: 1000,
					display: "flex",
					alignItems: "center",
					cursor: "pointer",
				}}
				onClick={togglePlay}>
				{playing ? (
					<img
						src="/images/svg/pause-icon.svg" // Reemplaza con tu SVG de pausa
						alt="Pause"
						style={{ width: "2rem", height: "2rem" }}
					/>
				) : (
					<img
						src="/images/svg/play-icon.svg" // Reemplaza con tu SVG de play
						alt="Play"
						style={{ width: "2rem", height: "2rem" }}
					/>
				)}
			</div>
		</>
	);
};

export default MusicPlayer;
