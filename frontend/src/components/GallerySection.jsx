import React, { useState } from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeIn, fadeInFromLeft, fadeInFromRight } from "../animations/animations";

const imagesRow1 = [
	"/images/gallery1.jpg",
	"/images/gallery2.jpg",
	"/images/gallery3.jpg",
	"/images/gallery4.jpg",
	"/images/gallery5.jpg",
];

const imagesRow2 = [
	"/images/gallery6.jpg",
	"/images/gallery7.jpg",
	"/images/gallery8.jpg",
	"/images/gallery9.jpg",
	"/images/gallery10.jpg",
];

const imagesRow3 = [
	"/images/gallery11.jpg",
	"/images/gallery12.jpg",
	"/images/gallery13.jpg",
	"/images/gallery14.jpg",
	"/images/gallery15.jpg",
];

const rowStyles = {
	"row-1": ["wide", "wide", "wide", "tall", "wide"],
	"row-2": ["wide", "tall", "wide", "wide", "wide"],
	"row-3": ["wide", "tall", "wide", "wide", "wide"],
};

const GallerySection = () => {
	const [lightbox, setLightbox] = useState({ isOpen: false, currentImage: "" });

	const openLightbox = (img) => {
		setLightbox({ isOpen: true, currentImage: img });
	};

	const closeLightbox = () => {
		setLightbox({ isOpen: false, currentImage: "" });
	};

	const renderRow = (images, rowClass, reverse = false) => (
		<div className={`gallery-row ${rowClass}`} style={{ animationDirection: reverse ? "reverse" : "normal" }}>
			{[...images, ...images].map((img, index) => (
				<div
					key={`${rowClass}-${index}`}
					className={`gallery-image-container ${rowStyles[rowClass][index % rowStyles[rowClass].length]}`}
					onClick={() => openLightbox(img)}>
					<img src={img} alt={`Gallery ${rowClass}-${index + 1}`} />
				</div>
			))}
		</div>
	);

	return (
		<section id="gallery" className="gallery-section">
			<h2>Galería</h2>
			<div className="gallery-container">
				{renderRow(imagesRow1, "row-1")}
				{renderRow(imagesRow2, "row-2", true)} {/* Reverse animation */}
				{renderRow(imagesRow3, "row-3")}
			</div>
			{lightbox.isOpen && (
				<div className="lightbox" onClick={closeLightbox}>
					<img src={lightbox.currentImage} alt="Full View" />
				</div>
			)}
		</section>
	);
};

export default GallerySection;
