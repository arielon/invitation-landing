import React, { useState } from "react";

const imagesRow1 = [
	"src/assets/gallery1.jpg",
	"src/assets/gallery2.jpg",
	"src/assets/gallery3.jpg",
	"src/assets/gallery4.jpg",
	"src/assets/gallery5.jpg",
];

const imagesRow2 = [
	"src/assets/gallery6.jpg",
	"src/assets/gallery7.jpg",
	"src/assets/gallery8.jpg",
	"src/assets/gallery9.jpg",
	"src/assets/gallery10.jpg",
];

const imagesRow3 = [
	"src/assets/gallery11.jpg",
	"src/assets/gallery12.jpg",
	"src/assets/gallery13.jpg",
	"src/assets/gallery14.jpg",
	"src/assets/gallery15.jpg",
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
