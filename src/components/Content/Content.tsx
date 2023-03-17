import "./Content.scss";

import { food } from "../../dataBase";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { InView } from "react-intersection-observer";


import Card from "../Card/Card";
import Benefits from "../Benefits/Benefits";

interface IActiveSection {
	setActiveSection: (item: string) => void;
}

const Content = ({ setActiveSection }: IActiveSection) => {
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
							onChange={inView =>
								inView && setActiveSection(item.id)
							}
						>
							<span className="menu-title">
								<span className="menu-title__line"></span>
								{item.menuTitle}
							</span>

							<Swiper
								// centeredSlides
								// centeredSlidesBounds
								// spaceBetween={10}

								className="main-content__slider"
								breakpoints={{
									320: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 2,
									},
									1024: {
										slidesPerView: 3,
									},
									1440: {
										slidesPerView: 4,
									},
								}}
							>
								{item.foods.map((dish, index) => {
									return (
										<SwiperSlide
											key={index}
											className='swiper-slide'
										>
											<Card
												img={dish.img}
												name={dish.name}
												weight={dish.weight}
												price={dish.price}
												about={dish.about}
												id={index}
											/>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</InView>
					);
				})}
			</div>
			<Benefits />
		</section>
	);
};

export default Content;
