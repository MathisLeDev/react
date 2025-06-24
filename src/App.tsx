import { useState } from "react";
import hiddenPng from "./assets/image (1).png";
import notHidden from "./assets/image.png";
const App = () => {
	const [hidden, setHidden] = useState<boolean>(false);

	return (
		<main className={"flex flex-col my-auto"}>
			<img
				src={hidden ? notHidden : hiddenPng}
				alt="Image"
				className="w-96 h-96 mx-auto"
			/>

			<button
				type={"button"}
				className={"mx-auto mt-4"}
				onClick={() => setHidden(!hidden)}
			>
				On me voit
			</button>
		</main>
	);
};

export default App;
