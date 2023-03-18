import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import AppRouter from "AppRouter";

function App() {
	if (localStorage.length === 0) {
		localStorage.setItem("cart", "[]");
	}

	return (
		<div className="wrapper">
			<Header />
			<AppRouter />
			<Footer />
		</div>
	);
}

export default App;
