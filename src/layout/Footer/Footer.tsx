import "./Footer.scss";

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer container">
			<div className="footer__main-text">
				<a href="/#" className="logo">
					L O G O S
				</a>
				<br /> <br />
				<div className="text">
					<p>© ООО СК «АПШЕРОН»</p>
					<p>Все права защищены</p>

					<div className="text__policy">
						<p><Link to="/#">Пользовательское соглашение</Link></p>
						<p><Link to="/#">Карта сайта</Link></p>
						<p><Link to="/#">Политика конфиденциальности</Link></p>
					</div>

					<div className="footer__social">
						<div className="footer__emails">
							<a href='mailto:chernigovsky108@gmail.com' className="footer__email">
								<span>Максим frontend-developer:</span>
								<p>chernigovsky108@gmail.com</p>
							</a>

							<a href='mailto:chernigovsky108@gmail.com' className="footer__email">
								<span>Андрей frontend-developer:</span>
								<p>chernigovsky108@gmail.com</p>
							</a>
							<a href='mailto:chernigovsky108@gmail.com' className="footer__email">
								<span>Рамиль frontend-developer:</span>
								<p>osmanovramil823@gmail.com</p>
							</a>
							<a href='mailto:chernigovsky108@gmail.com' className="footer__email">
								<span>Семён team leader:</span>
								<p>chernigovsky108@gmail.com</p>
							</a>

						</div>

						<div className="footer__githubs">
							<a href="https://github.com/MaximProsin">Максим</a>
							<a href="https://github.com/AndrewChernigovsky">Андрей</a>
							<a href="https://github.com/ramilqO">Рамиль</a>
							<a href="https://github.com/GitStudentSem">Семён</a>
						</div>
					</div>
				</div>
			</div>

			<nav className="footer__nav">
				<Link to="/#" className="nav-item">
					О ресторане
				</Link>
				<Link to="/RulesOfDelivery" className="nav-item">
					Условия доставки
				</Link>
				<Link to="/#" className="nav-item">
					Возврат товара
				</Link>
				<Link to="/promotions" className="nav-item">
					Акции
				</Link>
			</nav>
		</footer>
	);
};

export default Footer;
