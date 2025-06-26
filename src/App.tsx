import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HelpDJTima from "./components/HelpDJTima.tsx";
import Earthworm from "./components/Earthworm.tsx";
import Home from "./components/Home.tsx";

const App = () => {
	return (
		<BrowserRouter>
			<nav className={"p-4"}>
				<ul className={"flex flex-row gap-4"}>
					<li>
						<Link to={"/"}>
							<button type={"button"}>Home</button>
						</Link>
					</li>
					<li>
						<Link to={"/help-dj-tima"}>
							<button type={"button"}>HelpDJTima</button>
						</Link>
					</li>
					<li>
						<Link to={"/earth-worm"}>
							<button type={"button"}>EarthWorm</button>
						</Link>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/help-dj-tima" element={<HelpDJTima />} />
				<Route path="/earth-worm" element={<Earthworm />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
