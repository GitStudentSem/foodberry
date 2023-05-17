import {useRef, useState} from "react";

import CreditCard from "../CreditCard/CreditCard";

// styles
import "./Pay.scss";

import {regexPerson} from "../../../../functions/regex";

const Pay = () => {
	const windowSize = useRef([window.innerWidth]);
	const [activeTabPay, setActiveTabPay] = useState(0);

	return (
		<div className="Pay">
			<p className="base-text  Pay__subtitle">3. Оплатить</p>
			<div className="toggle-pay">
				<span
					className={`toggle-pay__span ${activeTabPay === 1 ? "active" : ""
					}`}
					onClick={() => {
						setActiveTabPay(1);
					}}
				>
					{`${windowSize.current[0] >= 768
						? "Оплата онлайн"
						: "онлайн"
					}`}
				</span>
				<span
					className={`toggle-pay__span ${activeTabPay === 2 ? "active" : ""
					}`}
					onClick={() => {
						setActiveTabPay(2);
					}}
				>
					{`${windowSize.current[0] >= 768
						? "Курьеру картой"
						: "картой"
					}`}
				</span>
				<span
					className={`toggle-pay__span ${activeTabPay === 3 ? "active" : ""
					}`}
					onClick={() => {
						setActiveTabPay(3);
					}}
				>
					Наличными
				</span>
			</div>
			<input
				type="text"
				name="SurrenderOfMoney"
				className={`input form-pay-result ${activeTabPay === 3 ? "block" : ""
				} `}
				placeholder="Сдача с"
				pattern={regexPerson}
				minLength={3}
				maxLength={5}
			/>

			{
				activeTabPay === 1 ? <CreditCard/> : <div></div>
			}
		</div>
	);
};

export default Pay;
