import React from 'react';
import * as motion from "motion/react-client";

interface AboutProps {
	id?: string;
	delay?: number;
}

const About = ({ id = '', delay = 0 }: AboutProps) => {
	return (
		<motion.div id={id} className="pt-10 sm:pt-20 flex flex-col w-full max-w-52 sm:max-w-2xl">


			<motion.div className="flex flex-col flex-wrap items-start">
				<motion.div className=" mt-4 w-full"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: delay + 0.4 }}>
					<p>Hello, thanks for taking the time to check out my site! I&apos;m a software engineer with experience building backend, integration, and distributed enterprise systems. My path into software started with a background in biochemistry and bioinformatics, where I realized I was more interested in building the tools behind scientific research than running the experiments themselves. That led me to pursue a second degree in computer science at Oregon State University and transition into software engineering.</p>
					<div style={{ height: '1.5em' }}></div>
					<p>Currently, I work as a Software Engineer II at Scotiabank, developing and supporting enterprise transaction-processing systems. My work involves backend integration, SQL and DB2, asynchronous workflows, messaging, and finite-state machines using technologies including IBM ACE/IIB, MQ, RSA, FTM, and WTX. Previously, I worked at <a href="https://www.jsitelecom.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-teal-300">JSI</a> on full-stack applications and continue to work with <a href="https://dataannotation.tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-teal-300">DataAnnotation.tech</a>, where I train and evaluate AI coding agents by reviewing and improving their code, tool usage, and problem-solving workflows.</p>
					<div style={{ height: '1.5em' }}></div>
					<p>I enjoy working on problems involving backend systems, algorithms, concurrency, and software architecture, and I&apos;m particularly interested in building reliable systems where different components, services, and data need to work together correctly.</p>
					<div style={{ height: '1.5em' }}></div>
					<p>Outside of software, you&rsquo;ll usually find me getting outplayed in blitz on <a href="https://www.chess.com/member/coathanger6" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-teal-300">Chess.com</a> or working through chess puzzles.</p>

				</motion.div>
			</motion.div>

		</motion.div>
	);
};

export default About;
