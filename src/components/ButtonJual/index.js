import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';

const ButtonJual = (props) => {
	const { nameButton, linkHref, onClick, type, value } = props;
	return (
		<div className="d-flex container justify-content-center position-fixed btn-jual mb-3">
			<a href={linkHref}>
				<button className="btn btn-primary btn-primary-purple" type={type} value={value} onClick={onClick}>
					<i className="fa-solid fa-plus"></i> <span className="ms-2">{nameButton}</span>
				</button>
			</a>
		</div>
	);
};

export default ButtonJual;
