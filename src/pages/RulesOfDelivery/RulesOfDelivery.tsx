import "./RulesOfDelivery.scss";

import Map from "../../components/screens/main/Map/Map";
import {useState} from "react";
import Arrow from "./Arrow";
import data from "./data";

const RulesOfDelivery = () => {
	const [isAnswer, setIsAnswer] = useState('RulesOfDelivery__question-main RulesOfDelivery__question--open');
	const [isArrow, setIsArrow] = useState(false);

	const dataBaseQuestions: {
		question: {
			title: string;
			subtitle: string;
		}
	}[] = [
		{
			question: {
				title: "У наших курьеров всегда должна быть сдача!",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
		{
			question: {
				title: "Вам что-то не довезли?",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
		{
			question: {
				title: "Не понравился продукт?",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
		{
			question: {
				title: "Если появились замечания",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие- либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
		{
			question: {
				title: "Оплата Visa, MasterCard и МИР",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
		{
			question: {
				title: "Реквизиты",
				subtitle: "Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам",
			}
		},
	]

	return (
		<main className="main">
			<section className="RulesOfDelivery">
				<div className="RulesOfDelivery__wrapper">
					<h1 className="RulesOfDelivery__title">Условия доставки</h1>
					<div className="RulesOfDelivery__faqMap">
						<div className="RulesOfDelivery__questions">
							{
								data.map((question, index) => {
									return (
										<>
											<div
												className="RulesOfDelivery__question"
												key={index}
											>
												<div className="RulesOfDelivery__question-main" onClick={(e) => {
													e.currentTarget.className = isAnswer
												}} onDoubleClick={(e) => {
													e.currentTarget.className = 'RulesOfDelivery__question-main'
												}}>
													<p className="RulesOfDelivery__question-first">
														{question.question.title}
													</p>
													<Arrow isArrow={isArrow}/>
												</div>
												<p className={`RulesOfDelivery__answer`}>
													{question.question.subtitle}
												</p>
											</div>
										</>
									)
								})
							}


						</div>
						<Map classNames="map RulesOfDelivery__map"/>
					</div>

					<div className="RulesOfDelivery__timesWork">
						<div className="RulesOfDelivery__timesWork-text">
							<p className="RulesOfDelivery__subtitle">
								График работы доставки:
							</p>
							<span className="RulesOfDelivery__subtitle-about">
								{" "}
								с 10:00-21:00
							</span>
						</div>
						<div className="RulesOfDelivery__timesWork-text">
							<p className="RulesOfDelivery__subtitle">
								График работы кафе:
							</p>
							<span className="RulesOfDelivery__subtitle-about">
								с 08:00-21:00
							</span>
						</div>
					</div>
					<div className="RulesOfDelivery__freeDelivery">
						<p className="RulesOfDelivery__subtitle">
							Минимальный заказ:
						</p>
						<p className="RulesOfDelivery__subtitle-about">
							Бесплатная доставка пешим курьером при сумме заказа
							от 400 ₽ Доставка оператором такси от любой суммы
							заказа - по тарифам перевозчика.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default RulesOfDelivery;
