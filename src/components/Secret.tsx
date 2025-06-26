import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth.ts";

const Secret = () => {
	const navigate = useNavigate();
	const videoRef = useRef(null);

	useEffect(() => {
		if (!isAuthenticated()) {
			navigate("/login", { replace: true });
		}
	}, []);

	return (
		<div className={"flex-1 flex"}>
			<div className={"m-auto"}>
				<h1 className={"text-center mb-4"}>Enzo Jeune</h1>
			</div>
		</div>
	);
};

export default Secret;
