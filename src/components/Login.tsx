import React, { useState } from "react";
import { setToken } from "../auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();
			if (!username || !password) {
				alert("Please fill in both fields.");
				return;
			}
			const res = await fetch("https://reqres.in/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"x-api-key": "reqres-free-v1",
				},
				body: JSON.stringify({
					email: "eve.holt@reqres.in",
					password: "cityslicka",
				}),
			});

			if (res.ok) {
				console.log(res);
				const data = res.json();
				const token = (await data).token;
				setToken(token);
				navigate("/", { replace: true });
			}
		} catch (error) {
			console.error("Login failed:", error);
			alert("Login failed. Please try again.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className={"m-auto flex flex-col"}>
			<h1 className="text-center text-2xl font-bold mb-4">Login</h1>
			<div className="mb-4">
				<label
					htmlFor="username"
					className="block text-sm font-medium text-gray-700"
				>
					Username
				</label>
				<input
					type="text"
					id="username"
					name="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				/>
			</div>
			<div className="mb-6">
				<label
					htmlFor="password"
					className="block text-sm font-medium text-gray-700"
				>
					Password
				</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					name="password"
					required
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
			>
				Login
			</button>
		</form>
	);
};

export default Login;
