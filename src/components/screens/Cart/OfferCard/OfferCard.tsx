import "./OfferCard.scss";

interface IOfferCard {
	name: string;
	price: number;
	img: string;
}

const OfferCard = ({ name, price, img }: IOfferCard) => {
	return (
		<div className="offer-card">
			<div className="offer-card__wrapper">
				<div className="offer-card__image-block">
					<img
						src={img}
						alt="img"
						className="offer-card__image"
						width="200px"
						height="100px"
					/>
				</div>

				<div className="offer-card__main-text">
					<span className="offer-card__title">{name}</span> <br />

					<div className="offer-card__add-block">
						<span className="offer-card__subtitle">Добавить</span>
						<button className="offer-card__btn order-block__btn">+</button>
						<div className="offer-card__price order-block__price">{price} ₽</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OfferCard;

// https://i.pinimg.com/originals/7a/f2/51/7af251ac9560076fdc65b662452b5374.jpg