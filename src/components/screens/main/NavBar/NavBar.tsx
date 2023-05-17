import "./NavBar.scss";
import {food} from "../../../../dataBase";
import {useRef, useEffect} from "react";

interface IActiveSection {
	activeSection: string;
}

const NavBar = ({activeSection}: IActiveSection) => {
	const NavBarRef = useRef<HTMLUListElement>(null);
	const windowWidth = document.body.clientWidth;

	useEffect(() => {
		const el = NavBarRef.current;

		if (el) {
			const onWheel = (e: WheelEvent) => {
				if (e.deltaY === 0) return;
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
					behavior: "smooth",
				});
			};
			if (windowWidth >= 1440) {
				el.removeEventListener("wheel", onWheel);
			}
			el.addEventListener("wheel", onWheel);
			return () => el.removeEventListener("wheel", onWheel);
		}
	}, []);

	const goScroll = (id: string) => {
		document?.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "start",
		});
	};
	return (
		<nav className="navbar">
			<div className="navbar__container">
				<ul className="navbar__list" ref={NavBarRef}>
					{food.map((item) => {
						return (
							<li
								className={`navbar__item ${
									activeSection === item.id ? "active" : ""
								}`}
								key={item.id}
							>
								<button onClick={() => goScroll(item.id)}>
									{item.menuTitle}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
