import React from 'react';
import Card from './card';
import * as motion from "motion/react-client"

interface CardListProps {
	id: string;
	delay?: number;
	data: {
		date: string;
		title: string;
		description: string;
		link: string;
		languages: string[];
	}[];
}
const CardList = ({ id: title, delay = 0, data }: CardListProps) => {
	return (
		<motion.div id={title} className="relative overflow-x-hidden pt-20 group/cards flex flex-col gap-4">
			<motion.h1 className="text-left text-3xl text-white"
				initial={{ opacity: 0, y: -40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: delay }}>
				{title}
			</motion.h1>
			{data.map((item, idx) => (
				<motion.div
					key={idx}
					className="card-hover-wrapper transition-opacity duration-300"
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{
						delay: delay + idx * 0.1,
						duration: 0.5,
						ease: "easeOut"
					}}
				>
					<Card {...item} />
				</motion.div>
			))}
		</motion.div>
	);
};


export default CardList;