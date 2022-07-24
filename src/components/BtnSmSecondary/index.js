import React from 'react';
// import Button from 'react-bootstrap/Button';
import '../../App.css';

const BtnSmSecondary = (props) => {
	const { namaButton, linkHref, onClick, type, value } = props;

	return (
		<a href={linkHref}>
			<button className="btn btnSecondaryLg" type={type} value={value} href={linkHref} onClick={onClick}>
				{namaButton}
			</button>
		</a>
	);
};

export default BtnSmSecondary;
