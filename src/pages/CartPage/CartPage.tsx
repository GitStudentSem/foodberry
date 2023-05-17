import "./CartPage.scss";

import { Link } from "react-router-dom";

import Order from "../../components/screens/Cart/Order/Order";
import OfferCard from "../../components/screens/Cart/OfferCard/OfferCard";

import { food } from "../../dataBase";

const CartPage = () => {
	const renderOrders = () => {
		let orders: {
			img: string;
			name: string;
			weight: string;
			about: string;
			price: number;
		}[] = JSON.parse(localStorage.getItem("cart") || "");

		return orders.length >= 1 ? (
			orders.map((item, index) => (
				<Order
					img={item.name}
					name={item.name}
					weight={item.weight}
					about={item.about}
					price={item.price}
					key={index}
				/>
			))
		) : (
			<h1>Вы не добавляли товаров в корзину</h1>
		);
	};

	const getRandomInt = (max: number) => {
		return Math.floor(Math.random() * max);
	};

	let dishArray: any[] = [];

	while (dishArray.length != 10) {
		let index = getRandomInt(food.length);
		dishArray.push(food[index]);
		dishArray = dishArray.filter((v, i, arr) => arr.indexOf(v) == i);

		break;
	}

	const renderDishes = () => {
		return dishArray.map((item, index) => {
			return (
				<div className="dish-offers__wrapper" key={index}>
					{item.foods.map((dish: any, index: number) => {
						return (
							<OfferCard
								name={dish.name}
								price={dish.price}
								img={dish.img}
								key={index}
							/>
						);
					})}
				</div>
			);
		});
	};

	return (
		<div className="cart-page">
			<div className="cart-page__wrapper">
				<div className="orders-amount">
					<Link to="/" className="go-back">
						&lt; к выбору блюда
					</Link>
					<br />
					<div className="orders-amount__wrapper">
						<span className="title-line"></span>
						<span className="orders-amount__path">Корзина</span>
						<span className="orders-counter">
							(в корзине {JSON.parse(localStorage.getItem('cart') || '').length} товаров)
						</span>
					</div>
				</div>

				<div className="orders">
					<div className="orders__wrapper">{renderOrders()}</div>
				</div>

				<div className="dish-offers">
					<div className="dish-offers__title">
						<div className="title-line"></div> Добавить к заказу
					</div>
					{renderDishes()}
				</div>

				<hr className="dish-offers__divider" />

				<div className="place-order">
					<div className="place-order__wrapper">
						<div className="place-order__main-text">
							<p className="place-order__price-total">
								Итого:
								<span className="place-order__price">
									500 ₽
								</span>
							</p>
							<p className="place-order__subtitle">
								До бесплатной доставки не хватает: 10 ₽
							</p>
							<p className="place-order__subtitle-sm">
								Минимальная сумма заказа 1500 ₽
							</p>
						</div>
						<Link to="/checkout" className="place-order__place-btn">
							Оформить заказ
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
