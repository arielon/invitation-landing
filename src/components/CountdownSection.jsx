import React, { useEffect, useState } from "react";

const CountdownSection = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const targetDate = new Date("2025-04-05T00:00:00");
		const timer = setInterval(() => {
			const now = new Date();
			const difference = targetDate - now;

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((difference / 1000 / 60) % 60);
			const seconds = Math.floor((difference / 1000) % 60);

			setTimeLeft({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section id="countdown" className="countdown-section">
			<div className="countdown-content">
				<img src="/images/svg/countdown-deco1.svg" alt="Countdown Decoration" className="countdown-svg" />
				<p className="countdown-title">¡La cuenta regresiva ha comenzado!</p>
				<h3>5 de Abril del 2025</h3>
				<div className="countdown-timer">
					<div className="countdown-item">
						<span className="countdown-number">{timeLeft.days}</span>
						<p className="countdown-label">Días</p>
					</div>
					<div className="countdown-item">
						<span className="countdown-number">{timeLeft.hours}</span>
						<p className="countdown-label">Horas</p>
					</div>
					<div className="countdown-item">
						<span className="countdown-number">{timeLeft.minutes}</span>
						<p className="countdown-label">Minutos</p>
					</div>
					<div className="countdown-item">
						<span className="countdown-number">{timeLeft.seconds}</span>
						<p className="countdown-label">Segundos</p>
					</div>
				</div>
				<div className="countdown-buttons">
					<button>
						<a href="#rsvp">Confirmar Asistencia</a>
					</button>
					<button>
						<a href="#calendar">Añadir a Calendario</a>
					</button>
				</div>
				<img src="/images/svg/countdown-deco2.svg" alt="Countdown Decoration" className="countdown-svg" />
			</div>
		</section>
	);
};

export default CountdownSection;
