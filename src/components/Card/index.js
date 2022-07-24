import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';

const Card = (props) => {
	const { imgProduct, nameProduct, typeProduct, priceProduct, linkHref } = props;
	return (
		<div className="col-12">
			<a id="card" className="card" type="submit" href={linkHref}>
				<div className="card-body">
					<img className="img-product" src={imgProduct} alt="" />
					<div className="card-title mt-3">
						<h5>{nameProduct}</h5>
					</div>
					<p className="card-text">{typeProduct}</p>
					<div className="card-title">
						<h5 className='fw-bold'>Rp. {priceProduct}</h5>
					</div>
				</div>
			</a>
		</div>
	);
};

export default Card;
