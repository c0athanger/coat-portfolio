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
			className="text-white space-y-2 pt-20 mt-4"
		>
			<h1 className="text-5xl text-slate-300 font-bold">James Hill</h1>
			<h2 className="text-2xl text-slate-300">Software Developer</h2>
			<p className="text-lg text-slate-400">
				I build full-stack applications, work with AI systems, and turn ideas into reliable, maintainable software.
			</p>
		</motion.div>
	);
};

export default Namecard;