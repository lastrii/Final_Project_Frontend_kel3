import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../App.css';
import BtnMdPurple from '../ButtonMedium';
import BtnLgPurple from '../ButtonLarge';
import BtnMdSecondary from '../BtnMdSecondary';
import Modal from 'react-bootstrap/Modal';
import imgPenawar from '../../assets/images/img-penawar.png';
import imgProduct from '../../assets/images/product.png';

function ModalCenter(props) {
	return (
		<Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body style={{ marginLeft: '5%', marginRight: '5%' }}>
				<h6 className="fw-bold">Yeay kamu berhasil mendapat harga yang sesuai</h6>
				<p style={{ color: '#8A8A8A' }}> Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya </p>
				<div style={{ background: '#EEEEEE', borderRadius: '16px' }}>
					<div className="p-3">
						<div className="row">
							<h6 className="fw-bold mb-3 text-center">Product Match</h6>
						</div>
						<div className="row d-flex align-items-center">
							<div className="col-2 ms-3">
								<img className="img-penawar rounded-4 col-3" src={imgPenawar} alt="" />
							</div>
							<div className="col-auto">
								<div className="row-col mt-3" style={{ lineHeight: '50%' }}>
									<p className="fw-bold">nameBuyer</p>
									<p className="">cityBuyer</p>
								</div>
							</div>
						</div>
						<div className="row mt-3 d-flex align-items-center">
							<div className="col-2 ms-3">
								<img src={imgProduct} className="img-tawaran" alt="" />
							</div>
							<div className="col-auto">
								<div className="row-col mt-3" style={{ lineHeight: '50%' }}>
									<p className="fw-bold">Jam Tangan Casio</p>
									<p className="">Rp. 250.000</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer className="d-flex justify-content-center">
				<BtnLgPurple namaButton="Hubungi via Whatsapp" linkHref="" />
			</Modal.Footer>
		</Modal>
	);
}

const CardTawaran = (props) => {
	const [modalShow, setModalShow] = React.useState(false);
	const { imgProduct, nameProduct, priceProduct, priceTawaran, time } = props;
	return (
		<>
			<div className="row">
				<div className="col-auto">
					<img className="img-tawaran" src={imgProduct} alt="iconProduct" />
				</div>
				<div className="col-auto">
					<div className="row-col">
						<div className="title-card-tawaran">Penawaran Produk</div>
						<div className="text-card-tawaran">{nameProduct}</div>
						<div className="text-card-tawaran">{priceProduct}</div>
						<div className="text-card-tawaran">Ditawar {priceTawaran}</div>
					</div>
				</div>
				<div className="col-auto ms-auto jam-card-tawaran">{time}</div>
			</div>
			<div className="row">
				<div className="col mt-3">
					<BtnMdSecondary namaButton="Tolak" />
					<BtnMdPurple namaButton="Terima" onClick={() => setModalShow(true)} />
					<ModalCenter show={modalShow} onHide={() => setModalShow(false)} />
				</div>
			</div>
			<hr className="m-4"></hr>
		</>
	);
};

export default CardTawaran;
