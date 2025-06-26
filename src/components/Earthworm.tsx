import React, { useEffect, useState } from "react";

const GRID_SIZE = 10;
const MOVE_INTERVAL = 1000; // 10 seconds

interface Position {
	row: number;
	col: number;
}

const Earthworm = () => {
	const [position, setPosition] = useState<Position>({ row: 0, col: 0 });
	const [hunger, setHunger] = useState<number>(0);
	const [alive, setAlive] = useState<boolean>(true);

	useEffect(() => {
		if (!alive) return;

		const id = setInterval(() => {
			// Move the worm one cell in a random legal direction
			setPosition((prev) => {
				const directions = [
					{ row: -1, col: 0 },
					{ row: 1, col: 0 },
					{ row: 0, col: -1 },
					{ row: 0, col: 1 },
				];

				const legalMoves = directions
					.map((d) => ({ row: prev.row + d.row, col: prev.col + d.col }))
					.filter(
						(p) =>
							p.row >= 0 &&
							p.row < GRID_SIZE &&
							p.col >= 0 &&
							p.col < GRID_SIZE,
					);

				return legalMoves[Math.floor(Math.random() * legalMoves.length)];
			});

			// Increment hunger and check for death
			setHunger((h) => {
				const next = h + 1;
				if (next >= 10) setAlive(false);
				return Math.min(next, 10);
			});
		}, MOVE_INTERVAL);

		return () => clearInterval(id);
	}, [alive]);

	return (
		<div className="flex flex-col items-center space-y-4">
			<div className="grid grid-cols-10 gap-1">
				{Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, idx) => {
					const row = Math.floor(idx / GRID_SIZE);
					const col = idx % GRID_SIZE;
					const isWorm = row === position.row && col === position.col;

					return (
						<div
							key={idx}
							className={`w-8 h-8 border border-gray-400 flex items-center justify-center ${isWorm ? (alive ? "bg-green-500" : "bg-gray-500") : ""}`}
						>
							{isWorm && "🐛"}
						</div>
					);
				})}
			</div>

			{/* Info panel */}
			<div className="text-center">
				<p>Hunger: {hunger}/10</p>
				{!alive && (
					<p className="text-red-600 font-semibold">Le ver est mort 😢</p>
				)}
			</div>
		</div>
	);
};

export default Earthworm;
