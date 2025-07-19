"use client";
import React from "react";
import CoatLoader from "./Icons/coatLoader";
import * as motion from "motion/react-client"


const Loader = ({ finishLoading }: { finishLoading: () => void }) => {

	return (
		<motion.div className="flex items-center justify-center fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-navy z-[99]"
			initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
			animate={{ opacity: 0, scale: 0.1, x: "-50vw", y: "-50vh" }}
			transition={{ duration: 0.5, delay: 3.5 }}
			onAnimationComplete={() => finishLoading()}>
			<CoatLoader animate={true} />
		</motion.div>
	);
};

export default Loader;
