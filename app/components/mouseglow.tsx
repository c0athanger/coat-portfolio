import { useEffect, useRef } from "react";

export const MouseGlow = () => {
	const glowRef = useRef<HTMLDivElement>(null);
	const animationFrame = useRef<number | null>(null);

	useEffect(() => {
		const glow = glowRef.current;
		if (!glow) return;

		const handleMouseMove = (e: MouseEvent) => {
			if (animationFrame.current) {
				cancelAnimationFrame(animationFrame.current);
			}

			animationFrame.current = requestAnimationFrame(() => {
				if (!glow) return;
				glow.style.left = `${e.clientX}px`;
				glow.style.top = `${e.clientY}px`;
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			if (animationFrame.current) {
				cancelAnimationFrame(animationFrame.current);
			}
		};
	}, []);

	return (
		<div
			ref={glowRef}
			className="pointer-events-none fixed z-0 h-[800px] w-[800px] opacity-80"
			style={{
				transform: "translate(-50%, -50%)",
				background:
					"radial-gradient(circle, rgba(106, 13, 173, 0.5) 0%, rgba(106, 13, 173, 0) 70%)",
				filter: "blur(100px)",
				borderRadius: "9999px",
				transition: "transform 0.08s linear",
			}}
		/>
	);
};