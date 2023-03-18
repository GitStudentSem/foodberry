import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import AppRouter from "AppRouter";
import { useEffect, useState } from "react";
import { ICard } from "components/Card/Card";

function App() {
	if (localStorage.length === 0) {
		localStorage.setItem("cart", "[]");
	}

	const [orders, setOrders] = useState<ICard[]>([]);
	console.log(orders);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(orders));
	}, [orders])

	return (
		<div className="wrapper">
			<Header orders={orders} />
			<AppRouter orders={orders} setOrders={setOrders} />
			<Footer />
		</div>
	);
}

export default App;
