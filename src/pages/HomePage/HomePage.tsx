import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Content from "../../components/Content/Content";
import Map from "../../components/Map/Map";
import ContactsMap from "components/ContactsMap/ContactsMap";

import { useState } from "react";

const HomePage = () => {

	const [activeSection, setActiveSection] = useState("coldSnackes");

	return (
		<main className="main">
			<Intro />
			<NavBar
				activeSection={activeSection}
			/>
			<Content
				setActiveSection={setActiveSection}
			/>
			<div className="wrapper-contactsMap">
				<ContactsMap />
				<Map classNames="map" />

			</div>

		</main>
	);
};

export default HomePage;
