import React from "react";
import useCounterStore from "../../stores/store.ts";

const CounterDisplay = () => {
	const { count } = useCounterStore();

	return (
		<div className={"flex flex-col gap-2 p-10"}>
			<h1 className={"text-center"}>Counter Component</h1>
			<div className={"text-center text-2xl font-bold"}>{count}</div>
		</div>
	);
};

export default CounterDisplay;
