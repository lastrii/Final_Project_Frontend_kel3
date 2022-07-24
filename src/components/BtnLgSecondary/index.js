import React from 'react';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';

const BtnLgSecondary = (props) => {
	const { namaButton, linkHref, onClick, type, value } = props;

	return (
		<a href={linkHref}>
			<button className="btn btnSecondaryLg" type={type} value={value}  onClick={onClick}>
				{namaButton}
			</button>
		</a>
	);
};

export default BtnLgSecondary;
