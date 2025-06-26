import React, { useEffect } from "react";
import cadavremp4 from "../../assets/Robot qui détecte une mouche sur un cadavre - conférence espace des sciences.mp4";
import { Link } from "react-router-dom";

const Nourriture = () => {
	const videoRef = React.useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		let interval: NodeJS.Timeout;
		const onLoaded = () => {
			video.currentTime = 76;
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
				if (video.currentTime >= 83) {
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
				<h1 className={"text-2xl font-bold text-white"}>
					Etape 3: La nourriture
				</h1>

				<div className={"flex flex-row gap-4"}>
					<Link to={"/fly-journey/maison"}>
						<button type={"button"}>Etape 2</button>
					</Link>
					<Link to={"/fly-journey/versdeterre"}>
						<button type={"button"}>Etape 4</button>
					</Link>
				</div>
			</div>
			<video
				src={cadavremp4}
				className={"flex-1 absolute my-auto object-cover w-full"}
				ref={videoRef}
				controls={true}
			/>
		</div>
	);
};

export default Nourriture;
