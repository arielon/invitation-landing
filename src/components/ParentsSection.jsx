import React from "react";

const ParentsSection = () => (
	<section id="parents" className="parents-section">
		<div className="parents-title">
			<h2>Nuestros Padres</h2>
			<p className="parent-intro">
				El amor trasciende distancias. Aunque algunos caminos hoy estén lejos o nos acompañen desde el cielo, sentimos
				su amor y su bendición en cada paso. Esta celebración es un homenaje a quienes nos han guiado con su ejemplo y
				cariño, recordándonos que el amor siempre nos une.
			</p>
		</div>
		<div className="parents-content">
			<div className="parent-card">
				<div className="parent-in">
					<img src="src/assets/parent1.png" alt="Parent 1" className="parent-image" />
					<h3>Guadalupe Rosano</h3>
					<p className="parent-text">Mamá de la novia.</p>
				</div>
				<img src="src/assets/parent-deco1.svg" alt="Decoration" className="parent-deco" />
			</div>
			<div className="parent-card">
				<img src="src/assets/parent-deco1.svg" alt="Decoration" className="parent-deco-top hide-mobile" />
				<div className="parent-in">
					<img src="src/assets/parent1.png" alt="Parent 2" className="parent-image" />
					<h3>Carlos Avila</h3>
					<p className="parent-text">Papá de la novia.</p>
				</div>
			</div>
			<div className="parent-card">
				<div className="parent-in">
					<img src="src/assets/parent1.png" alt="Parent 3" className="parent-image" />
					<h3>Silvia Laura González</h3>
					<p className="parent-text">Mamá del novio.</p>
				</div>
				<img src="src/assets/parent-deco2.svg" alt="Decoration" className="parent-deco" />
			</div>
			<div className="parent-card">
				<img src="src/assets/parent-deco2.svg" alt="Decoration" className="parent-deco-top hide-mobile" />
				<div className="parent-in">
					<img src="src/assets/parent1.png" alt="Parent 4" className="parent-image" />
					<h3>Alberto Barajas</h3>
					<p className="parent-text">Papá del novio.</p>
				</div>
			</div>
		</div>
	</section>
);

export default ParentsSection;
