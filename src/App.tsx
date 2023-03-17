import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Promotions from "./pages/Promotions/Promotions";
import CartPage from "./pages/CartPage/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import PolicyPage from './pages/Policy/Policy';
import RulesOfDelivery from "./pages/RulesOfDelivery/RulesOfDelivery";



function App() {

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				<Route path="/rulesofdelivery" element={<RulesOfDelivery/>} />
				<Route path="/promotions" element={<Promotions />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/checkout/policy" element={<PolicyPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
