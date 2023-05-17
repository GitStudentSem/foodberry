import "./ContactsMap.scss"

const ContactsMap = () => {
	return (
		<>
			<div className="contactsMap">
				<h2 className="contactsMap__title">контакты</h2>
				<div className="contactsMap__description">
					<div className="contactsMap__adress">
						<span>Наш адрес:</span>
						<p> МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</p>
					</div>
					<div className="contactsMap__emails">
						<a href='mailto:chernigovsky108@gmail.com' className="contactsMap__email">
							<span>Наша почта:</span>
							<p>auto.wash@gmail.com</p>
						</a>
					</div>

				</div>

				<div className="contactsMap__contacts">
					<button type="button">ЗАБРОНИРОВАТЬ СТОЛ</button>
					<p className="contactsMap__telephone"><a href="tel:+79999999999">+7 (917) 510-57-59</a><span>Звоните или оставляйте заявку</span></p>
				</div>
				<div className="contactsMap__social-media">
					<div className="social-media">
						<p>Мы в соц сетях:</p>
						<div className="social-media-icons">
							<a href="components/screens/main/ContactsMap/ContactsMap#" aria-label='facebook'></a>
							<a href="components/screens/main/ContactsMap/ContactsMap#" aria-label='vkontakte'></a>
							<a href="components/screens/main/ContactsMap/ContactsMap#" aria-label='youtube'></a>
							<a href="components/screens/main/ContactsMap/ContactsMap#" aria-label='instagram'></a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactsMap;