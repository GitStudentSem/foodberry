import "./Benefits.scss";

import { useState } from "react";

import { OnionIcon } from "../../icons/OnionIcon";
import { FlashIcon } from "../../icons/FlashIcon";
import { ChefIcon } from "../../icons/ChefIcon";

import benefitsData from "./benefitsData";

const Benefits = () => {

    const [descriptionActive, setDescriptionActive] = useState({title: benefitsData[0].title, description: benefitsData[0].description});

	return (
		<section className="benefits">
			<div className="benefits__container">
				<div className="benefits__descriptions">

                    <div className="description-block active">
                    <h2 className="description-block__title">{descriptionActive.title}</h2>
                    <p className="description-block__subtitle">{descriptionActive.description}</p>
                    </div>

					<button className="description-block__button">
						Посмотреть меню
					</button>
				</div>

				<div className="benefits__buttons">
                    {benefitsData.map(item => {
                        return(
                            <button key={item.button.name} className="benefits__button" onClick={() => {setDescriptionActive({title: item.title, description: item.description})}}>
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
