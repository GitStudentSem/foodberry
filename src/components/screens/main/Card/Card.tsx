import "./Card.scss";

import { BuyIcon } from "../../../../icons/BuyIcon";
import skeleton from "../../../../skeleton.png";

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { IOrders } from "AppRouter";

export interface ICard {
	img: string;
	name: string;
	weight: string;
	about: string;
	price: number;
	id: number;
}

const Card = ({
	img,
	name,
	weight,
	about,
	price,
	id,
	orders,
	setOrders,
}: ICard & IOrders) => {
	const [buttonsShow, setButtonsShow] = useState(false);

	// let orders = JSON.parse(localStorage.getItem("cart") || "");

	// const addOrderToStorage = () => {
	// 	orders.push({ img, name, weight, about, price });
	// 	localStorage.setItem("cart", JSON.stringify(orders));
	// };

	// const deleteOrderFromStorage = (id) => {
	// 	orders.filter((order) => order.id !== id);
	// 	orders.pop();
	// 	console.log(orders);

	// 	localStorage.setItem("cart", JSON.stringify(orders));
	// };

	return (
		<div className="card">
			<div className="card__image-wrapper">
				<LazyLoadImage
					src={img}
					effect="blur"
					className="card__image"
					onError={(
						event: React.SyntheticEvent<HTMLImageElement, Event>
					) => {
						event.currentTarget.src = skeleton;
					}}
					alt={name}
				/>
			</div>
			<div className="card__main-text">
				<p className="card__card-name">{name}</p>
				<p className="card__card-about">{about}</p>
				{buttonsShow ? (
					<div className="card__price-container">
						<button
							className="card__cart-add-btn cart"
							onClick={() => {
								const prevOrders = [...orders];
								prevOrders.push({
									img,
									name,
									weight,
									about,
									price,
									id,
								});
								setOrders(prevOrders);
							}}
						>
							-
						</button>
						<span className="card__card-price">{price} ₽</span>
						<span className="card__card-weight">{weight} г</span>
						<button
							className="card__cart-add-btn cart"
							onClick={() => {
								console.log(orders);
								const prevOrders = [...orders];
								prevOrders.push({
									img,
									name,
									weight,
									about,
									price,
									id,
								});
								setOrders(prevOrders);
								alert(`${name} добавлено в корзину`);
								localStorage.setItem(
									"cart",
									JSON.stringify(prevOrders)
								);
							}}
						>
							+
						</button>
					</div>
				) : (
					<div className="card__price-container">
						<span className="card__card-price">{price} ₽</span>
						{weight && (
							<span className="card__card-weight">
								Вес: {weight} г
							</span>
						)}
						<button
							className="card__cart-button cart"
							onClick={() => setButtonsShow(true)}
						>
							В корзину <BuyIcon />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
