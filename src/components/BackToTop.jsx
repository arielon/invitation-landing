import React, { useState, useEffect } from "react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Mostrar/ocultar la flecha al hacer scroll
	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button className={`back-to-top ${isVisible ? "show" : ""}`} onClick={scrollToTop} aria-label="Volver al inicio">
			<img src="src/assets/up-arrow.svg" alt="Volver al inicio" />
		</button>
	);
};

export default BackToTop;
