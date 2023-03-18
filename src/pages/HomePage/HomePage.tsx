import "./HomePage.scss";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Content from "../../components/Content/Content";
import Map from "../../components/Map/Map";
import ContactsMap from "components/ContactsMap/ContactsMap";

import { useState } from "react";
import { ICard } from "components/Card/Card";
import { IOrders } from "AppRouter";

const HomePage = ({ orders, setOrders }: IOrders) => {
	const [activeSection, setActiveSection] = useState("coldSnackes");

	return (
		<main className="main">
			<Intro />
			<NavBar activeSection={activeSection} />
			<Content
				orders={orders}
				setOrders={setOrders}
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
