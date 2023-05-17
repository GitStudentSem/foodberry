import star from '../../../../images/map/star.svg';
import star1 from '../../../../images/map/star1.svg';

const SvgRating = (num: any) => {

	return (

		<div className="star-rating" >
			{
				[...Array(num.num)].map((index) => {
					return (
						<object className="star"  type="image/svg+xml" data={star} key={index} width="25" height="25" >
							Your browser does not support SVG
						</object>
					);
				})
			}
		</div>
	)
}

export default SvgRating;