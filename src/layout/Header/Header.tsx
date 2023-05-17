import "./Header.scss";

import {LocationIcon} from "../../icons/LocationIcon";
import {CallingIcon} from "../../icons/CallingIcon";
import {SearchIcon} from "../../icons/SearchIcon";
import {FoodDeliciousIcon} from "../../icons/FoodDeliciousIcon";

import {useState} from "react";

import {food} from "../../dataBase";
import {HashLink} from "react-router-hash-link";
import {Link} from "react-router-dom";
import {ICard} from "components/screens/main/Card/Card";
import {BuyIcon} from "../../icons/BuyIcon";

interface IHeader {
	orders: ICard[];
}

const Header = ({orders}: IHeader) => {
	const [isOpen, setIsOpen] = useState(false);
	const zIndexHeader = {
		zIndex: 11,
	};

	return (
		<header className="header" style={isOpen ? zIndexHeader : {}}>
			<div className="header__container">
				<div
					className={`overlay overlay--${
						isOpen ? "opened" : "closed"
					}`}
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				></div>
				<button
					className={`burger-wrapper burger-wrapper--${
						isOpen ? "opened" : "closed"
					}`}
					type="button"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<div
						className={`burger  js-burger--${
							isOpen ? "opened" : "closed"
						}`}
					>
						<span className="js-burger__span"></span>
						<span className="js-burger__span"></span>
						<span className="js-burger__span"></span>
					</div>
					<span className="burger__text">меню</span>
				</button>
				<nav className={`nav nav--${isOpen ? "opened" : "closed"}`}>
					<h2>Меню</h2>
					<ul className="nav__list">
						{food.map((item, index) => {
							return (
								<li
									className={"nav__item"}
									key={index + item.menuTitle}
								>
									<FoodDeliciousIcon/>
									<HashLink
										to={"#" + item.id}
										onClick={() => {
											setIsOpen(!isOpen);
										}}
									>
										{item.menuTitle}
									</HashLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="header__logo">
					<Link to="/rulesofdelivery" className="logo">
						L O G O S
					</Link>
				</div>
				<div className="input-block header__input-block">
					<form className="input-block__form">
						<div className="input-block__decoration-image header__decoration-image">
							<LocationIcon/>
						</div>
						<input
							type="search"
							className="input-search header__input"
							placeholder="Введите адрес доставки"
						/>
						<button
							type="submit"
							className="search-image header__search-image"
						>
							<SearchIcon/>
						</button>
					</form>
				</div>

				<div className="contacts header__contacts">
					<a href="tel:+79175105759" className="contacts__link">
						<CallingIcon/>
					</a>
					<div className="contacts__info header__contacts-info">
						<span className="contacts__text">Контакты:</span>
						<br/>
						<a
							href="tel:+79175105759"
							className="contacts__link link"
						>
							+7 (917) 510-57-59
						</a>
					</div>
				</div>
				<Link to="/cart" className="cart header__cart">
			<span className="buyIcon">
				<BuyIcon/>
			</span>
					<span className="cart__text ">Корзина</span>
					<span className="cart__counter-block">
				<span className="cart__counter">{orders.length}</span>
			</span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
