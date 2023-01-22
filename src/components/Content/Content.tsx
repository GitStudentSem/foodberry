import { food } from "../../dataBase";
import "./Content.scss";

import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/Card';
import { InView } from "react-intersection-observer";

interface IactiveSection {
	setActiveSection: (item: string) => void;
}

const Content = ({setActiveSection}: IactiveSection) => {
	return (
		<section className="main-content">
			<div className="main-content__container">
				{food.map((item) => {
					return (
						<InView
							key={item.id}
							id={item.id}
							className="main-content__content"
							as="div"
							threshold={1}
							onChange={(inView, entry) =>
								inView && setActiveSection(item.id)
							}
						>
							<span className="menu-title">{item.menuTitle}</span>

							<Swiper
							modules={[Autoplay]}
							spaceBetween={10}
							// slidesPerView={4}
							className="main-content__slider"
							autoplay={{delay: 5000}}
							breakpoints={{
								// when window width is >= 640px
								640: {
								  width: 640,
								  slidesPerView: 1,
								},
								// when window width is >= 768px
								768: {
								  width: 768,
								  slidesPerView: 2,
								},
								1024: {
									width: 1024,
									slidesPerView: 3
								},
								1440: {
									width: 1440,
									slidesPerView: 4
								}
							  }}
							>
								{item.foods.map((dish, index) => {
								return (
									<SwiperSlide style={{ width: "auto" }} key={index}>
											<Card
												img={dish.img}
												name={dish.name}
												weight={dish.weight}
												price={dish.price}
												about={dish.about}
											/>
									</SwiperSlide>
								);
							})}
							</Swiper>
						</InView>
					);
				})}
			</div>
		</section>
	);
};

export default Content;
