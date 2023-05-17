import "./Promotions.scss";
import promotion from "./promotionsData";

import PromotionCard from '../../components/screens/Promo/PromotionCard/PromotionCard';
import ContactsMap from '../../components/screens/main/ContactsMap/ContactsMap';
import Map from "components/screens/main/Map/Map";

const Promotions = () => {
    return (
        <main className="main">
            <section className="promotions">
                <div className="promotions__container">
                    <div className="promotions__title-wrapper">
                        <h1 className="promotions__title">Акции</h1>
                    </div>
                    <div className="promotions__promotion-cards">
                        {promotion.map((item, index) => {
                            return (
                                <PromotionCard
                                    key={index.toString()}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    dateTime={item.dateTime}
                                />
                            );
                        })}
                    </div>
                </div>
			</section>
			<div className="wrapper-contactsMap">
				<ContactsMap />
				<Map classNames="map" />

			</div>
        </main>
    );
}

export default Promotions;