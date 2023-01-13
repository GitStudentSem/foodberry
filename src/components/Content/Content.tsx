import { food } from "../../dataBase";
import "./Content.scss";

const Content = () => {

	return (
		<section className="main-content">
			<div className="main-content__container">
				{food.map((item, index) => {
					console.log(item);

					return (
						<div key={item.menuTitle + index}>
							<div id={item.id} className="main-content__content">
								{item.menuTitle}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Content;