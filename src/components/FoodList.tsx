type Props = {
	food: string;
	selectedFood: string;
	onClick: (food: string) => void;
};
const FoodList = (props: Props) => {
	const { food, selectedFood, onClick } = props;

	return (
		<div
			onClick={() => onClick(food)}
			className={`rounded-xl bg-white/10 p-4 shadow-xl hover:scale-105 hover:bg-white/20 duration-200 ${food === selectedFood && "bg-white/20"}`}
		>
			<p className={"text-xl font-semibold text-center"}>{food}</p>
		</div>
	);
};

export default FoodList;
