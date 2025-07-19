import React from "react";


const Footnote = () => {
	return (
		<div className="text-m w-3/4 mt-10 mb-20 ml-6">
			<p className="text-slate-400/70">
				This project was coded in{" "}
				<a
					href="https://code.visualstudio.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-300 font-bold hover:text-white cursor-pointer backdrop-opacity-100"
				>
					Visual Studio Code
				</a>
				, built with{" "}
				<a
					href="https://nextjs.org"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-300 font-bold hover:text-white cursor-pointer backdrop-opacity-100"
				>
					Next.js
				</a>{" "}
				and{" "}
				<a
					href="https://tailwindcss.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-300 font-bold hover:text-white cursor-pointer backdrop-opacity-100"
				>
					Tailwind CSS
				</a>
				, and deployed using{" "}
				<a
					href="https://vercel.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-teal-300 font-bold hover:text-white cursor-pointer backdrop-opacity-100"
				>
					Vercel
				</a>
				. Everything is fully responsive and designed with simplicity in mind.
			</p>
		</div>
	);
};

export default Footnote;