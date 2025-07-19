interface CardProps {
	date: string;
	title: string;
	description: string;
	link: string;
	languages: string[];
}

const Card = ({ date, title, description, link, languages }: CardProps) => {

	const content = (
		<div className={`group hover:bg-slate-800/50 rounded-lg p-6 flex transition-colors duration-300 ${link ? 'cursor-pointer' : 'cursor-default'}`}>
			<div className="w-1/4 pr-4 flex">
				<span className="text-gray-500 text-md font-semibold mt-10">{date}</span>
			</div>

			<div className="w-3/4">
				<h2 className="text-lg font-medium text-slate-200 mb-2 flex items-center gap-1">
					{title}
					{link && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="h-5 w-5 shrink-0 motion-reduce:transition-none ml-1 translate-y-px transform transition-translate duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clipRule="evenodd"
							/>
						</svg>
					)}
				</h2>
				<p className="mb-4">{description}</p>

				<div className="flex flex-wrap gap-2">
					{languages.map((lang, index) => (
						<span
							key={index}
							className="bg-teal-400/10 bg-opacity-20 text-teal-300 text-sm px-3 py-1 rounded-full"
						>
							{lang}
						</span>
					))}
				</div>
			</div>
		</div>
	);

	return link ? (
		<a href={link} target="_blank" rel="noopener noreferrer" className="block">
			{content}
		</a>
	) : (
		content
	);
};

export default Card;