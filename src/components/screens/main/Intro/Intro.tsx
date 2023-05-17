import "./Intro.scss";

const Intro = () => {

	return (
		<section className="intro">
			<div className="intro__wrapper">
				<div className="intro__inner">
					<h2 className="intro__title">
						<span>Доставка вкуснейших</span>
						<span>блюд за 60 минут</span>
					</h2>
					<p className="intro__subtitle">Ещё не пробовал?</p>
				</div>
			</div>
		</section>
	);
};

export default Intro;
