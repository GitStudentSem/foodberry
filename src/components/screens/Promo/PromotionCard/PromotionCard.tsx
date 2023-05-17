import './PromotionCard.scss';

import skeleton  from '../../../../skeleton.png'

interface ICard {
    img: string;
    title: string;
    description: string;
    dateTime: string;
}

const PromotionCard = ({img, title, description, dateTime}: ICard) => {
    return (
		<div className="promotion-card">
			<div className="promotion-card__image-wrapper">
				<img
					src={img || skeleton}
					alt={title}
					className="promotion-card__image"
					onError={(
						event: React.SyntheticEvent<HTMLImageElement, Event>
					) => {
						event.currentTarget.src = skeleton;
					}}
				/>
			</div>
			<div className="promotion-card__main-text">
					<h2 className="promotion-card__card-title">{title}</h2>

				<p className="promotion-card__card-description">{description}</p>

				<div className="promotion-card__date-container">
					<span className="promotion-card__card-dateTime">{dateTime}</span>
				</div>
			</div>
		</div>
	);
}

export default PromotionCard;