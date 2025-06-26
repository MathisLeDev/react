import React from "react";
import useCounterStore from "../stores/store.ts";

const CounterManipulation = () => {
	const { reset, increment, decrement } = useCounterStore();
	return (
		<div className={"flex flex-col gap-2 p-10"}>
			<h1 className={"text-center"}>Counter Component</h1>
			<button type={"button"} onClick={() => increment(1)}>
				Increment
			</button>
			<button type={"button"} onClick={() => decrement(1)}>
				Decrement
			</button>
			<button type={"button"} onClick={() => reset()}>
				Reset
			</button>
		</div>
	);
};

export default CounterManipulation;
