import {Link} from "react-router-dom";
import {useState} from "react";

const NotFoundPage = () => {
	// const [count, setCount] = useState(5)
	// for (let i = 0; i <= 5; i--) {
	// 	setTimeout(() => setCount(prev => prev - 1), 1000);
	// }
	//
	// if (count === 0) {
	// 	window.location.href = '/'
	// }

	return (
		<main className="main container">
			<div></div>
			<div className="title">
				Страница не найдена, перенаправление на главную через - 2 секунд
			</div>
		</main>
	);
};

export default NotFoundPage;

