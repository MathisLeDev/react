import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HelpDJTima from "./components/HelpDJTima.tsx";
import Earthworm from "./components/Earthworm.tsx";
import Home from "./components/Home.tsx";
import Cadavre from "./components/flyJourney/Cadavre.tsx";
import Maison from "./components/flyJourney/Maison.tsx";
import Nourriture from "./components/flyJourney/Nourriture.tsx";
import VersDeTerre from "./components/flyJourney/VersDeTerre.tsx";
import Login from "./components/Login.tsx";
import Secret from "./components/Secret.tsx";
import ListeDePromo from "./components/promotion/ListeDePromo.tsx";

const App = () => {
	return (
		<BrowserRouter>
			<div className={"h-screen w-screen border flex flex-col"}>
				<nav className={"p-4 overflow-auto"}>
					<ul className={"flex flex-row gap-4 items-center"}>
						<li>
							<Link to={"/"}>
								<button type={"button"}>Home</button>
							</Link>
						</li>
						<li>
							<Link to={"/login"}>
								<button type={"button"}>Connexion</button>
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
						<li>
							<Link to={"/fly-journey/cadavre"}>
								<button type={"button"}>Parcours des mouches</button>
							</Link>
						</li>
						<li>
							<Link to={"/secret"}>
								<button type={"button"}>Secret de Zeno</button>
							</Link>
						</li>
						<li>
							<Link to={"/students"}>
								<button type={"button"}>Promotions</button>
							</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/help-dj-tima" element={<HelpDJTima />} />
					<Route path="/earth-worm" element={<Earthworm />} />
					<Route path="/fly-journey/cadavre" element={<Cadavre />} />
					<Route path="/fly-journey/maison" element={<Maison />} />
					<Route path="/fly-journey/nourriture" element={<Nourriture />} />
					<Route path="/fly-journey/versdeterre" element={<VersDeTerre />} />
					<Route path="/login" element={<Login />} />
					<Route path="/secret" element={<Secret />} />
					<Route path="/students" element={<ListeDePromo />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
