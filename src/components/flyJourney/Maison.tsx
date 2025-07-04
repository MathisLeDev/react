import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Maison = () => {
	const videoRef = React.useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		let interval: NodeJS.Timeout;
		const onLoaded = () => {
			video.currentTime = 56;
			video.play().catch(console.error);
		};

		if (video) {
			if (video.readyState >= 1) {
				onLoaded();
			} else {
				video.addEventListener("loadedmetadata", onLoaded);
			}

			video.play().catch((error) => {
				console.error("Error playing video:", error);
			});

			interval = setInterval(() => {
				if (video.currentTime >= 76) {
					video.pause();
					clearInterval(interval);
				}
			}, 600);
		}

		return () => {
			clearInterval(interval);
			if (video) {
				video.pause();
				video.currentTime = 0;
			}
		};
	}, []);

	return (
		<div className={"flex-1 flex flex-col items-center justify-center "}>
			<div
				className={
					"flex items-center gap-4 z-10 flex-col justify-center rounded-md bg-black/40 p-4 shadow-2xl"
				}
			>
				<h1 className={"text-2xl font-bold text-white"}>Etape 2: La maison</h1>

				<div className={"flex flex-row gap-4"}>
					<Link to={"/fly-journey/cadavre"}>
						<button type={"button"}>Etape 1</button>
					</Link>
					<Link to={"/fly-journey/nourriture"}>
						<button type={"button"}>Etape 3</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Maison;
