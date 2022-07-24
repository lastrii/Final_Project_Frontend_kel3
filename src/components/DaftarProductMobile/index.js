import React from 'react';
import '../../App.css';

const DaftarProductMobile = (props) => {
	const { namaButton, linkHref, type } = props;

	return (
		<a className="btn btnDaftarProductmobile " type={type} href={linkHref}>
			{namaButton}
		</a>
	);
};

export default DaftarProductMobile;