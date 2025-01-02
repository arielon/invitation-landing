// animations/animations.js
export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export const fadeInFromLeft = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

export const fadeInFromRight = {
	hidden: { opacity: 0, x: 100 },
	visible: { opacity: 1, x: 0 },
};
