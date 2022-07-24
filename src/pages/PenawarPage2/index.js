import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import NavbarPlain from '../../components/NavbarPlain';
import { ArrowLeft } from 'react-bootstrap-icons';
import CardPenawar from '../../components/CardPenawar';
import BtnMdPurple from '../../components/ButtonMedium';
import BtnLgPurple from '../../components/ButtonLarge';
import BtnMdSecondary from '../../components/BtnMdSecondary';
import Modal from 'react-bootstrap/Modal';
import imgPenawar from '../../assets/images/img-penawar.png';
import imgProduct from '../../assets/images/product.png';

function ModalCenter(props) {
	return (
		<>
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
					<BtnLgPurple namaButton="Kirim" linkHref="" />
				</Modal.Footer>
			</Modal>
		</>
	);
}

const PenawarPage1 = () => {
	const [modalShow, setModalShow] = React.useState(false);
	return (
		<>
			<NavbarPlain judulPage="Info Penawar" />

			<div className="container mt-4">
				<a className="iconArrowLeft" href="/">
					<ArrowLeft size={34} />
				</a>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<CardPenawar imgPenawar={imgPenawar} nameBuyer="Nama Buyer" cityBuyer="Kota Surabaya" />
						<p className="fw-bold mt-5 mb-4">Daftar Produkmu yang ditawar</p>
						{/* list tawaran */}
						<div className="row">
							<div className="col-auto">
								<img className="img-tawaran" src={imgProduct} alt="iconProduct" />
							</div>
							<div className="col-auto">
								<div className="row-col">
									<div className="title-card-tawaran">Penawaran Produk</div>
									<div className="text-card-tawaran">Jam Tangan Casio</div>
									<div className="text-card-tawaran">Rp. 250.000</div>
									<div className="text-card-tawaran">Ditawar Rp. 200.000</div>
								</div>
							</div>
							<div className="col-auto ms-auto jam-card-tawaran">20 Apr, 14:04</div>
						</div>
						{/* button */}
						<div className="col mt-3">
							<BtnMdSecondary namaButton="Tolak" />
							<BtnMdPurple namaButton="Terima" onClick={() => setModalShow(true)} />
							<ModalCenter show={modalShow} onHide={() => setModalShow(false)} />
						</div>
						<hr className="m-4"></hr>
					</div>
				</div>
				<div className="row"></div>
			</div>
		</>
	);
};

export default PenawarPage1;
