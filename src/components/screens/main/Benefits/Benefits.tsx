import "./Benefits.scss";

import { useState } from "react";

import { OnionIcon } from "../../../../icons/OnionIcon";
import { FlashIcon } from "../../../../icons/FlashIcon";
import { ChefIcon } from "../../../../icons/ChefIcon";

import benefitsData from "./benefitsData";

const Benefits = () => {
	const [descriptionActive, setDescriptionActive] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const icons: {
		[key: string]: JSX.Element;
	} = {
		onion: <OnionIcon />,
		flash: <FlashIcon />,
		chef: <ChefIcon />,
	};

	return (
		<section className="benefits">
			<div className="benefits__container">
				<div className="benefits__overflow"></div>
				<div className="benefits__descriptions">
					<div className="description-block active">
						<h2 className="description-block__title">
							{benefitsData[descriptionActive].title}
						</h2>
						<p className="description-block__subtitle">
							{benefitsData[descriptionActive].description}
						</p>
					</div>

					<button className="description-block__button">
						Посмотреть меню
					</button>
				</div>

				<div className="benefits__buttons">
					{benefitsData.map((item, index) => {
						return (
							<button
								key={item.button.name}
								className={`benefits__button ${
									isActive ? "green" : "orange"
								}`}
								onClick={() => {
									setDescriptionActive(index);
									setIsActive(!isActive);
								}}
							>
								{icons[item.button.icon]}
								{item.button.name}
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Benefits;
