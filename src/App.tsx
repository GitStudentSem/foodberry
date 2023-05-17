import "./App.scss";

import {Routes, Route} from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import AppRouter from "AppRouter";
import {useEffect, useState} from "react";
import {ICard} from "components/screens/main/Card/Card";
import Layout from "./layout/Layout";

function App() {
	if (localStorage.length === 0) {
		localStorage.setItem("cart", "[]");
	}

	const [orders, setOrders] = useState<ICard[]>([]);

	useEffect(() => {
		setOrders(JSON.parse(localStorage.getItem('cart') || ''));
	}, [orders])

	return (
		<div className="wrapper">
			<Layout><AppRouter orders={orders} setOrders={setOrders}/></Layout>
		</div>
	);
}

export default App;
