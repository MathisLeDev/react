import locations, { type ILocation } from "../data/locations.ts";
import Card from "./components/Card.tsx";
import { useState } from "react";

const App = () => {
	const [cards, setCards] = useState<ILocation[]>(locations);

	const [name, setName] = useState("");
	const [locationText, setLocationText] = useState("");
	const [price, setPrice] = useState<number>(0);
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string>("");

	const onAddRental = () => {
		if (!name || !locationText || !price || !imagePreview) return;

		const newLocation: ILocation = {
			name,
			location: locationText,
			price,
			image: imagePreview,
		};

		setCards((prev) => [...prev, newLocation]);
		setName("");
		setLocationText("");
		setPrice(0);
		setImageFile(null);
		setImagePreview("");
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImageFile(file);
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const onDeleteRental = (locationName: string) => {
		setCards((prevCards) =>
			prevCards.filter((location) => location.name !== locationName),
		);
	};

	return (
		<main className={"flex flex-col my-auto"}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onAddRental();
				}}
				className="mb-8 mx-auto"
			>
				<div className={"flex flex-col gap-4"}>
					<label>
						Nom de la location:
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={"border border-gray-300 rounded p-2 w-full"}
						/>
					</label>
					<label>
						Lieu:
						<input
							type="text"
							value={locationText}
							onChange={(e) => setLocationText(e.target.value)}
							className={"border border-gray-300 rounded p-2 w-full"}
						/>
					</label>
					<label>
						Prix par nuit:
						<input
							type="number"
							value={price}
							onChange={(e) => setPrice(Number(e.target.value))}
							className={"border border-gray-300 rounded p-2 w-full"}
						/>
					</label>
					<label>
						Image:
						<input
							type="file"
							accept="image/*"
							onChange={handleImageChange}
							className="border border-gray-300 rounded p-2 w-full"
						/>
					</label>
					{imagePreview && (
						<img
							src={imagePreview}
							alt="Aperçu"
							className="w-64 h-auto rounded shadow"
						/>
					)}
					<button
						type="submit"
						className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
					>
						Ajouter une location
					</button>
				</div>
			</form>

			<h1 className={"text-center text-2xl font-bold"}>Locations de rêve</h1>
			<div className={"grid grid-cols-1 xl:grid-cols-3 gap-8 mx-auto my-8"}>
				{cards.map((location) => (
					<Card
						location={location}
						key={location.name}
						onDeleteRental={onDeleteRental}
					/>
				))}
			</div>
		</main>
	);
};

export default App;
