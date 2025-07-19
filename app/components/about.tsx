import React from 'react';
import * as motion from "motion/react-client";

interface AboutProps {
	id?: string;
	delay?: number;
}

const About = ({ id = '', delay = 0 }: AboutProps) => {
	return (
		<motion.div id={id} className="flex flex-col w-full pt-20 max-w-2xl">


			<motion.div className="flex flex-col flex-wrap items-start">
				<motion.div className="text-lg mt-4 w-full"
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: delay + 0.4 }}>
					<p>Hello, thanks for taking the time to check my site out! I&apos;m a software engineer with a background in biochemistry and bioinformatics. I transitioned into tech after realizing I was more interested in building the tools behind scientific research than running the experiments themselves. That shift led me to pursue a second degree in computer science, and I haven&apos;t looked back since.</p>
					<div style={{ height: '1.5em' }}></div>
					<p>While pursuing a second degree in computer science, I&apos;ve worked on a mix of projects including full-stack applications, web-applications, and AI. I&apos;ve also been fortunate enough to intern at JSI doing full-stack web development, and currently work with <a href="https://dataannotation.tech" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-teal-300">DataAnnotation.tech</a> reviewing and correcting AI-generated code, prompts, and responses across multiple programming languages and APIs to improve model performance and reliability.</p>
					<div style={{ height: '1.5em' }}></div>
					<p>In my spare time, you&rsquo;ll find me getting outplayed in blitz on <a href="https://www.chess.com/member/coathanger6" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-300 hover:text-teal-300">Chess.com</a> or working on chess puzzles. Chess helps me think more strategically: not just on the board, but also in code.</p>

				</motion.div>
			</motion.div>

		</motion.div>
	);
};

export default About;