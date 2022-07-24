import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';

const CardPenawar = (props) => {
	const { imgPenawar, nameBuyer, cityBuyer } = props;
	return (
		<div className="card-penawar card">
			<div className="card-body row d-flex align-items-center">
				<div className="col-auto">
					<img className="img-penawar rounded-4 col-3" src={imgPenawar} alt="" />
				</div>
				<div className="col-auto">
					<div className="row-col">
						<div className="fw-bold">{nameBuyer}</div>
						<div className="city-penawar">{cityBuyer}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardPenawar;
