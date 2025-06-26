import { useNavigate } from "react-router-dom";
import { removeToken } from "../auth.ts";
import CounterManipulation from "./CounterManipulation.tsx";
import CounterDisplay from "./Counter/CounterDisplay.tsx";

const Home = () => {
	const navigate = useNavigate();

	const handleLogOut = () => {
		removeToken();
		navigate("/login", { replace: true });
	};
	return (
		<div className={"m-auto"}>
			<h1>Home</h1>
			<CounterDisplay />

			<CounterManipulation />

			<button type={"button"} onClick={handleLogOut}>
				Déconnexion
			</button>
		</div>
	);
};

export default Home;
