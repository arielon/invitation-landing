const HeroSection = () => (
	<header className="hero-section">
		<div className="hero-overlay"></div>
		<img src="src/assets/hero-leaf.svg" alt="Hero Leaf" className="hero-top-svg" />
		<div className="hero-content">
			<nav className="hero-navigation">
				<ul className="hero-left-nav">
					<li>
						<a href="#about-us">Nosotros</a>
					</li>
					<li>
						<a href="#parents">Nuestros Padres</a>
					</li>
					<li>
						<a href="#sponsors">Padrinos</a>
					</li>
					<li>
						<a href="#gallery">Galería</a>
					</li>
				</ul>
				<img src="src/assets/logo.png" alt="Logo" className="hero-logo" />
				<ul className="hero-right-nav">
					<li>
						<a href="#countdown">Cuenta Regresiva</a>
					</li>
					<li>
						<a href="#itinerary">Itinerario</a>
					</li>
					<li>
						<a href="#gifts">Mesa de Regalos</a>
					</li>
					<li>
						<a href="#locations">Ubicaciones</a>
					</li>
				</ul>
			</nav>
			<a className="hero-bottom-right" href="#invitation">
				<img src="src/assets/arrow.svg" alt="Arrow" className="hero-arrow" />
				<p className="hero-celebrate-text">Festeja con nosotros</p>
			</a>
		</div>
	</header>
);

export default HeroSection;
