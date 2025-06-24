import "./App.css";
import { useEffect, useState } from "react";
import Board from "./components/Board.tsx";
import Timer from "./components/Timer.tsx";

export type Fruit = {
	fruit: string;
	bg: string;
}

const App = () => {
	const fruits = [
		{ fruit: "🍍", bg: "bg-yellow-400" },
		{ fruit: "🥭", bg: "bg-orange-400" },
		{ fruit: "🍎", bg: "bg-red-500" },
		{ fruit: "🍈", bg: "bg-lime-300" },
		{ fruit: "🍉", bg: "bg-green-500" },
		{ fruit: "🍊", bg: "bg-orange-500" },
		{ fruit: "🍋", bg: "bg-yellow-300" },
		{ fruit: "🍌", bg: "bg-yellow-500" },
		{ fruit: "🍏", bg: "bg-green-400" },
		{ fruit: "🍐", bg: "bg-lime-400" },
		{ fruit: "🍇", bg: "bg-purple-500" },
		{ fruit: "🍓", bg: "bg-pink-400" },
		{ fruit: "🍒", bg: "bg-red-400" },
		{ fruit: "🍑", bg: "bg-orange-300" },
		{ fruit: "🥝", bg: "bg-green-600" },
		{ fruit: "🥥", bg: "bg-neutral-400" },
		{ fruit: "🍅", bg: "bg-red-600" },
		{ fruit: "🍆", bg: "bg-purple-700" },
		{ fruit: "🌽", bg: "bg-yellow-600" },
		{ fruit: "🥕", bg: "bg-orange-300" },
		{ fruit: "🥦", bg: "bg-green-700" },
		{ fruit: "🥬", bg: "bg-green-700" },
		{ fruit: "🧄", bg: "bg-stone-400" },
		{ fruit: "🧅", bg: "bg-orange-500" }
	];
	const TOTAL_CARDS = 28;
	const PAIRS = TOTAL_CARDS / 2;
	const TIME = 60;
	const [timeLeft, setTimeLeft] = useState(TIME);


	const shuffleFruits = () => {
		const shuffled = [...fruits].sort(() => Math.random() - 0.5);
		const selected = shuffled.slice(0, PAIRS);
		const duplicated = [...selected, ...selected];
		return  duplicated.sort(() => Math.random() - 0.5);
	}

	const [availableFruits, setAvailableFruits] = useState<Fruit[]>(shuffleFruits);

	const [gameState, setGameState] = useState<"start" | "playing" | "end" | "loose">(
		"start",
	);


	useEffect(() => {
		let timer: number;

		switch (gameState) {
			case "start":
				setTimeLeft(TIME);
				setAvailableFruits(shuffleFruits());
				break;

			case "playing":
				timer = setInterval(() => {
					setTimeLeft((prev) => {
						if (prev <= 1) {
							clearInterval(timer);
							setGameState("loose");
							return 0;
						}
						return prev - 1;
					});
				}, 1000);
				break;

			case "loose":
				alert("Time's up! You lost!");
				setGameState("end");
				break;

			case "end":
				alert("Game Over! You can restart the game.");
				break;
		}

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [gameState]);



	const onStart = () => {
		setGameState("playing");
	};

	const onRestart = () => {
		setGameState("start");
	}

	const endGame = () => {
			setGameState("end");
	}

	return (
		<main
			className={
				"h-screen  flex flex-col w-screen items-center justify-center"
			}
		>
			<h1 className={"text-red-300 !mb-10"}>Fruits</h1>
			<div className={"flex flex-col items-center gap-4"}>
				<Timer timeLeft={timeLeft} TIME={TIME}/>
				<Board availableFruits={availableFruits} gameState={gameState} endGame={endGame} onStart={onStart} onRestart={onRestart}/>
			</div>
		</main>
	);
}

export default App;