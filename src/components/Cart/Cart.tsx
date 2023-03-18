import "./Cart.scss";
import { BuyIcon } from "../../icons/BuyIcon";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ICard } from "components/Card/Card";

interface ICart {
	orders: ICard[];
}

const Cart = ({ orders }: ICart) => {
	return (
		<Link to="/cart" className="cart header__cart">
			<span className="buyIcon">
				<BuyIcon />
			</span>
			<span className="cart__text ">Корзина</span>
			<span className="cart__counter-block">
				<span className="cart__counter">{orders.length}</span>
			</span>
		</Link>
	);
};

export default Cart;
