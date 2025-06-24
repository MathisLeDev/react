import locations from "../data/locations.ts";
import Card from "./components/Card.tsx";

const App = () => {
	return (
		<main className={"flex flex-col my-auto"}>
			<h1 className={"text-center"}>Locations de rêve</h1>
			<div className={"grid grid-cols-1 xl:grid-cols-3 gap-8 mx-auto my-8"}>
				{locations.map((location) => (
					<Card location={location} key={location.name} />
				))}
			</div>
		</main>
	);
};

export default App;
