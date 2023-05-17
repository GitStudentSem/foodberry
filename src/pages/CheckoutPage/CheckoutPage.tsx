import {Link} from "react-router-dom";
import "./CheckoutPage.scss";
import "./MediaQueries.scss";

import {useState} from "react";

// images
import notWorkImage from "../../images/notWork.png";

// functions

// components
import ContactInfo from "../../components/screens/Checkout/ContactInfo/ContactInfo";
import Delivery from "../../components/screens/Checkout/Delivery/Delivery";
import Pay from "../../components/screens/Checkout/Pay/Pay";
import Time from "../../components/screens/Checkout/Time/Time";

const CheckoutFormPage = () => {
	const [isDelivery, setIsDelivery] = useState<boolean>(false);
	const [disabled, setDisabled] = useState(true);
	const [isChecked, setIsChecked] = useState(false);


	let currentTime: Date = new Date();
	let year = currentTime.getFullYear();
	let month = currentTime.getMonth();
	let day = currentTime.getDate();

	let hoursClose = 20;
	let minutesClose = 50;
	let secondsClose = 0;

	let hoursClose1 = 8;
	let minutesClose1 = 30;
	let secondsClose1 = 0;

	let timeClose: Date = new Date(year, month, day, hoursClose, minutesClose, secondsClose);

	let timeClose1: Date = new Date(year, month, day, hoursClose1, minutesClose1, secondsClose1);

	let currentTimeMilliseconds = currentTime.getTime();
	let timeToCloseMilliseconds = timeClose.getTime();
	let timeToClose1Milliseconds = timeClose1.getTime();

	let differentTime = Math.round(currentTimeMilliseconds - timeToCloseMilliseconds);

	let differentTime1 = Math.round(currentTimeMilliseconds - timeToClose1Milliseconds);

	return (
		<main className="main main-checkoutPage">
			<section className="checkoutForm">
				<div className="checkoutForm__container">
					<Link className="checkoutForm__link" to="../cart">
						в корзину
					</Link>
					<h2 className="checkoutForm__title">Оформление заказа</h2>
					<div className="checkoutForm__wrapper">
						{differentTime > 0 || differentTime1 < 0 ?
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
							: <div></div>
						}

						<form className="checkoutForm__form" onChange={(e: any) => {


							if (e.currentTarget.checkValidity() === false && isChecked === false) {
								e.preventDefault()
								setDisabled(true)
								console.log(e.currentTarget.checkValidity(), 'checkValidity = false')
							} else {
								setDisabled(false)
								console.log(e.currentTarget.checkValidity(), 'checkValidity = true')
							}
						}}>

							<ContactInfo/>
							<Delivery isDelivery={isDelivery} setIsDelivery={setIsDelivery}/>
							<Pay/>
							<Time/>

							<div className="checkoutForm__form-check">
								<button
									className="checkoutForm__submit"
									type="submit"
									disabled={disabled}
									onSubmit={(e) => {
										console.log(e);
									}}
								>
									Оформить заказ
								</button>
								<div className="policy-check">
									<input
										className="policy-check__input "
										type="checkbox"
										name="policy"
										id="policy"
										checked={isChecked}
										onChange={() =>
											setIsChecked(!isChecked)
										}
										required
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
