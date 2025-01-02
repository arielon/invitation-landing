import React from "react";

const GiftSection = () => (
	<section id="gifts" className="gift-section">
		<div className="gift-svg-top">
			<img src="/images/svg/gift-icon.svg" alt="Gift Icon" />
		</div>
		<div className="gift-title">
			<img className="gift-left-svg" src="/images/svg/left-decor.svg" alt="Left Decor" />
			<h2>Mesa de Regalos</h2>
			<img className="gift-right-svg" src="/images/svg/right-decor.svg" alt="Right Decor" />
		</div>
		<p className="gift-description">
			Lo más importante es tu presencia, pero si deseas hacernos un presente, te dejamos algunas sugerencias de regalos.
		</p>
		<div className="gift-button">
			<button>
				<a
					href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51389282"
					target="_blank"
					rel="noopener noreferrer">
					Ir a la Mesa de Regalos
				</a>
			</button>
		</div>
	</section>
);

export default GiftSection;
