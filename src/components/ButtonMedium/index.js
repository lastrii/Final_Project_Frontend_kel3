import React from "react";
// import Button from 'react-bootstrap/Button';
import '../../App.css';

const ButtonMediumPurple = (props) => {
  const { namaButton, linkHref, onClick, type, value } = props;

  return (
		<a href={linkHref}>
			<button className="btn btnPurpleMd" type={type} value={value} href={linkHref} onClick={onClick}>
				{namaButton}
			</button>
		</a>
	);
};

export default ButtonMediumPurple;