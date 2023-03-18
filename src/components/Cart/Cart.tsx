import "./Cart.scss";
import { BuyIcon } from "../../icons/BuyIcon";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
	let orders = JSON.parse(localStorage.getItem("cart") || '').length;

	useEffect(() => {
		console.log('change counter');
	}, [orders]);

	return (
		<Link to="/cart" className="cart header__cart">
			<span className="buyIcon">
				<BuyIcon />
			</span>
			<span className="cart__text ">Корзина</span>
			<span className="cart__counter-block">
				<span className="cart__counter">
					{orders}
				</span>
			</span>
		</Link>
	);
};

export default Cart;
