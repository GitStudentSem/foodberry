import {regexPerson} from "../../../../functions/regex";
import Input from "../Input/Input";

import './CreditCard.scss'

const CreditCard = () => {

	return (
		<div className="credit-card">
			<div className="credit-card__name">
				<div className="credit-card__input">
					<span>
						Номер карты
					</span>
					<Input
						name={"cardNumber"}
						placeholder={"#### #### #### ####"}
						required
						mask={"9999 9999 9999 9999"}
						minLength={20}
						pattern={regexPerson}
					/>
				</div>

				<div className="credit-card__input">
					<span>
						Имя Фамилия
					</span>
					<Input
						name={"cardHolders"}
						placeholder={"Андрей Андреевич"}
						minLength={6}
						required
					/>
				</div>
			</div>
			<div className="credit-card__dates">
				<div className="credit-card__input">
					<span>
						Месяц
					</span>
					<Input
						type="text"
						name={"Date"}
						required
						mask={"99"}
						placeholder={"01"}
						pattern={regexPerson}
					/>
				</div>

				<div className="credit-card__input">
					<span>
						Год
					</span>
					<Input
						type="text"
						name={"cardYears"}
						required
						mask={"2099"}
						placeholder={"2023"}
						pattern={regexPerson}
					/>
				</div>

				<div className="credit-card__input">
					<span>
						CWR
					</span>
					<Input name={"SecruityNumber"} placeholder="768" mask={"999"} required/>
				</div>
			</div>
		</div>
	)
}

export default CreditCard;
