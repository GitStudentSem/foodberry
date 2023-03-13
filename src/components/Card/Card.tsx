import "./Card.scss";

import { BuyIcon } from "../../icons/BuyIcon";
import skeleton from "./../../skeleton.png";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface ICard {
	img: string;
	name: string;
	weight: string;
	about: string;
	price: number;
}

const Card = ({ img, name, weight, about, price }: ICard) => {
	const [buttonsShow, setButtonsShow] = useState(false);

	let orders = JSON.parse(localStorage.getItem("cart") || "");

	const addOrderToStorage = () => {
		orders.push({ img, name, weight, about, price });
		localStorage.setItem("cart", JSON.stringify(orders));
	};

	const deleteOrderFromStorage = () => {
		orders.pop();
		localStorage.setItem("cart", JSON.stringify(orders));
	};

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
							onClick={deleteOrderFromStorage}
						>
							-
						</button>
						<span className="card__card-price">{price} ₽</span>
						<span className="card__card-weight">{weight} г</span>
						<button
							className="card__cart-add-btn cart"
							onClick={addOrderToStorage}
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

