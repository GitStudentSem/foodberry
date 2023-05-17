import "./HomePage.scss";
import NavBar from "../../components/screens/main/NavBar/NavBar";
import Intro from "../../components/screens/main/Intro/Intro";
import Content from "../../components/screens/main/Content/Content";
import Map from "../../components/screens/main/Map/Map";
import ContactsMap from "components/screens/main/ContactsMap/ContactsMap";

import {useState} from "react";
import {ICard} from "components/screens/main/Card/Card";
import {IOrders} from "AppRouter";

const HomePage = ({orders, setOrders}: IOrders) => {
	const [activeSection, setActiveSection] = useState("coldSnackes");

	return (
		<main className="main">
			<Intro/>
			<NavBar activeSection={activeSection}/>
			<Content
				orders={orders}
				setOrders={setOrders}
				setActiveSection={setActiveSection}
			/>
			<div className="wrapper-contactsMap">
				<ContactsMap/>
				<Map classNames="map"/>
			</div>
		</main>
	);
};

export default HomePage;
