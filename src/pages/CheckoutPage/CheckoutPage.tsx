import { Link } from "react-router-dom";
import "./CheckoutPage.scss";
import { ClockIcon } from "./../../icons/ClockIcon";
import { useRef, useState } from "react";

import notWorkImage from "../../images/notWork.png";

import {
	regexAny,
	regexName,
	regexHouseNumber,
	regexPhone,
} from "./../../functions/regex";

import Input from "./Input";
import { validName, validPerson } from "./../../functions/regex"

import Input from "./Input";

const CheckoutFormPage = () => {
	const windowSize = useRef([window.innerWidth]);
	const [isDelivery, setIsDelivery] = useState(false);
	const [isSelectRestraunt, setIsSelectRestraunt] = useState(false);
	const [activeTabPay, setActiveTabPay] = useState(0);
	const [isTimeDate, setIsTimeDate] = useState(false);

	const [countPerson, setCountPerson] = useState(1);
	const [valuePerson, setValuePerson] = useState(1);


	const [disabled, setDisabled] = useState(false)

	// const [isValidation, setIsValidation] = useState(Boolean);
	// const [valueInput, setValueInput] = useState(' ');


	const [isValid, setIsValid] = useState(false);

	const [isFocus, setIsFocus] = useState(false);
	const [isBlur, setIsBlur] = useState(false);


	const updateValue = (value: string): void => {
		const val = Number(value);
		setCountPerson(val);
	};


	let regexAny = new RegExp(/^[а-яА-ЯёЁa-zA-Z0-9]*/i);
	let regexName = new RegExp(/^[а-яА-ЯёЁa-zA-Z ]*$/i);
	let regexHouseNumber = new RegExp(/^[0-9]*$/i);

	let regexPhone = new RegExp(
		/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm
	);


	return (
		<main className="main main-checkoutPage">
			<section className="checkoutForm">
				<div className="checkoutForm__container">
					<Link className="checkoutForm__link" to={"cart"}>
						в корзину
					</Link>
					<h2 className="checkoutForm__title">Оформление заказа</h2>
					<div className="checkoutForm__wrapper">
						<div className="not-work">
							<div className="not-work__text">
								<p className="checkoutForm__subtitle">
									Сегодня мы уже не доставляем.
								</p>
								<p className="checkoutForm__subtitle">
									Заказы принимаем до 20:50, доставляем с 8:30
									до 21:30
								</p>
							</div>
							<div className="not-work__image">
								<img
									src={notWorkImage}
									alt="later working, not deliveries"
								/>
							</div>
						</div>

						<form
							className="checkoutForm__form"
						>

						<form className="checkoutForm__form">

							<div className="checkoutForm__form-contacts">
								<p className="base-text checkoutForm__subtitle">
									1. Контактная информация
								</p>
								<div className="input-contacts">
									<Input
										placeholder="Имя&#42;"
										name="userName"
										regex={regexName}
										required

										setDisabled={setDisabled}

									/>
									<Input
										type="tel"
										placeholder="Телефон&#42;"
										name="userPhone"
										required
										regex={regexPhone}
										mask={"+7 (999) 999-99-99"}

										setDisabled={setDisabled}


									/>
								</div>
							</div>
							<div className="checkoutForm__form-delivery">
								<p className="base-text checkoutForm__subtitle">
									2. Доставка
								</p>
								<div className="delivery-time">
									<div className="toggle-delivery">
										<div className="delivery">
											<div className="delivery-tabs">
												<span
													className={`toggle-delivery__span-delivery ${
														isDelivery
															? "active"
															: ""
													}`}
													onClick={() =>
														setIsDelivery(true)
													}
												>
													Доставка
												</span>
												<span
													className={`toggle-delivery__span toggle-delivery__span-selfDelivery ${
														!isDelivery
															? "active"
															: ""
													}`}
													onClick={() =>
														setIsDelivery(false)
													}
												>
													Самовывоз
												</span>
												<div
													className={`time-clock ${
														!isDelivery
															? "none"
															: ""
													}`}
												>
													<ClockIcon />
													<span className="base-text">
														Доставим через 1 час 30
														минут
													</span>
												</div>
											</div>

											<div
												className={`tab-adress ${
													isDelivery ? "active" : ""
												}`}
											>
												<p className="base-text checkoutForm__subtitle">
													Адрес доставки
												</p>
												<div className="input-adress">
													<Input
														name="street"
														placeholder="Укажите улицу&#42;"
														required
														regex={regexAny}
													/>
													<Input
														name="numberHouse"
														placeholder="Номер дома&#42;"
														required
														regex={regexHouseNumber}
													/>
													<Input
														name="numberOfficeFlat"
														placeholder="№ квартиры/офиса"
														required
														regex={regexAny}
													/>
													<Input
														name="entrance"
														placeholder="Подъезд"
														regex={regexAny}
													/>
													<Input
														name="floor"
														placeholder="Этаж"
														regex={regexAny}
													/>
													<textarea
														className="input-adress__input  input"
														placeholder="Комментарий"
														autoComplete="off"
														maxLength={200}
														name="comment"
													/>
												</div>
											</div>
											<div
												className={`tab-adress ${
													!isDelivery ? "active" : ""
												}`}
											>
												<p className="base-text checkoutForm__subtitle">
													Выберите ресторан
												</p>
												<div
													className={`select-wrap ${
														isSelectRestraunt
															? "selected"
															: ""
													}`}
												>
													<select
														className="select-restaurant"
														name="restaurant"
														id="restaurant"
														onClick={() => {
															setIsSelectRestraunt(
																!isSelectRestraunt
															);
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
															Чревоугодие наш
															конек
														</option>
														<option value="restaurant4">
															Шашлычки-машлычки
														</option>
														<option value="restaurant5">
															Чет кушать
															захотелось
														</option>
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="checkoutForm__form-pay">
								<p className="base-text  checkoutForm__subtitle">
									3. Оплатить
								</p>
								<div className="toggle-pay">
									<span
										className={`toggle-pay__span ${
											activeTabPay === 1 ? "active" : ""
										}`}
										onClick={() => {
											setActiveTabPay(1);
										}}
									>
										{`${
											windowSize.current[0] >= 768
												? "Оплата онлайн"
												: "онлайн"
										}`}
									</span>
									<span
										className={`toggle-pay__span ${
											activeTabPay === 2 ? "active" : ""
										}`}
										onClick={() => {
											setActiveTabPay(2);
										}}
									>
										{`${
											windowSize.current[0] >= 768
												? "Курьеру картой"
												: "картой"
										}`}
									</span>
									<span
										className={`toggle-pay__span ${
											activeTabPay === 3 ? "active" : ""
										}`}
										onClick={() => {
											setActiveTabPay(3);
										}}
									>
										Наличными
									</span>
								</div>
								<span
									className={`form-pay-result ${
										activeTabPay === 3 ? "block" : ""
									} `}
								>
									Сдача с
								</span>
							</div>
							<div className="checkoutForm__form-deliveryTime">
								<p className="base-text  checkoutForm__subtitle">
									4. Когда доставить
								</p>
								<div className="delivery-time">
									<div className="toggle-checkTime">
										<span
											className={`toggle-checkTime__span ${
												!isTimeDate ? "active" : ""
											}`}
											onClick={() => setIsTimeDate(false)}
										>
											В ближайшее время
										</span>
										<span
											className={`toggle-checkTime__span ${
												isTimeDate ? "active" : ""
											}`}
											onClick={() => setIsTimeDate(true)}
										>
											Ко времени
										</span>
									</div>

									{/*
									<input
										className={`input-enterTime input ${
											isTimeDate ? "active" : ""
										} `}
										placeholder="Укажите время"
									/> */}


									<Input
										name="edd"
										placeholder="Укажите время"
									/>
								</div>

								<div className="count-person">
									<label
										className="personTitle"
										htmlFor="personTitle"
									>
										Кол-во персон
									</label>
									<input
										className="input"
										placeholder="Кол-во персон"
										id="personTitle"
										value={valuePerson}
										onChange={(e) =>
											updateValue(e.currentTarget.value)
										}
									/>
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
								<p className="base-text checkoutForm__subtitle">
									Хотите мы позвоним?
								</p>
								<div className="radio-wrapper">
									<div className="radio">
										<input
											className="radio__input"
											type="radio"
											name="callbackUs"
											id="notCall"
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
							<div className="checkoutForm__form-check">

								<button
									type="submit"
									className="checkoutForm__submit"
									disabled={disabled}

									onSubmit={((e) => { console.log(e) })}
								>

								<button className="checkoutForm__submit" type="submit">

									Оформить заказ
								</button>
								<div className="policy-check">
									<input
										className="policy-check__input "
										type="checkbox"
										name="policy"
										id="policy"
									/>
									<label htmlFor="policy">
										Я согласен на обработку моих перс.
										данных в соответствии с{" "}
										<Link to={"policy"}>Условиями</Link>
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</main>
	);
};

export default CheckoutFormPage;