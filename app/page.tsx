
"use client"
import React, { useState, useEffect } from 'react';
import * as motion from "motion/react-client"
import Loader from "@/app/components/loader";
import { usePathname } from 'next/navigation';
import Nav from "@/app/components/nav";
import About from "@/app/components/about";
import CardList from "./components/cardlist";
import Footer from "./components/footer";
import { MouseGlow } from "./components/mouseglow";
import Footnote from "./components/footnote";
import Namecard from "./components/namecard";


const experience = [
	{
		date: 'MAR 2026 — Present',
		title: 'Software Engineer II · Scotiabank',
		description: 'Develop and support enterprise transaction-processing systems using IBM ACE/IIB, FTM, RSA, MQ, WTX, DB2, and SQL. Design finite-state machines and asynchronous workflows, build backend integration logic, and troubleshoot distributed application, messaging, and database behavior.',
		link: '',
		languages: ['Java', 'SQL', 'DB2', 'ACE/IIB', 'FTM', 'RSA', 'MQ', 'WTX']
	},
	{
		date: 'SEP 2025 — Present',
		title: 'Software Engineering Consultant · FDM Group',
		description: 'Develop backend and web applications using Java, C#, SQL, and REST APIs. Apply object-oriented design, SOLID principles, multithreading, automated testing, and modern software engineering practices in Agile development environments.',
		link: '',
		languages: ['Java', 'C#', 'SQL', 'REST APIs', 'JUnit', 'Mockito']
	},
	{
		date: 'JAN 2024 — Present',
		title: 'Software Developer - AI Trainer · DataAnnotation (Freelance)',
		description: 'Train and evaluate AI coding agents by reviewing, correcting, and improving their problem-solving steps, tool usage, code changes, and implementation decisions. Contributed to training and evaluation work involving Claude, Grok, and Gemini, while reviewing generated code across multiple programming languages.',
		link: '',
		languages: ['Python', 'JavaScript', 'C#', 'C++', 'Java', 'Kotlin', 'Bash']
	},
	{
		date: 'SEP — DEC 2023',
		title: 'Software Developer Co-op · JSI Telecom',
		description: 'Developed and maintained applications using JavaScript, C#, Java, Angular, Ruby, SQLite, Docker, and Kubernetes. Collaborated across development teams on bug fixes and build rollouts and created Grunt automation tasks for cache-control workflows.',
		link: '',
		languages: ['JavaScript', 'C#', 'Java', 'Angular', 'Ruby', 'SQLite', 'Docker', 'Kubernetes']
	}
];

const projects = [
	{
		date: '2026',
		title: 'Banking REST API',
		description: 'Built a .NET backend with JWT authentication, role-based authorization, CQRS-style handlers, repositories, and stored-procedure-based persistence. Implemented customer, account, transaction, user, and refresh-token workflows with automated testing.',
		link: '',
		languages: ['C#', '.NET', 'SQL', 'JWT', 'xUnit', 'Moq']
	},
	{
		date: '2025',
		title: 'Portfolio Website',
		description: 'Developed a personal portfolio using Next.js and React with a responsive interface styled using Tailwind CSS.',
		link: 'https://github.com/c0athanger/coat-portfolio',
		languages: ['Next.js', 'React', 'Tailwind CSS']
	},
	{
		date: '2024',
		title: 'Ocean Change App',
		description: 'Developed a mobile application for fishermen to report environmental observations to the Oregon Department of Fish and Wildlife using Flutter, Firebase, Firestore, and Hive.',
		link: 'https://youtu.be/eQ6mSBmFA7M?si=WJfaK9UU6TuSuaCX&t=492',
		languages: ['Dart', 'Flutter', 'Firebase', 'Firestore', 'Hive']
	},
	{
		date: '2022',
		title: 'Pluribus-Inspired Poker AI',
		description: 'Built a poker-playing AI using Counterfactual Regret Minimization. Designed a thread-safe MCCFR training model and an object-oriented poker engine for generating a blueprint strategy.',
		link: '',
		languages: ['C++', 'C', 'Multithreading', 'MCCFR']
	},
	{
		date: '2021',
		title: 'C++ Implementation of Freddie',
		description: 'Implemented components of Freddie, an annotation-free isoform detection and discovery tool for transcriptomic long reads aligned to a reference genome.',
		link: 'https://github.com/cigar-bit/freddieC',
		languages: ['C++', 'C']
	}
];


export default function Home() {
	const isHome = usePathname() === '/';
	const [isLoading, setIsLoading] = useState(isHome);

	// Sets target="_blank" rel="noopener noreferrer" on external links
	const handleExternalLinks = () => {
		const allLinks = Array.from(document.querySelectorAll('a'));
		if (allLinks.length > 0) {
			allLinks.forEach(link => {
				if (link.host !== window.location.host) {
					link.setAttribute('rel', 'noopener noreferrer');
					link.setAttribute('target', '_blank');
				}
			});
		}
	};

	useEffect(() => {
		if (window.location.hash) {
			history.replaceState(null, "", window.location.pathname + window.location.search);
		}
	}, []);


	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (location.hash) {
			const id = location.hash.substring(1);
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}

		handleExternalLinks();
	}, [isLoading]);
	return (
		<motion.div className="flex scroll-smooth flex-col fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-navy overflow-y-auto z-[99] cursor-default">
			<MouseGlow />
			{isLoading && isHome ? (
				<Loader finishLoading={() => setIsLoading(false)} />
			) : (
				<motion.div className="">
					<Nav isHome={isHome} />
					<motion.div id="content" className=" flex flex-row justify-center w-full max-w-full">
						<motion.div className="sticky top-0 w-full max-w-40 sm:max-w-2xl h-full pl-2 pr-4 sm:pl-10 sm:pr-30">
							<Namecard delay={0.6} />
						</motion.div>
						<motion.div className="flex flex-col space-y-4 w-full max-w-60 sm:max-w-2xl sm:pr-10 pr-2">

							<About id='About' delay={0.6} />
							<CardList id="Experience" delay={1.2} data={experience} />
							<CardList id="Projects" delay={1.2} data={projects} />
							<Footnote />
						</motion.div>
					</motion.div>

					<Footer />

				</motion.div>
			)}
		</motion.div>
	);
}
