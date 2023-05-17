import { useState } from "react";
import InputMask from "react-input-mask";

interface Iinput {
	type?: string;
	name: string;
	required?: boolean;
	pattern?: any;
	mask?: any;
	placeholder?: string;
	maxLength?: number;
	minLength?: number;
}

const Input = ({
	type,
	name,
	required,
	pattern,
	mask,
	placeholder,
	maxLength,
	minLength
}: Iinput) => {
	const [values, setValues] = useState("");

	// let isValid: any;
	const fooValidate = (value: string) => {
		setValues(value);
	};

	return (
		<InputMask
			type={!type ? "text" : type}
			className= 'input'
			placeholder={placeholder}
			name={name}
			required={required}
			mask={mask}
			value={values}
			pattern={pattern}
			minLength={minLength}
			maxLength={maxLength}
			onChange={(e) => {
				setValues(e.target.value)
				fooValidate(e.target.value)
			}}
		/>
	);
};

export default Input;
