import { useState } from "react";

// styles
import "./DeliverySelf.scss"

const DeliverySelf = () => {

	const [isSelectRestraunt, setIsSelectRestraunt] = useState(false);

	return (

		<div className={"tab-adress DeliverySelf"}>
			<p className="base-text DeliverySelf__subtitle">
				Выберите ресторан
			</p>
			<div
				className={`select-wrap ${isSelectRestraunt ? "selected" : ""
					}`}
			>
				<select
					className="select-restaurant"
					name="restaurant"
					id="restaurant"
					onClick={() => {
						setIsSelectRestraunt(!isSelectRestraunt);
					}}
				>
					<option value="restaurant">
						Выберите ресторан
					</option>
					<option value="restaurant1">
						Ресторан Заморский
					</option>
					<option value="restaurant2">
						Пальчики Оближешь
					</option>
					<option value="restaurant3">
						Чревоугодие наш конек
					</option>
					<option value="restaurant4">
						Шашлычки-машлычки
					</option>
					<option value="restaurant5">
						Чет кушать захотелось
					</option>
				</select>
			</div>
		</div>
	);
};

export default DeliverySelf;

