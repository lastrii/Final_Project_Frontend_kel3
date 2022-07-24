import React from 'react';
import '../../App.css';

const BtnMdSecondary = (props) => {
	const { namaButton, linkHref, onClick, type, value } = props;

	return (
		<a href={linkHref}>
			<button className="btn btnSecondaryMd" type={type} value={value} href={linkHref} onClick={onClick}>
				{namaButton}
			</button>
		</a>
	);
};

export default BtnMdSecondary;
