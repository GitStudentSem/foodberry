import {useState} from "react";

// components
import Input from "../Input/Input";

// styles
import "./Time.scss"

const Time = () => {

	const [isTimeDate, setIsTimeDate] = useState(false);
	const [countPerson, setCountPerson] = useState(1);
	const [valuePerson, setValuePerson] = useState(1);

	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="Time">
			<p className="base-text  Time__subtitle">
				4. Когда доставить
			</p>
			<div className="delivery-time">
				<div className="toggle-checkTime">

					<span
						className={`toggle-checkTime__span ${!isTimeDate ? "active" : ""
						}`}
						onClick={() => setIsTimeDate(false)}
					>
						В ближайшее время
					</span>
					<span
						className={`toggle-checkTime__span ${isTimeDate ? "active" : ""
						}`}
						onClick={() => setIsTimeDate(true)}
					>
						Ко времени
					</span>
				</div>
				{
					isTimeDate ?
						<div className="inputTime">
							<span>
								Укажите время
							</span>
							<Input
								name="edd"
								type="time"
								placeholder="Укажите время"
							/>
						</div>

						:
						<div></div>
				}

			</div>

			<div className="count-person">
				<label
					htmlFor="personTitle"
				>
					Кол-во персон
				</label>
				<div className="count-wrap">
					<button
						type="button"
						className="count-wrap__button"
						onClick={() => {
							countPerson === 1
								? setValuePerson(1)
								: setValuePerson(
									(prev) =>
										Number(prev) - 1
								);
							countPerson === 1
								? setCountPerson(1)
								: setCountPerson(
									countPerson - 1
								);
						}}
					></button>
					<span className="count-wrap__num">
						{countPerson}
					</span>
					<button
						type="button"
						className="count-wrap__button"
						onClick={() => {
							setValuePerson(
								(prev) => Number(prev) + 1
							);
							setCountPerson(countPerson + 1);
						}}
					>
						+
					</button>
				</div>
			</div>
			<p className="base-text Time__subtitle">
				Хотите мы позвоним?
			</p>
			<div className="radio-wrapper">
				<div className="radio">
					<input
						className="radio__input"
						type="radio"
						name="callbackUs"
						id="notCall"
						checked={isChecked}
						onChange={() =>
							setIsChecked(!isChecked)
						}
					/>
					<label htmlFor="notCall">
						Не перезванивать
					</label>
				</div>
				<div className="radio">
					<input
						className="radio__input"
						type="radio"
						name="callbackUs"
						id="callOperator"
					/>
					<label htmlFor="callOperator">
						Потребуется звонок оператора
					</label>
				</div>
			</div>
		</div>
	);
};

export default Time;




