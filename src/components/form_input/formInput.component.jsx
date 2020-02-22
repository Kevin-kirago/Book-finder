import React from "react";
import "../form_input/formInput.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<div className="form__group">
			<label className="form__input--label">{label}</label>
			<input className="form__input" onChange={handleChange} {...otherProps} />
		</div>
	);
};

export default FormInput;
