import React, { useEffect } from "react";

const HelpDjTima = () => {
	const [tracks, setTracks] = React.useState<any[]>([]);
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<string | null>(null);

	const fetchTracks = async () => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch("/deezer/chart/0/tracks");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setTracks(data.data);
		} catch (error) {
			setError(error.message || "An error occurred while fetching tracks");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchTracks().then();
	}, []);

	return (
		<div className={"mx-auto"}>
			<h1>DJ Tima's Top Tracks</h1>
			{loading ? (
				<p>Loading tracks...</p>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<ul>
					{tracks.map((track) => (
						<li key={track.id} className={"my-2"}>
							<strong>{track.title}</strong> by {track.artist.name}
							<br />
							<audio controls>
								<source src={track.preview} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default HelpDjTima;
