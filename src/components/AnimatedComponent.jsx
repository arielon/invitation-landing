// AnimatedComponent.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedComponent = ({ children, animation, delay = 0 }) => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true }}
		transition={{ duration: 0.8, delay }}
		variants={animation}>
		{children}
	</motion.div>
);

export default AnimatedComponent;
