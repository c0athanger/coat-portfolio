"use client";
import React, { useState, useEffect } from 'react';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';
import CoatLoader from './Icons/coatLoader';
import * as motion from "motion/react-client";

interface NavProps {
	isHome: boolean;
}

const Nav = ({ isHome }: NavProps) => {
	const [isMounted, setIsMounted] = useState(!isHome);
	const prefersReducedMotion = usePrefersReducedMotion();

	useEffect(() => {
		if (prefersReducedMotion) {
			return;
		}

		const timeout = setTimeout(() => {
			setIsMounted(true);
		}, 100);

		return () => clearTimeout(timeout);
	}, [prefersReducedMotion]);

	const ResumeLink = (
		<a
			className=""
			href="/Resume2025.pdf"
			target="_blank"
			rel="noopener noreferrer"
		>
			Resume
		</a>
	);

	return (
		<motion.div
			className="bg-nav pr-12 sm:pr-0 sm:px-6 lg:px-10 z-[11] filter-none pointer-events-auto select-auto fixed top-0 left-0 w-full h-20 transition-all duration-250 ease-custom-bezier"
		>
			<motion.div className="flex text-xs sm:text-base items-center relative backdrop-blur w-[100vw] max-w-[100%] overflow-hidden text-lightest-slate z-[12]">
				<motion.div className={`flex justify-between items-center w-full ${isMounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
					<motion.div className="flex items-center"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}>
						<CoatLoader h="35px" w="75.1" />
					</motion.div>
					<motion.nav className="flex space-x-4">
						<motion.a href="#About" className="text-teal-300 hover:text-white"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}>
							About
						</motion.a>
						<motion.a href="#Experience" className="text-teal-300 hover:text-white"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}>
							Experience
						</motion.a>
						<motion.a href="#Projects" className="text-teal-300 hover:text-white"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}>
							Projects
						</motion.a>
						<motion.div className="text-teal-300 hover:text-white"
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}>
							{ResumeLink}
						</motion.div>
					</motion.nav>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}

export default Nav;