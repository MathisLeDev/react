import { useState } from "react";
import Food from "../data/Food.ts";
import FoodDisplay from "./components/FoodDisplay.tsx";
import FoodList from "./components/FoodList.tsx";

const App = () => {
	const [selectedFood, setSelectedFood] = useState<string>("--");

	const handleFoodSelection = (food: string) => {
		if (selectedFood === food) {
			setSelectedFood("--");
			return;
		}
		setSelectedFood(food);
	};

	return (
		<main className={"flex flex-col my-auto"}>
			<FoodDisplay food={selectedFood} />
			<div className={"grid grid-cols-1 xl:grid-cols-3 gap-8 mx-auto my-8"}>
				{Food.map((food) => (
					<FoodList
						food={food}
						key={food}
						onClick={handleFoodSelection}
						selectedFood={selectedFood}
					/>
				))}
			</div>
		</main>
	);
};

export default App;
