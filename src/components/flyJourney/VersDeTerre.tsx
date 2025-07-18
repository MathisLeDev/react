import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Nourriture = () => {
	const videoRef = React.useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		let interval: NodeJS.Timeout;
		const onLoaded = () => {
			video.currentTime = 83;
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
				<h1 className={"text-2xl font-bold text-white"}>Etape 3: L'abeille</h1>

				<div className={"flex flex-row gap-4"}>
					<Link to={"/fly-journey/nourriture"}>
						<button type={"button"}>Etape 3</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nourriture;
