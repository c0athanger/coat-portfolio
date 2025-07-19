import React from "react";
import * as motion from "motion/react-client";

interface NameCardProps {
	delay?: number;
}

const Namecard = ({ delay = 0 }: NameCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 40 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5, delay: delay }}
			className="pt-10 sm:pt-20 text-white space-y-2 mt-4 sm:max-w-2xl max-w-52"
		>
			<h1 className="text-lg sm:text-5xl text-slate-300 font-bold">James Hill</h1>
			<h2 className="text-base sm:text-2xl text-slate-300">Software Developer</h2>
			<p className=" text-slate-400">
				I build full-stack applications, work with AI systems, and turn ideas into reliable, maintainable software.
			</p>
		</motion.div>
	);
};

export default Namecard;