import {useState} from 'react'

interface IClass {
	isArrow?: boolean;
}

const Arrow = ({isArrow}: IClass) => {
	return (
		<div className={` RulesOfDelivery__arrow`}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M19 8.5L12 15.5L5 8.5" stroke="white" strokeWidth="2" strokeLinecap="round"
					  strokeLinejoin="round"/>
			</svg>
		</div>

	)
}

export default Arrow;