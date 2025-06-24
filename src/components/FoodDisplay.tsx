type Props = {
	food: string;
};
const FoodDisplay = (props: Props) => {
	const { food } = props;
	return <h1 className={"text-center"}>My favorite food is {food}</h1>;
};

export default FoodDisplay;
