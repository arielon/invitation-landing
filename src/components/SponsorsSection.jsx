import React from "react";

const SponsorsSection = () => (
	<section id="sponsors" className="sponsors-section">
		<div className="sponsors-title">
			<h2>Nuestros Padrinos</h2>
		</div>
		<div className="sponsors-content">
			<div className="sponsor-card style-horizontal">
				<div className="sponsor-image" style={{ backgroundImage: "url('/images/sponsor4.png')" }}></div>
				<h3>Fernando y Aurora</h3>
				<p>Padrinos de Velación</p>
			</div>
			<div className="sponsor-card style-horizontal">
				<div className="sponsor-image" style={{ backgroundImage: "url('/images/sponsor2.png')" }}></div>
				<h3>Andy y Conrado</h3>
				<p>Padrinos de Lazo</p>
			</div>
			<div className="sponsor-card style-horizontal">
				<div className="sponsor-image" style={{ backgroundImage: "url('/images/sponsor6.png')" }}></div>
				<h3>Roger y Montse</h3>
				<p>Padrinos de Anillos</p>
			</div>
			<div className="sponsor-card style-vertical">
				<div className="sponsor-image" style={{ backgroundImage: "url('/images/sponsor3.png')" }}></div>
				<h3>Joaquin González</h3>
				<p>Padrino de Arras</p>
			</div>
			<div className="sponsor-card style-vertical">
				<div className="sponsor-image" style={{ backgroundImage: "url('/images/sponsor5.png')" }}></div>
				<h3>Brenda Hernández</h3>
				<p>Madrina de Arras</p>
			</div>
			<div className="sponsor-card style-vertical">
				<div className="sponsor-image" style={{ backgroundImage: "url('/images/sponsor1.png')" }}></div>
				<h3>Gabriela Tadeo</h3>
				<p>Madrina de Ramo</p>
			</div>
		</div>
	</section>
);

export default SponsorsSection;
