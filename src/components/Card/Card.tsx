import "./Card.scss";

import { BuyIcon } from "../../icons/BuyIcon";
import skeleton from "./../../skeleton.png";

interface ICard {
	img: string;
	name: string;
	weight: string;
	about: string;
	price: number;
}

const Card = ({ img, name, weight, about, price }: ICard) => {
	return (
		<div className="card">
			<div className="card__image-wrapper">
				<img
					src={img || skeleton}
					alt={name}
					className="card__image"
					onError={(
						event: React.SyntheticEvent<HTMLImageElement, Event>
					) => {
						event.currentTarget.src = skeleton;
					}}
				/>
			</div>
			<div className="card__main-text">
				<p className="card__card-name">{name}</p>
				<p className="card__card-about">{about}</p>

				<div className="card__price-container">
					<span className="card__card-price">{price} ₽</span>
					{weight && (
						<span className="card__card-weight">
							Вес: {weight} г
						</span>
					)}
					<button className="card__cart-button cart">
						В корзину <BuyIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
