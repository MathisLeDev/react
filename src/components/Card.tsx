import type { ILocation } from "../../data/locations.ts";

type Props = {
	location: ILocation;
	onDeleteRental: (locationName: string) => void;
};
const Card = (props: Props) => {
	const { location, onDeleteRental } = props;

	return (
		<div
			className={
				"rounded-xl bg-white/10 shadow-xl flex flex-col h-[350px] hover:scale-105 duration-200"
			}
		>
			<img
				src={location.image}
				alt={location.name}
				className={"h-[200px] w-[400px] object-cover rounded-t-xl"}
			/>
			<div className={"m-4 flex-1 flex flex-col"}>
				<h2 className={"text-xl font-semibold"}>{location.name}</h2>
				<p className={"text-gray-300"}>{location.location}</p>
				<p className={"text-xl font-semibold mt-auto"}>
					${location.price} / night
				</p>

				<button onClick={() => onDeleteRental(location.name)} type={"button"}>
					<span className={"text-gray-300"}>Supprimer</span>
				</button>
			</div>
		</div>
	);
};

export default Card;
