// import { useRef, useEffect } from "react";

// export function useHorizontalScroll(
// 	ref.current: HTMLElement;
// ) {
// 	useEffect(() => {
// 		const el = ref.current;

// 		if (el) {
// 			const onWheel = (e: WheelEvent) => {
// 				if (e.deltaY === 0) return;
// 				e.preventDefault();
// 				el.scrollTo({
// 					left: el.scrollLeft + e.deltaY,
// 					behavior: "smooth",
// 				});
// 			};
// 			el.addEventListener("wheel", onWheel);
// 			return () => el.removeEventListener("wheel", onWheel);
// 		}
// 	}, []);
// }

export { };