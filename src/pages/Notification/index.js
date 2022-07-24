import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogin from '../../components/NavbarLogin';
import imgProduct from '../../assets/images/product.png';

function Notification() {
	return (
		<>
			{/* NAVBAR */}
			<NavbarLogin />

			{/* PRODUCT */}

			<div className="container mt-3">
				<h4 className="fw-bold mt-4 mb-4 text-center">Notification</h4>
				<hr className="mt-4 mb-4" style={{ width: '100%' }}></hr>

				<div className="row">
					<div className="col-auto">
						<img className="img-tawaran" src={imgProduct} alt="iconProduct" />
					</div>
					<div className="col-auto">
						<div className="row-col">
							<div className="title-card-tawaran">Penawaran Produk</div>
							<div className="text-card-tawaran">Jam Tangan Casio</div>
							<div className="text-card-tawaran text-decoration-line-through">Rp. 250.000</div>
							<div className="text-card-tawaran">Berhasil Ditawar Rp. 200.000</div>
						</div>
					</div>
					<div className="col-auto ms-auto jam-card-tawaran">20 Apr, 14:04</div>
				</div>
				<hr className="mt-4 mb-4" style={{ width: '100%' }}></hr>
			</div>
		</>
	);
}

export default Notification;
